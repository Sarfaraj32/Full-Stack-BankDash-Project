import { motion } from "framer-motion";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const RenderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="darkgreen"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/barchartdata");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({
        error: "Failed To Fetch Weekly Activity Data",
        loading: false,
      });
    }
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <div className="flex items-center justify-center h-[250px]">
          <div className="text-gray-600">Loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4">Weekly Activity</h3>
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
        <h3 className="text-lg font-bold mb-4">Weekly Activity</h3>
        <motion.div
          className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl pt-6 border-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={12}
              >
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    borderColor: "#4B5563",
                  }}
                  cursor={false}
                />
                <Legend />
                <Bar
                  dataKey="deposit"
                  fill="#1814F3"
                  minPointSize={5}
                  radius={[10, 10, 10, 10]}
                />
                <Bar
                  dataKey="withdraw"
                  fill="#16DBCC"
                  minPointSize={10}
                  radius={[10, 10, 10, 10]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    );
  }
}
