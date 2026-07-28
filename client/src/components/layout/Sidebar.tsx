import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Usuários",
    icon: Users,
  },
  {
    title: "Projetos",
    icon: FolderKanban,
  },
  {
    title: "Tarefas",
    icon: CheckSquare,
  },
  {
    title: "Configurações",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">
          Gerente Inteligente
        </h1>
      </div>

      <nav className="p-4">
        {menu.map(({ title, icon: Icon }) => (
          <button
            key={title}
            className="mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
          >
            <Icon size={20} />

            {title}
          </button>
        ))}
      </nav>
    </aside>
  );
}