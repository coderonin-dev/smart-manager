import type { ReactNode } from "react";
import Logo from "../common/Logo";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md space-y-8">
        <Logo />

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            {title}
          </h1>

          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </main>
  );
}