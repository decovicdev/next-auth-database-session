import {
  FormErrorIcon,
  FormControl as _FormControl,
  FormErrorMessage,
  InputProps,
  forwardRef,
  ComponentWithAs,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface FormControlProps extends InputProps {
  Input: ComponentWithAs<"input", InputProps>;
  error?: FieldError;
}

const FormControl = forwardRef<FormControlProps, "input">((props, ref) => {
  const { error, Input, ...rest } = props;

  return (
    <_FormControl isInvalid={Boolean(error?.message)}>
      <Input {...rest} ref={ref} />
      <FormErrorMessage>
        <FormErrorIcon />
        {error?.message}
      </FormErrorMessage>
    </_FormControl>
  );
});
export default FormControl;
