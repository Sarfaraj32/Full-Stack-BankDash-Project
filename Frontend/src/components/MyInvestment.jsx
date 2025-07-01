import { FaApple, FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const investments = [
  {
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    amount: "$54,000",
    return: "+16%",
    icon: <FaApple className="text-pink-500 w-7 h-7" />,
    returnColor: "text-green-500",
  },
  {
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    amount: "$25,300",
    return: "-4%",
    icon: <FaGoogle className="text-blue-500 w-7 h-7" />,
    returnColor: "text-red-500",
  },
  {
    name: "Tesla Motors",
    category: "Electric Vehicles",
    amount: "$8,200",
    return: "+25%",
    icon: <SiTesla className="text-yellow-500 w-7 h-7" />,
    returnColor: "text-green-500",
  },
];

export default function MyInvestment() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-4">My Investment</h3>
      <div className="bg-gray-100 rounded-2xl p-4 shadow-md w-full">
        <div className="space-y-4">
          {investments.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white p-3 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-2 rounded-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{item.amount}</p>
                <p className={`text-sm ${item.returnColor}`}>{item.return}</p>
                <p className="text-xs text-blue-500">Return Value</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
