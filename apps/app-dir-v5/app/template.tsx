import { PropsWithChildren } from "react";

import SessionProvider from "@/components/providers/SessionProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auth } from "@/lib/auth";

export default async function Template({ children }: PropsWithChildren<{}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <Header />
      <main>{children}</main>
      <Footer />
    </SessionProvider>
  );
}
