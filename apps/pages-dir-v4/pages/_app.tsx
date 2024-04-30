import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import Layout from "../components/shared/Layout";
import { poppins } from "../constants/font";
import theme from "../constants/theme";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
