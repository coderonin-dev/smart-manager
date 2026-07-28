import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import {
  loginSchema,
  type LoginSchema,
} from "../../schemas/auth";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    console.log(data);

    setLoading(true);

    // Simulação da API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);

    navigate("/dashboard");
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <Input
          label="E-mail"
          icon={<Mail size={18} />}
          type="email"
          placeholder="voce@empresa.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Senha"
          icon={<Lock size={18} />}
          endIcon={
            showPassword ? (
              <EyeOff
                size={18}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                size={18}
                onClick={() => setShowPassword(true)}
              />
            )
          }
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>

        <div className="text-center text-sm">
          <Link
            to="/forgot-password"
            className="text-blue-600 transition hover:underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <div className="border-t pt-5 text-center">
          <span className="text-slate-500">
            Ainda não possui uma conta?
          </span>

          <Link
            to="/register"
            className="ml-2 font-semibold text-blue-600 transition hover:underline"
          >
            Criar conta
          </Link>
        </div>
      </form>
    </Card>
  );
}