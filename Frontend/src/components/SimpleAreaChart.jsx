import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SimpleAreaChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/areaChartData");
        if (!response.ok) {
          throw new Error("Failed To Fetch Balance History Data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Failed To Fetch Balance History Data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h3 className="text-lg font-bold mb-4">Balance History</h3>
        <div className=" p-6 border-none h-[250px] w-full flex items-center justify-center">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Balance History</h3>
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
      <h3 className="text-lg font-bold mb-4">Balance History</h3>
      <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-none h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="6 6" /> */}
            <XAxis dataKey="name" axisLine={false} />
            <YAxis tick={true} axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#1814F3"
              fill="#2D60FF80"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
