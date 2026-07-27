import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function RegisterForm() {
  return (
    <Card>
      <form className="space-y-4">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Nome completo
          </label>

          <Input placeholder="João Silva" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Empresa
          </label>

          <Input placeholder="Minha Empresa" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            E-mail
          </label>

          <Input
            type="email"
            placeholder="email@empresa.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Senha
          </label>

          <Input
            type="password"
            placeholder="********"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirmar senha
          </label>

          <Input
            type="password"
            placeholder="********"
          />
        </div>

        <Button className="w-full">
          Criar conta
        </Button>
        <div className="border-t pt-5 text-center">
  <span className="text-slate-500">
    Já possui uma conta?
  </span>

  <Link
    to="/"
    className="ml-2 font-semibold text-blue-600 hover:underline"
  >
    Entrar
  </Link>
</div>
      </form>
    </Card>
  );
}
