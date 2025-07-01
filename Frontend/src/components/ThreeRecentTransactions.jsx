import { Repeat, Wrench, User } from "lucide-react";
import React from "react";

const transactions = [
  {
    icon: Repeat,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-500",
    title: "Spotify Subscription",
    date: "25 Jan 2021",
    category: "Shopping",
    card: "1234 ****",
    status: "Pending",
    amount: "-$150",
    amountColor: "text-red-500",
    statusColor: "text-yellow-500",
  },
  {
    icon: Wrench,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "Mobile Service",
    date: "25 Jan 2021",
    category: "Service",
    card: "1234 ****",
    status: "Completed",
    amount: "-$340",
    amountColor: "text-red-500",
    statusColor: "text-green-500",
  },
  {
    icon: User,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
    title: "Emilly Wilson",
    date: "25 Jan 2021",
    category: "Transfer",
    card: "1234 ****",
    status: "Completed",
    amount: "+$780",
    amountColor: "text-green-500",
    statusColor: "text-green-500",
  },
];

const ThreeRecentTransactions = () => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-6">Last Transaction</h3>
      <div className="bg-white rounded-xl shadow-sm p-4 space-y-4 w-full overflow-x-auto">
        {transactions.map((tx, index) => {
          const Icon = tx.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-between py-2 w-full"
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${tx.bgColor}`}
                >
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 ${tx.iconColor}`} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm md:text-base">
                    {tx.title}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">{tx.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-8 text-xs md:text-sm">
                <p className="hidden md:block text-gray-500 w-24">
                  {tx.category}
                </p>
                <p className="hidden lg:block text-gray-500 w-24">{tx.card}</p>
                <p className={`${tx.statusColor} w-24 hidden lg:block`}>
                  {tx.status}
                </p>
                <p
                  className={`font-semibold ${tx.amountColor} whitespace-nowrap w-24 text-right`}
                >
                  {tx.amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeRecentTransactions;
