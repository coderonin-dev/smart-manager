import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  endIcon?: ReactNode;
}

export default function Input({
  icon,
  endIcon,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex items-center rounded-xl border border-slate-300 bg-white px-3 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
      {icon && <span className="mr-2 text-slate-400">{icon}</span>}

      <input
        className={`w-full border-none bg-transparent py-3 outline-none ${className}`}
        {...props}
      />

      {endIcon && <span className="ml-2 cursor-pointer text-slate-400">{endIcon}</span>}
    </div>
  );
}