// src/components/TransactionList.jsx
import { FaCreditCard } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";

const transactions = [
  {
    id: 1,
    icon: <FaCreditCard className="text-yellow-500" />,
    label: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
  },
  {
    id: 2,
    icon: <FaPaypal className="text-blue-500" />,
    label: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
  },
  {
    id: 3,
    icon: <FaDollarSign className="text-teal-500" />,
    label: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
  },
];

const TransactionList = () => {
  return (
    <div className="h-[305px] sm:h-[305px]">
      <h3 className="text-lg font-bold mb-4">Recent Transaction</h3>
      <div className="bg-white p-9 md:p-9 rounded-2xl shadow-md w-full h-[calc(100%-3rem)] overflow-y-auto">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className="flex items-center justify-between mb-6 last:mb-0"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-full">{txn.icon}</div>
              <div>
                <p className="font-medium text-gray-800">{txn.label}</p>
                <p className="text-sm text-gray-500">{txn.date}</p>
              </div>
            </div>
            <p
              className={`font-semibold ${
                txn.amount < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {txn.amount < 0 ? `-$${Math.abs(txn.amount)}` : `+$${txn.amount}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
