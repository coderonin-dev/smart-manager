import AuthLayout from "../../components/layout/AuthLayout";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <AuthLayout
      title="Bem-vindo de volta"
      subtitle="Entre para continuar"
    >
      <LoginForm />
    </AuthLayout>
  );
}