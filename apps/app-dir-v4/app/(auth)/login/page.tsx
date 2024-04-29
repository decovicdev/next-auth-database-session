import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <AuthLayout
      title="Login to Your Account"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium nulla cras molestie in sed. Eget orci"
    >
      <LoginForm />
    </AuthLayout>
  );
}
