import { chakra, Stack as _Stack } from "@chakra-ui/react";

const Stack = chakra(_Stack, {
  baseStyle: {
    flexDirection: ["column", "column", "column", "row"],
    gap: ["4", "4", "8"],
    spacing: "0",
    alignItems: ["center", "center", "center", "flex-start"],
  },
});

export default Stack;
