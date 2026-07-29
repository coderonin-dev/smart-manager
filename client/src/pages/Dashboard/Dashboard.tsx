import DashboardLayout from "../../components/layout/DashboardLayout";
import PageContainer from "../../components/layout/PageContainer";

import StatsGrid from "../../components/dashboard/StatsGrid";
import ProductivityChart from "../../components/charts/ProductivityChart";
import RecentActivity from "../../components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageContainer>
        {/* Cabeçalho da página */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Bem-vindo ao Gerente Inteligente. Aqui está um resumo da sua empresa.
            </p>
          </div>
        </div>

        {/* Cards de estatísticas */}
        <StatsGrid />

        {/* Gráfico de produtividade */}
        <div className="mt-8">
          <ProductivityChart />
        </div>

        {/* Atividades recentes + próximas tarefas */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <RecentActivity />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-800">
              Próximas tarefas
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="font-medium">Finalizar módulo financeiro</p>
                  <p className="text-sm text-slate-500">Hoje • Prioridade alta</p>
                </div>

                <span className="rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                  Alta
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="font-medium">Revisar cadastro de usuários</p>
                  <p className="text-sm text-slate-500">Amanhã • Prioridade média</p>
                </div>

                <span className="rounded-lg bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-600">
                  Média
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="font-medium">Planejar nova funcionalidade</p>
                  <p className="text-sm text-slate-500">Sexta-feira • Prioridade baixa</p>
                </div>

                <span className="rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                  Baixa
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </DashboardLayout>
  );
}