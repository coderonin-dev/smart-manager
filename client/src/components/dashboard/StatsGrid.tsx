import {
  Users,
  FolderKanban,
  CheckSquare,
  DollarSign,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Usuários"
        value="245"
        subtitle="+12 este mês"
        icon={<Users size={28} />}
      />

      <StatCard
        title="Projetos"
        value="18"
        subtitle="3 ativos"
        icon={<FolderKanban size={28} />}
      />

      <StatCard
        title="Tarefas"
        value="127"
        subtitle="82 concluídas"
        icon={<CheckSquare size={28} />}
      />

      <StatCard
        title="Receita"
        value="R$ 18.420"
        subtitle="+18%"
        icon={<DollarSign size={28} />}
      />
    </div>
  );
}