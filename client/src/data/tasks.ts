import type { Task } from "../types/task";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Criar tela de Login",
    description: "Finalizar autenticação",
    status: "Done",
    priority: "High",
    dueDate: "30/07/2026",
    project: "Smart Manager",
  },
  {
    id: 2,
    title: "Dashboard",
    description: "Criar cards",
    status: "Doing",
    priority: "High",
    dueDate: "01/08/2026",
    project: "Smart Manager",
  },
  {
    id: 3,
    title: "Integração Stripe",
    description: "Sistema de pagamento",
    status: "Todo",
    priority: "Medium",
    dueDate: "15/08/2026",
    project: "SaaS",
  },
];