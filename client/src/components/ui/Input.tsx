import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  endIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      endIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}

        <div
          className={`
            flex items-center
            rounded-xl
            border
            bg-white
            px-4
            transition-all
            duration-200

            ${
              error
                ? "border-red-500 ring-2 ring-red-100"
                : "border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
            }
          `}
        >
          {icon && (
            <span className="mr-3 text-slate-400">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            className={`
              h-12
              w-full
              bg-transparent
              outline-none
              placeholder:text-slate-400
              disabled:cursor-not-allowed
              disabled:opacity-50
              ${className}
            `}
            {...props}
          />

          {endIcon && (
            <span className="ml-3 cursor-pointer text-slate-400 hover:text-slate-600">
              {endIcon}
            </span>
          )}
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;