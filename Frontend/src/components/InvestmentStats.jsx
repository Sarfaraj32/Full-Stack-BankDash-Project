// components/InvestmentStats.jsx
import { DollarSign, PieChart, Repeat } from "lucide-react";

const stats = [
  {
    title: "Total Invested Amount",
    value: "$150,000",
    icon: <DollarSign className="w-5 h-5 text-white" />,
    bgColor: "bg-cyan-500",
  },
  {
    title: "Number of Investments",
    value: "1,250",
    icon: <PieChart className="w-5 h-5 text-white" />,
    bgColor: "bg-pink-500",
  },
  {
    title: "Rate of Return",
    value: "+5.80%",
    icon: <Repeat className="w-5 h-5 text-white" />,
    bgColor: "bg-blue-500",
  },
];

export default function InvestmentStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor}`}
          >
            {item.icon}
          </div>
          <div>
            <p className="text-sm text-blue-500">{item.title}</p>
            <p className="text-lg font-semibold text-gray-800">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
