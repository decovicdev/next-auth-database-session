import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#00BB6A",
  secondary: "#00BDBB",
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "var(--font-poppins)",
    body: "var(--font-poppins)",
  },
});

export default theme;
