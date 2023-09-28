import AuthLayout from "../../shared/AuthLayout";
import RegisterForm from "./RegisterForm";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
  return (
    <AuthLayout
      title="Create New Account"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium nulla cras molestie in sed. Eget orci fermentum neque, nisl est duis fames. Praesent tempus."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
