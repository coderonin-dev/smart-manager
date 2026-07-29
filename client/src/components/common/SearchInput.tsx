import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({
  placeholder = "Pesquisar...",
}: SearchInputProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2">
      <Search size={18} />

      <input
        className="w-full outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}