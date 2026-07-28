import DashboardLayout from "../../components/layout/DashboardLayout";
import PageContainer from "../../components/layout/PageContainer";

import StatsGrid from "../../components/dashboard/StatsGrid";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageContainer>

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-500">
            Bem-vindo ao Gerente Inteligente.
          </p>
        </div>

        <StatsGrid />

      </PageContainer>
    </DashboardLayout>
  );
}