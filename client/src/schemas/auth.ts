import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Digite um e-mail válido"),

  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(3, "Informe seu nome"),

    company: z.string().min(2, "Informe a empresa"),

    email: z.email("Digite um e-mail válido"),

    password: z
      .string()
      .min(8, "A senha precisa ter pelo menos 8 caracteres"),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "As senhas não coincidem",
    }
  );

export type RegisterSchema = z.infer<typeof registerSchema>;