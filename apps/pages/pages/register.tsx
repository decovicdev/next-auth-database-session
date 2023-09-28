import Head from "next/head";

import RegisterPage from "../components/containers/register-page";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
  return (
    <>
      <Head>
        <title>intuiguide - Register</title>
      </Head>
      <RegisterPage />
    </>
  );
};

export default Register;
