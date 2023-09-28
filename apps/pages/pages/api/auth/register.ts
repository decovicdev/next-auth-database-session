import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "database";
import bcrypt from "bcrypt";

import { registerSchema } from "@/validation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await registerSchema.safeParseAsync(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: result.error.errors[0].message,
      });
    }

    const { email, password, firstName, lastName } = result.data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(402).json({
        error: "User already exist with this email",
      });
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

    return res.status(201).json({
      message: "User created successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: "System error. Please contact support",
    });
  }
}
