import { Input as _Input, forwardRef } from "@chakra-ui/react";

const Input = forwardRef((props, ref) => {
  return (
    <_Input
      ref={ref}
      w="full"
      variant="filled"
      size="lg"
      fontSize="md"
      borderRadius="full"
      color="#555555"
      colorScheme="teal"
      bg="#F5F5F5"
      {...props}
    />
  );
});

export default Input;
