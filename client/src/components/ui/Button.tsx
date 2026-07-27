import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        w-full
        rounded-xl
        bg-blue-600
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-blue-700
        hover:shadow-lg
        active:scale-95
        disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}