// src/components/CardExpenseStatistics.jsx
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "ABM Bank", value: 300, color: "#06B6D4" },
  { name: "DBL Bank", value: 400, color: "#3B82F6" },
  { name: "BRC Bank", value: 300, color: "#F472B6" },
  { name: "MCP Bank", value: 200, color: "#FBBF24" },
];

export default function CardExpenseStatistics() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-4">My Cards</h3>
      <div className="bg-white rounded-2xl shadow-md p-4 w-full h-[280px]">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap justify-around mt-4 text-sm">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
