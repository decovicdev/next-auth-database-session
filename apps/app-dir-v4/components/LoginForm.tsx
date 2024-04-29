"use client";

import {
  FormControl as _FormControl,
  FormErrorMessage,
  FormErrorIcon,
  Divider,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { loginSchema } from "validation";
import { signIn } from "next-auth/react";

import AuthProviderButton from "./AuthProviderButton";
import FormControl from "@/components/FormControl";
import PrimaryButton from "./button/PrimaryButton";
import { Body1, Caption1 } from "./typography";
import useZodForm from "@/hooks/useZodForm";
import Image from "./Image";
import Input from "./Input";
import Stack from "./Stack";
import Link from "./Link";

const LoginForm: React.FC = () => {
  const { handleSubmit, formState, register, setError } =
    useZodForm(loginSchema);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res?.error) {
        setError("root", {
          message: res.error,
        });
      } else {
        router.replace("/");
      }
    } catch (error: any) {
      setError("root", {
        message: error?.message,
      });
    }
  });

  return (
    <>
      <VStack align="stretch" alignSelf="stretch" spacing="4">
        <VStack as="form" onSubmit={onSubmit} align="stretch" spacing="4">
          <FormControl
            {...register("email")}
            error={formState.errors.email}
            placeholder="Email Address"
            Input={Input}
          />
          <FormControl
            {...register("password")}
            error={formState.errors.password}
            placeholder="Password"
            Input={Input}
          />
          <_FormControl isInvalid={Boolean(formState.errors?.root?.message)}>
            <FormErrorMessage>
              <FormErrorIcon />
              {formState.errors?.root?.message}
            </FormErrorMessage>
          </_FormControl>
          <PrimaryButton type="submit">Login</PrimaryButton>
        </VStack>
      </VStack>
      <VStack align="stretch" spacing="12">
        <HStack spacing={4}>
          <Divider />
          <Box>
            <Caption1 w="74px" color="gray.400">
              or login with
            </Caption1>
          </Box>
          <Divider />
        </HStack>
        <Stack spacing="0">
          <AuthProviderButton
            leftIcon={<Image src="/images/google.png" alt="google icon" />}
            onClick={() => signIn("google")}
          >
            Google
          </AuthProviderButton>

          <AuthProviderButton
            leftIcon={<Image src="/images/facebook.png" alt="facebook icon" />}
            onClick={() => signIn("facebook")}
          >
            Facebook
          </AuthProviderButton>
        </Stack>
        <HStack alignSelf="center">
          <Body1 color="gray.400">Don’t have any account?</Body1>
          <Link href="/register">Register Now</Link>
        </HStack>
      </VStack>
    </>
  );
};

export default LoginForm;
