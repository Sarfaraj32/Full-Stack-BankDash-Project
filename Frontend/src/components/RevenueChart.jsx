import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function RevenueChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/monthlyRevenueData"
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
        setError("error: Failed to load revenue data. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h3 className="text-lg font-bold mb-4">Monthly Revenue</h3>
        <div className="p-4 md:pt-8 w-full flex justify-center items-center">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3 className="text-lg font-bold mb-4">Monthly Revenue</h3>
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
    <div className="flex-1 w-full">
      <h3 className="text-lg font-bold mb-4">Monthly Revenue</h3>
      <div className="bg-white rounded-2xl p-4 md:pt-8 shadow-md w-full">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis axisLine={false} dataKey="year" />
            <YAxis
              axisLine={false}
              tickFormatter={(v) => `$${v.toLocaleString()}`}
            />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#06B6D4"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
