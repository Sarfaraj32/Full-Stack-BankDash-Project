import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import axios from "axios";

const CategoryPieChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/expense-stats"
        );
        setChartData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching expense statistics:", error);
        setError("Failed To Fetch Expense Statistics Data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
        fontWeight="bold"
      >
        <tspan x={x} dy="-0.5em">{`${(percent * 100).toFixed(0)}%`}</tspan>
        <tspan x={x} dy="1em">
          {chartData[index]?.name}
        </tspan>
      </text>
    );
  };

  if (loading) {
    return (
      <div className="h-[280px] flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Expense Statistics</h3>
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
      <h3 className="text-lg font-bold mb-4">Expense Statistics</h3>
      <div className="h-[280px]">
        <div className="bg-white p-4 sm:p-6 rounded-2xl w-full h-full bg-opacity-50 backdrop-blur-md shadow-lg border-none">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
                label={renderCustomLabel}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CategoryPieChart;
