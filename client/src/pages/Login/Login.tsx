import Logo from "../../components/common/Logo";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md space-y-8">
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
}