import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next";
import { getCookie, setCookie } from "cookies-next";
import NextAuth, { AuthOptions } from "next-auth";
import { decode, encode } from "next-auth/jwt";
import { Prisma, prisma } from "database";
import { loginSchema } from "validation";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

export function authOptionsWrapper(req: NextApiRequest, res: NextApiResponse) {
  const isCredentialsCallback =
    req.query?.nextauth?.includes("callback") &&
    req.query.nextauth?.includes("credentials") &&
    req?.method === "POST";

  return [
    req,
    res,
    {
      adapter: PrismaAdapter(prisma),
      providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
          credentials: {
            email: { label: "email", type: "text" },
            password: { label: "Password", type: "password" },
          },
          authorize: async (credentials) => {
            try {
              const result = await loginSchema.safeParseAsync(credentials);

              if (!result.success) {
                throw new Error(result.error.errors[0].message);
              }

              const { email, password } = result.data;

              const user = await prisma.user.findUnique({
                where: {
                  email,
                },
              });

              if (!user) {
                throw new Error("User account does not exist");
              }

              const passwordsMatch = await bcrypt.compare(
                password,
                user?.password!
              );

              if (!passwordsMatch) {
                throw new Error("Password is not correct");
              }

              return {
                id: user.id,
                email: user.email,
                image: user.image,
                name: user.name,
              };
            } catch (error) {
              if (
                error instanceof Prisma.PrismaClientInitializationError ||
                error instanceof Prisma.PrismaClientKnownRequestError
              ) {
                throw new Error("System error. Please contact support");
              }

              throw error;
            }
          },
        }),
      ],
      callbacks: {
        async redirect({ url }) {
          return url;
        },
        async signIn({ user }) {
          if (isCredentialsCallback) {
            if (user) {
              const sessionToken = randomUUID();
              const sessionExpiry = new Date(
                Date.now() + 60 * 60 * 24 * 30 * 1000
              );

              await prisma.session.create({
                data: {
                  sessionToken,
                  userId: user.id,
                  expires: sessionExpiry,
                },
              });

              setCookie("next-auth.session-token", sessionToken, {
                req,
                res,
                expires: sessionExpiry,
              });
            }
          }
          return true;
        },
      },
      secret: process.env.NEXTAUTH_SECRET,
      jwt: {
        maxAge: 60 * 60 * 24 * 30,
        async encode(params) {
          if (isCredentialsCallback) {
            const cookie = getCookie("next-auth.session-token", { req, res });
            console.log(cookie);

            if (cookie) return cookie;
            return "";
          }

          return encode(params);
        },
        async decode(params) {
          if (isCredentialsCallback) {
            return null;
          }
          return decode(params);
        },
      },
      debug: process.env.NODE_ENV === "development",
      events: {
        async signOut({ session }) {
          const { sessionToken = "" } = session as unknown as {
            sessionToken?: string;
          };

          if (sessionToken) {
            await prisma.session.deleteMany({
              where: {
                sessionToken,
              },
            });
          }
        },
      },
    } as AuthOptions,
  ] as const;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return NextAuth(...authOptionsWrapper(req, res));
}
