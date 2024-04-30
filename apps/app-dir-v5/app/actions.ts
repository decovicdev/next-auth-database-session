"use server";

import { registerSchema, loginSchema, z } from "validation";
import { prisma } from "database";
import bcrypt from "bcrypt";

import { signIn } from "@/lib/auth";

export async function registerAction(data: z.infer<typeof registerSchema>) {
  try {
    const result = await registerSchema.safeParseAsync(data);

    if (!result.success) {
      return {
        error: result.error.errors[0].message,
      };
    }

    const { email, password, firstName, lastName } = result.data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return {
        error: "User already exist with this email",
      };
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.$transaction(async (tx) => {
      const { id } = await tx.user.create({
        data: {
          email,
          name: firstName + lastName,
          password: passwordHash,
        },
      });

      await tx.account.create({
        data: {
          userId: id,
          type: "credentials",
          provider: "credentials",
          providerAccountId: id,
        },
      });
    });

    return {
      message: "User created successfully.",
    };
  } catch (error) {
    return {
      error: "System error. Please contact support",
    };
  }
}

export async function loginAction(data: z.infer<typeof loginSchema>) {
  try {
    await signIn("credentials", {
      ...data,
      redirect: false,
    });

    return {
      error: false,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
