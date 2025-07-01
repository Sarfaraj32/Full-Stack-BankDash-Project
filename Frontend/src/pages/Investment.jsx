import { motion } from "framer-motion";
import InvestmentChart from "../components/InvestmentChart";
import InvestmentStats from "../components/InvestmentStats";
import MyInvestment from "../components/MyInvestment";
import RevenueChart from "../components/RevenueChart";
import TrendingStock from "../components/TrendingStock";
import Header from "../layout/Header";

const Investment = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="Investments" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-15 space-y-6"
      >
        <InvestmentStats />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <InvestmentChart />
          <RevenueChart />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <MyInvestment />
          </div>
          <div className="col-span-12 md:col-span-4">
            <TrendingStock />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Investment;
