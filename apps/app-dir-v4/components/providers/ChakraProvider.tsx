"use client";

import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";

import { CacheProvider } from "@chakra-ui/next-js";

import theme from "@/constants/theme";

export default function ChakraProvider({ children }) {
  return (
    <CacheProvider>
      <_ChakraProvider theme={theme}>{children}</_ChakraProvider>
    </CacheProvider>
  );
}
