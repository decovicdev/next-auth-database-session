import { chakra } from "@chakra-ui/react";

import Button from "./Button";

const PrimaryButton = chakra(Button, {
  baseStyle: {
    bgColor: "secondary",
    color: "white",
    borderRadius: "full",
    px: 10,
    py: 6,
    fontWeight: "regular",
    _hover: {
      bgColor: "secondary",
      opacity: "0.6",
    },
  },
});

export default PrimaryButton;
