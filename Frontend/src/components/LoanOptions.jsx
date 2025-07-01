import { Users, Building2, TrendingUp, Settings } from "lucide-react";
import React from "react";

const LoanOptions = () => {
  const loans = [
    {
      type: "Personal Loans",
      amount: "$50,000",
      icon: Users,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      type: "Corporate Loans",
      amount: "$100,000",
      icon: Building2,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      type: "Business Loans",
      amount: "$500,000",
      icon: TrendingUp,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      type: "Custom Loans",
      amount: "Choose Money",
      icon: Settings,
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {loans.map((loan, index) => {
        const Icon = loan.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <div className={`p-2 rounded-full ${loan.bgColor}`}>
              <Icon className={`w-5 h-5 ${loan.iconColor}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{loan.type}</p>
              <p className="font-semibold">{loan.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoanOptions;
