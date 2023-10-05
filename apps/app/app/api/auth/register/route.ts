import { registerSchema } from "validation";
import { NextResponse } from "next/server";
import { prisma } from "database";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const data = request.json();

    const result = await registerSchema.safeParseAsync(data);

    if (!result.success) {
      return NextResponse.json({
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
      return NextResponse.json({
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

    return NextResponse.json({
      message: "User created successfully.",
    });
  } catch (error) {
    return NextResponse.json({
      error: "System error. Please contact support",
    });
  }
}
