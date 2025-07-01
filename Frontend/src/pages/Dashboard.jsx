import CategoryPieChart from "../components/CategoryPieChart.jsx";
import CreditCardTowhite from "../components/CreditCardTowhite.jsx";
import MyCards from "../components/MyCards.jsx";
import QuickTransfer from "../components/QuickTransfer.jsx";
import RenderCustomizedLabel from "../components/RenderCustomizedLabel.jsx";
import SimpleAreaChart from "../components/SimpleAreaChart.jsx";
import TransactionList from "../components/TransactionList";
import Header from "../layout/Header.jsx";
import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = ({ title }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="Overview" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-19 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:col-span-1 lg:col-span-1">
            <MyCards />
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <CreditCardTowhite />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <TransactionList />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <RenderCustomizedLabel />
          </div>
          <div className="col-span-12 md:col-span-4">
            <CategoryPieChart />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <QuickTransfer />
          </div>
          <div className="col-span-12 md:col-span-8">
            <SimpleAreaChart />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;
