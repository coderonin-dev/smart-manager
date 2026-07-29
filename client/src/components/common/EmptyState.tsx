import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
      <FolderOpen
        className="mx-auto text-slate-400"
        size={60}
      />

      <h2 className="mt-4 text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-slate-500">
        {description}
      </p>
    </div>
  );
}