import { Button as ChakraButton, chakra, ButtonProps } from "@chakra-ui/react";

const Button = chakra(ChakraButton, {
  baseStyle: {
    fontWeight: "400",
  },
});

export default Button;
