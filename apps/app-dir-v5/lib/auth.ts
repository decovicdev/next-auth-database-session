import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { loginSchema } from "validation";
import { encode } from "next-auth/jwt";
import { randomUUID } from "crypto";
import { ZodError } from "zod";
import bcrypt from "bcrypt";

import { Prisma, prisma } from "database/dist";

class InvalidLoginError extends CredentialsSignin {
  constructor(code) {
    super();
    this.code = code;
    this.message = code;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const adapter = PrismaAdapter(prisma);

  return {
    adapter,
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID!,
        clientSecret: process.env.FACEBOOK_SECRET!,
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
            const result = await loginSchema.parseAsync(credentials);

            const { email, password } = result;

            const user = await prisma.user.findUnique({
              where: {
                email,
              },
              include: {
                accounts: true,
              },
            });

            if (!user) {
              throw new InvalidLoginError("User account does not exist");
            }

            if (user.accounts[0].provider !== "credentials") {
              throw new InvalidLoginError(
                `Please sign in with ${user.accounts[0].provider}`
              );
            }

            const passwordsMatch = await bcrypt.compare(
              password,
              user?.password!
            );

            if (!passwordsMatch) {
              throw new InvalidLoginError("Password is not correct");
            }

            return user as any;
          } catch (error) {
            if (
              error instanceof Prisma?.PrismaClientInitializationError ||
              error instanceof Prisma?.PrismaClientKnownRequestError
            ) {
              throw new InvalidLoginError(
                "System error. Please contact support"
              );
            }

            if (error instanceof ZodError) {
              throw new InvalidLoginError(error.errors[0].message);
            }

            throw error;
          }
        },
      }),
    ],

    secret: process.env.NEXTAUTH_SECRET!,

    callbacks: {
      async jwt({ token, user, account }) {
        if (account?.provider === "credentials") {
          const expires = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000);
          const sessionToken = randomUUID();

          const session = await adapter.createSession!({
            userId: user.id!,
            sessionToken,
            expires,
          });

          token.sessionId = session.sessionToken;
        }

        return token;
      },
    },
    jwt: {
      maxAge: 60 * 60 * 24 * 30,
      async encode(arg) {
        return (arg.token?.sessionId as string) ?? encode(arg);
      },
    },
    pages: {
      error: "/login",
      signIn: "/login",
      newUser: "/",
    },
    debug: process.env.NODE_ENV === "development",
    trustHost: true,
    events: {
      async signOut(message) {
        if ("session" in message && message.session?.sessionToken) {
          await prisma.session.deleteMany({
            where: {
              sessionToken: message.session?.sessionToken,
            },
          });
        }
      },
    },
  };
});
