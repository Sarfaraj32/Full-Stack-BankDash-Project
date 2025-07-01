import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/transactionTableData"
        );
        setTransactions(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed To Fetch Transactions Data Table");
        setLoading(false);
        console.error("Error fetching transactions:", err);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return (
      <div className="p-4 md:p-6 w-full h-[350px]">
        <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
        <div className="text-center py-4">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
        <div className="flex items-center justify-center h-[250px] bg-red-50 rounded-xl">
          <div className="text-red-600 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
      <div className="p-4 md:p-6 rounded-xl bg-white shadow-md w-full">
        {/* Tabs - Made scrollable on mobile */}
        <div className="flex gap-4 mb-4 text-sm font-medium overflow-x-auto pb-2 scrollbar-hide">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-1 whitespace-nowrap">
            All Transactions
          </button>
          <button className="text-gray-500 hover:text-gray-800 whitespace-nowrap">
            Income
          </button>
          <button className="text-gray-500 hover:text-gray-800 whitespace-nowrap">
            Expense
          </button>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          {transactions.map((tx, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg last:mb-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {tx.isIncome ? (
                    <ArrowDownCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <ArrowUpCircle className="w-5 h-5 text-blue-500" />
                  )}
                  <span className="font-medium">{tx.description}</span>
                </div>
                <span
                  className={`font-semibold ${
                    tx.isIncome ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {tx.amount}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  <span className="block text-gray-400">Transaction ID</span>
                  {tx.transacid}
                </div>
                <div>
                  <span className="block text-gray-400">Type</span>
                  {tx.type}
                </div>
                <div>
                  <span className="block text-gray-400">Card</span>
                  {tx.card}
                </div>
                <div>
                  <span className="block text-gray-400">Date</span>
                  {tx.date}
                </div>
              </div>
              <button className="w-full mt-3 text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-50 transition">
                Download Receipt
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-auto">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="p-3">Description</th>
                    <th className="p-3">Transaction ID</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Card</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {transactions.map((tx, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 whitespace-nowrap"
                    >
                      <td className="p-3 flex items-center gap-2">
                        {tx.isIncome ? (
                          <ArrowDownCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <ArrowUpCircle className="w-5 h-5 text-blue-500" />
                        )}
                        {tx.description}
                      </td>
                      <td className="p-3 text-gray-700">{tx.transacid}</td>
                      <td className="p-3 text-gray-700">{tx.type}</td>
                      <td className="p-3 text-gray-700">{tx.card}</td>
                      <td className="p-3 text-gray-700">{tx.date}</td>
                      <td
                        className={`p-3 font-semibold ${
                          tx.isIncome ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {tx.amount}
                      </td>
                      <td className="p-3">
                        <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-50 transition">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
