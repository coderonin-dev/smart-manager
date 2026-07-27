import Logo from "../../components/common/Logo";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md space-y-8">
        <Logo />
        <RegisterForm />
      </div>
    </main>
  );
}