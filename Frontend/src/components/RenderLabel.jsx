import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

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
      const response = await axios.get(
        "http://localhost:3000/api/transExpensedata"
      );
      this.setState({ data: response.data, loading: false });
    } catch (error) {
      this.setState({
        error: "Failed To Fetch Expense Data BarCharts",
        loading: false,
      });
      console.error("Error fetching expense data:", error);
    }
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <div>
          <h3 className="text-lg font-bold mb-4">My Expense</h3>
          <div className="h-[260px] w-full">
            <div className=" p-4 h-full flex items-center justify-center">
              Loading...
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4">My Expense</h3>
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
        <h3 className="text-lg font-bold mb-4">My Expense</h3>
        <div className="h-[260px] w-full">
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  height={40}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={false}
                  width={40}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                />
                <Bar
                  dataKey="expense"
                  fill="#16DBCC"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}
