import { Wallet, DollarSign, CreditCard, PiggyBank } from "lucide-react";
import React from "react";

const stats = [
  {
    title: "My Balance",
    amount: "$12,750",
    icon: Wallet,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "Income",
    amount: "$5,600",
    icon: DollarSign,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Expense",
    amount: "$3,460",
    icon: CreditCard,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "Total Saving",
    amount: "$7,920",
    icon: PiggyBank,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-500",
  },
];

const DashboardStatsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-sm flex items-center space-x-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor}`}
            >
              <Icon className={`w-5 h-5 ${item.iconColor}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-lg font-semibold text-gray-800">
                {item.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStatsCard;
