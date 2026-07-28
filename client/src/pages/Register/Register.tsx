import AuthLayout from "../../components/layout/AuthLayout";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="Comece gratuitamente"
    >
      <RegisterForm />
    </AuthLayout>
  );
}