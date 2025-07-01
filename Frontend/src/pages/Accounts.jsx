import { motion } from "framer-motion";
import DashboardStatsCard from "../components/DashboardStatsCard";
import DebitCreditOverview from "../components/DebitCreditOverview";
import InvoicesSent from "../components/InvoicesSent";
import MyCardsTo from "../components/MyCardsTo";
import ThreeRecentTransactions from "../components/ThreeRecentTransactions";
import Header from "../layout/Header";

const Accounts = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="Accounts" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-19 space-y-6"
      >
        <DashboardStatsCard />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <ThreeRecentTransactions />
          </div>
          <div className="col-span-12 md:col-span-4">
            <MyCardsTo />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <DebitCreditOverview />
          </div>
          <div className="col-span-12 md:col-span-4">
            <InvoicesSent />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Accounts;
