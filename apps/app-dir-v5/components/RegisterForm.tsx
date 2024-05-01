"use client";

import {
  FormControl as _FormControl,
  FormErrorMessage,
  FormErrorIcon,
  forwardRef,
  Checkbox,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import PrimaryButton from "@/components/button/PrimaryButton";
import FormControl from "@/components/FormControl";
import { Body1 } from "@/components/typography";
import useZodForm from "@/hooks/useZodForm";
import { registerSchema } from "validation";
import Input from "@/components/Input";
import Link from "@/components/Link";
import { registerAction } from "@/app/actions";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { formState, handleSubmit, register, setError } =
    useZodForm(registerSchema);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await registerAction(data);

      if (res.error) {
        setError("root", {
          message: res.error,
        });
        return;
      }

      router.push("/login");
    } catch (error: any) {
      if (error?.message) {
        setError("root", {
          message: error.message,
        });
      }
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <VStack spacing="4" align="stretch">
          <FormControl
            {...register("firstName")}
            error={formState.errors.firstName}
            placeholder="First Name"
            Input={Input}
          />
          <FormControl
            {...register("lastName")}
            placeholder="Last Name"
            Input={Input}
            error={formState.errors.lastName}
          />
          <FormControl
            {...register("email")}
            placeholder="Email"
            Input={Input}
            error={formState.errors.email}
          />
          <FormControl
            {...register("password")}
            Input={Input}
            placeholder="Password"
            error={formState.errors.password}
          />
          <FormControl
            {...register("acceptTerms")}
            error={formState.errors.acceptTerms}
            Input={forwardRef((props: any, ref) => (
              <Checkbox
                ref={ref}
                {...props}
                colorScheme="teal"
                size="lg"
                spacing="1rem"
              >
                <Body1 color="#555555">
                  I agree to Intuiguide&apos;s&nbsp;
                  <Link href="#" color="secondary">
                    Terms of Service
                  </Link>
                  &nbsp;and&nbsp;
                  <Link href="#" color="secondary">
                    Privacy Policy
                  </Link>
                </Body1>
              </Checkbox>
            ))}
          />
          <_FormControl isInvalid={Boolean(formState.errors?.root?.message)}>
            <FormErrorMessage>
              <FormErrorIcon />
              {formState.errors?.root?.message}
            </FormErrorMessage>
          </_FormControl>
          <PrimaryButton type="submit">Register</PrimaryButton>
        </VStack>
      </form>
      <HStack alignSelf="center">
        <Body1 color="gray.400">Have an account already?</Body1>
        <Link href="/login">Login Now</Link>
      </HStack>
    </>
  );
};

export default RegisterForm;
