import {
  CheckCircle2,
  FolderPlus,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: FolderPlus,
    title: "João criou um novo projeto",
    time: "Há 5 minutos",
  },
  {
    id: 2,
    icon: UserPlus,
    title: "Maria adicionou um usuário",
    time: "Há 30 minutos",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Carlos concluiu uma tarefa",
    time: "Ontem",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Atividades Recentes
      </h2>

      <div className="space-y-5">
        {activities.map(({ id, icon: Icon, title, time }) => (
          <div
            key={id}
            className="flex items-start gap-4"
          >
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Icon size={20} />
            </div>

            <div className="flex-1">
              <p className="font-medium">
                {title}
              </p>

              <p className="text-sm text-slate-500">
                {time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}