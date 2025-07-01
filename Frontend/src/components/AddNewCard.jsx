import React from "react";

export default function AddNewCard() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold">Add New Card</h3>
      <div className="bg-white rounded-2xl shadow-md p-6 w-full">
        <p className="text-gray-500 text-sm mb-8">
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Card Type
            </label>
            <input
              type="text"
              placeholder="Classic"
              className="w-full border border-gray-200 rounded-2xl p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-gray-700">
              Name On Card
            </label>
            <input
              type="text"
              placeholder="My Cards"
              className="w-full border border-gray-200 rounded-2xl p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              placeholder="**** **** **** ****"
              className="w-full border border-gray-200 rounded-2xl p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Expiration Date
            </label>
            <input
              type="text"
              placeholder="25 January 2025"
              className="w-full border border-gray-200 rounded-2xl p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </form>
        <button className="mt-8 w-full md:w-32 bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-colors">
          Add Card
        </button>
      </div>
    </div>
  );
}
