export interface Task {
  id: number;
  title: string;
  description: string;

  status:
    | "Todo"
    | "Doing"
    | "Done";

  priority:
    | "Low"
    | "Medium"
    | "High";

  dueDate: string;

  project: string;
}