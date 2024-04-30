import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";
import { PropsWithChildren } from "react";

const auth_routes = ["/login", "/register"];

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const isAuthPage = auth_routes.includes(router.pathname);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {!isAuthPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};
export default Layout;
