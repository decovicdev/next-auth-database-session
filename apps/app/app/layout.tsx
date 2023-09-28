import "@/styles/globals.css";

import { PropsWithChildren } from "react";
import { headers } from "next/headers";

import SessionProvider from "@/components/providers/SessionProvider";
import ChakraProvider from "@/components/providers/ChakraProvider";
import getServerSession from "@/lib/getServerSession";
import { poppins } from "@/constants/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const auth_routes = ["/login", "/register"] as const;

export default async function RootLayout({ children }: PropsWithChildren<{}>) {
  const session = await getServerSession();
  const referer = headers().get("referer");
  const isAuthPage = auth_routes.some((route) => referer?.includes(route));

  return (
    <html lang="en">
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
      <body className={poppins.className}>
        <SessionProvider session={session}>
          <ChakraProvider>
            <Header />
            <main>{children}</main>
            {!isAuthPage && <Footer />}
          </ChakraProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
