// src/components/CardList.jsx
import { CreditCard } from "lucide-react";

const cards = [
  {
    type: "Secondary",
    bank: "DBL Bank",
    number: "**** **** 5600",
    name: "William",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    type: "Secondary",
    bank: "BRC Bank",
    number: "**** **** 4300",
    name: "Michel",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    type: "Secondary",
    bank: "ABM Bank",
    number: "**** **** 7560",
    name: "Edward",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
];

export default function CardList() {
  return (
    <div>
      <h3 className="text-lg font-bold">Card List</h3>
      <div className="w-full bg-white rounded-2xl shadow-sm p-4 mt-4 space-y-7">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200"
          >
            <div className="flex items-center gap-6">
              <div
                className={`p-2 rounded-xl ${card.iconBg} ${card.iconColor}`}
              >
                <CreditCard size={20} />
              </div>
              <div className="flex flex-row gap-10 md:flex-row md:items-center md:gap-6">
                <div>
                  <div className="text-sm text-gray-500">Card Type</div>
                  <div className="font-medium text-sm">{card.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Bank</div>
                  <div className="font-medium text-sm">{card.bank}</div>
                </div>
                <div className="hidden md:block">
                  <div className="text-sm text-gray-500">Card Number</div>
                  <div className="font-medium text-sm">{card.number}</div>
                </div>
                <div className="hidden md:block">
                  <div className="text-sm text-gray-500">Namain Card</div>
                  <div className="font-medium text-sm">{card.name}</div>
                </div>
              </div>
            </div>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700 hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
