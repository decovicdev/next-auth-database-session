import AuthLayout from "../../shared/AuthLayout";
import LoginForm from "./LoginForm";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <AuthLayout
      title="Login to Your Account"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium
      nulla cras molestie in sed. Eget orci"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
