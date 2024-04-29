import Head from "next/head";

import LoginPage from "../components/containers/login-page";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <>
      <Head>
        <title>intuiguide - Login</title>
      </Head>
      <LoginPage />
    </>
  );
};

export default Login;
