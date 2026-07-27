import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import {
  loginSchema,
  type LoginSchema,
} from "../../schemas/auth";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginSchema) {
    console.log(data);
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            E-mail
          </label>

          <Input
            type="email"
            placeholder="voce@empresa.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Senha
          </label>

          <Input
            type="password"
            placeholder="••••••••"
            {...register("password")}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit">
          Entrar
        </Button>

        <div className="text-center text-sm">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Esqueci minha senha
          </Link>
        </div>

        <div className="border-t pt-5 text-center">
          <span className="text-slate-500">
            Ainda não possui uma conta?
          </span>

          <Link
            to="/register"
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            Criar conta
          </Link>
        </div>
      </form>
    </Card>
  );
}