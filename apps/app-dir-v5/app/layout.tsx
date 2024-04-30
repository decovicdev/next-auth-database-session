import "@/styles/globals.css";

import { PropsWithChildren } from "react";

import ChakraProvider from "@/components/providers/ChakraProvider";
import { poppins } from "@/constants/font";

export default async function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={"/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={"/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={"/favicon-16x16.png"}
        />
        <link rel="manifest" href={"/site.webmanifest"} />
        <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#5bbad5" />
        <link rel="preload" href={"/images/bg.png"} as="image" />
        <link rel="preconnect" href="https://decovicdev.github.io" />
        <link rel="dns-prefetch" href="https://decovicdev.github.io" />
        <meta name="apple-mobile-web-app-title" content="intuiguide" />
        <meta name="application-name" content="intuiguide" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#00bdbb" />
        <meta name="description" content="intuiguide" />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
