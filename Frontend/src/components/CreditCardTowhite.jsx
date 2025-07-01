import React from "react";
import { FiEye } from "react-icons/fi";
import { HiCreditCard } from "react-icons/hi";
import { ResponsiveContainer } from "recharts";

const Card = ({ balance, cardHolder, validThru, lastFour }) => {
  return (
    <div className="w-full h-64 rounded-2xl p-5 shadow-xl flex flex-col justify-between relative bg-white text-gray-500">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-medium text-cyan-700">Balance</p>
          <p className="text-2xl font-bold mt-1">${balance.toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-9 h-8 object-contain bg-linear-65 from-gray-400 to-gray-400 rounded-xl"
            src="/chips.png"
            alt="Chip Icon"
          />
        </div>
      </div>
      <div className="flex justify-between text-xs mt-2">
        <div>
          <p className="font-medium text-cyan-700">CARD HOLDER</p>
          <p className="font-semibold text-sm mt-0.5">{cardHolder}</p>
        </div>
        <div>
          <p className="font-medium text-cyan-700">VALID THRU</p>
          <p className="font-semibold text-sm mt-0.5">{validThru}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="text-lg tracking-widest font-mono select-all">
          3778 **** **** {lastFour}
        </div>
        <div className="flex items-center">
          <img
            src="/image.png"
            alt="Mastercard"
            className="h-8 w-auto bg-linear-65 from-gray-400 to-gray-500 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const CreditCardTowhite = () => {
  return (
    <div className="w-full px-4 sm:px-0 lg:px-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">My Cards</h3>
        <span className="text-md">See All</span>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        <Card
          balance={5756}
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          lastFour="1234"
        />
      </div>
    </div>
  );
};
export default CreditCardTowhite;
