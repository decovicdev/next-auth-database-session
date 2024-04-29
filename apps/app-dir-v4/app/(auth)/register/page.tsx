import RegisterForm from "@/components/RegisterForm";
import AuthLayout from "@/components/AuthLayout";

export default function Register() {
  return (
    <AuthLayout
      title="Create New Account"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium nulla cras molestie in sed. Eget orci fermentum neque, nisl est duis fames. Praesent tempus."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
