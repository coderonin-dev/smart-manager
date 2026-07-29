import { useLocation, useNavigate } from "react-router-dom";
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
    path: "/dashboard",
  },
  {
    title: "Usuários",
    icon: Users,
    path: "/users",
  },
  {
    title: "Projetos",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    title: "Tarefas",
    icon: CheckSquare,
    path: "/tasks",
  },
  {
    title: "Configurações",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Smart Manager
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Gestão Inteligente
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        {menu.map(({ title, icon: Icon, path }) => {
          const isActive = location.pathname === path;

          return (
            <button
              key={title}
              onClick={() => navigate(path)}
              className={`mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-left font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              }`}
            >
              <Icon size={20} />
              <span>{title}</span>
            </button>
          );
        })}
      </nav>

      {/* Rodapé */}
      <div className="border-t border-slate-200 p-5">
        <p className="text-center text-xs text-slate-400">
          Smart Manager
        </p>

        <p className="text-center text-xs text-slate-400">
          v1.0.0 Alpha
        </p>
      </div>
    </aside>
  );
}