// components/InvoicesSent.jsx
import { FaApple, FaPlaystation } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

const invoices = [
  {
    name: "Apple Store",
    icon: <FaApple className="text-teal-500 w-5 h-5" />,
    time: "5h ago",
    amount: "$450",
  },
  {
    name: "Michael",
    icon: <LuUserRound className="text-yellow-500 w-5 h-5" />,
    time: "2 days ago",
    amount: "$160",
  },
  {
    name: "Playstation",
    icon: <FaPlaystation className="text-blue-500 w-5 h-5" />,
    time: "5 days ago",
    amount: "$1085",
  },
  {
    name: "William",
    icon: <LuUserRound className="text-pink-500 w-5 h-5" />,
    time: "10 days ago",
    amount: "$90",
  },
];

export default function InvoicesSent() {
  return (
    <div className="md:h-[390px]">
      <h3 className="text-lg font-bold mb-4">Invoices Sent</h3>
      <div className="bg-white rounded-2xl p-4 shadow-md w-full h-[calc(100%-3rem)]">
        <div className="space-y-5">
          {invoices.map((inv, i) => (
            <div
              key={i}
              className="flex justify-between items-center mt-1 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-2">{inv.icon}</div>
                <div>
                  <p className="font-medium text-gray-700">{inv.name}</p>
                  <p className="text-xs text-gray-400">{inv.time}</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">{inv.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
