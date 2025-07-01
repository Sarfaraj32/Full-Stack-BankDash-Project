// components/DebitCreditOverview.jsx
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DebitCreditOverview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/debitCreditOverviewData"
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching debit/credit data:", error);
        setError(
          "error: Failed to load debit/credit data. Please try again later."
        );
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h3 className="text-lg font-bold mb-4">Debit & Credit Overview</h3>
        <div className="p-4 md:pt-8 w-full flex justify-center items-center">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3 className="text-lg font-bold mb-4">Debit & Credit Overview</h3>
        <div className="flex items-center justify-center h-[250px] rounded-xl">
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
      <h3 className="text-lg font-bold mb-4">Debit & Credit Overview</h3>
      <div className="bg-white rounded-2xl p-4.5 shadow-md">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-gray-500">
            {/* You may want to calculate totals from data here */}
            <span className="text-blue-600 font-semibold">$7,560</span> Debited
            &{"  "}
            <span className="text-pink-600 font-semibold">$5,420</span> Credited
            in this Week
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1 text-blue-600">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div> Debit
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div> Credit
            </div>
          </div>
        </div>
        <div className="w-full h-68">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={24} barGap={8}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              {/* <YAxis axisLine={false} tickLine={false} /> */}
              <Tooltip />
              <Bar dataKey="debit" fill="#1A16F3" radius={[8, 8, 8, 8]} />
              <Bar dataKey="credit" fill="#FCAA0B" radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
