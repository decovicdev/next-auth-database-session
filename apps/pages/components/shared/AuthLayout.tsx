import { Spacer, VStack, Box } from "@chakra-ui/react";

import { AuthBgClipPath } from "./ImageClipPath";
import { Body1, Heading } from "./typography";
import Stack from "./Stack";

interface AuthLayoutProps {
  title: string;
  description: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { description, title, children } = props;
  return (
    <Stack gap="0" spacing="0">
      <Box
        alignSelf="stretch"
        bg={`url("/images/bg.png") no-repeat `}
        clipPath={["", "", "", "url(#authBgClipPath)"]}
        minH={{
          base: "250px",
          lg: "100vh",
        }}
        bgBlendMode="multiply"
        overflow="hidden"
        w={{ base: "100%", lg: "50%" }}
        bgSize="cover"
        bgPos="center"
      >
        <AuthBgClipPath />
      </Box>
      <Spacer />

      <VStack
        mx="4"
        pb="10"
        pt={["4", "4", "4", "184px"]}
        maxW="470px"
        align="stretch"
        spacing="8"
      >
        <Heading>{title}</Heading>
        <Body1 color="gray.400" maxW="470px">
          {description}
        </Body1>
        {children}
      </VStack>

      <Spacer />
    </Stack>
  );
};

export default AuthLayout;
