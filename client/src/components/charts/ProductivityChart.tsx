import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "Jan", tasks: 22 },
  { month: "Fev", tasks: 35 },
  { month: "Mar", tasks: 48 },
  { month: "Abr", tasks: 39 },
  { month: "Mai", tasks: 55 },
  { month: "Jun", tasks: 70 },
];

export default function ProductivityChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Produtividade
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="tasks"
              stroke="#2563eb"
              fill="#bfdbfe"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}