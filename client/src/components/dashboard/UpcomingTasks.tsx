import {
  CalendarClock,
  CheckCircle2,
  Circle,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Finalizar autenticação JWT",
    due: "Hoje",
    completed: false,
  },
  {
    id: 2,
    title: "Criar CRUD de usuários",
    due: "Amanhã",
    completed: false,
  },
  {
    id: 3,
    title: "Modelar banco PostgreSQL",
    due: "28 Jul",
    completed: true,
  },
  {
    id: 4,
    title: "Publicar versão Beta",
    due: "30 Jul",
    completed: false,
  },
];

export default function UpcomingTasks() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Próximas tarefas
        </h2>

        <CalendarClock
          size={22}
          className="text-blue-600"
        />
      </div>

      <div className="space-y-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-slate-100 p-3 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              {task.completed ? (
                <CheckCircle2
                  className="text-green-500"
                  size={22}
                />
              ) : (
                <Circle
                  className="text-slate-400"
                  size={22}
                />
              )}

              <div>
                <p className="font-medium">
                  {task.title}
                </p>

                <p className="text-sm text-slate-500">
                  {task.due}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}