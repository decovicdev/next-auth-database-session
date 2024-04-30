"use client";

import { Box, HStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import PrimaryButton from "./button/PrimaryButton";
import { Body1 } from "./typography";
import Container from "./Container";
import Link from "./Link";
import Logo from "./Logo";

export default function Header() {
  const router = useRouter();
  const { data } = useSession();

  return (
    <header>
      <Box pos="absolute" zIndex={1} w="full">
        <Container my="8">
          <nav>
            <HStack justify={["center", "space-between"]}>
              <Logo />
              <HStack spacing="8" display={["none", "none", "flex"]}>
                <Link href="/about">About Us</Link>
                {data?.user ? (
                  <Body1>{data.user.name}</Body1>
                ) : (
                  <PrimaryButton onClick={() => router.push("/register")}>
                    Create Account
                  </PrimaryButton>
                )}
              </HStack>
            </HStack>
          </nav>
        </Container>
      </Box>
    </header>
  );
}
