import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div className="flex items-center gap-3 rounded-xl border px-4 py-2">
        <Search size={18} />

        <input
          className="outline-none"
          placeholder="Pesquisar..."
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell size={20} />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          M
        </div>
      </div>
    </header>
  );
}