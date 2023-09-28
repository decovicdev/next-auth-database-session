import { Box, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import PrimaryButton from "./button/PrimaryButton";
import Container from "./Container";
import Link from "./Link";
import Logo from "./Logo";
import { useSession } from "next-auth/react";
import { Body1 } from "./typography";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();
  const { data } = useSession();

  return (
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
  );
};
export default Header;
