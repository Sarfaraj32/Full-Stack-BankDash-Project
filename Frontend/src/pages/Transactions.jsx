import CreditCardTowhite from "../components/CreditCardTowhite.jsx";
import MyCards from "../components/MyCards.jsx";
import MyCardsTo from "../components/MyCardsTo.jsx";
import RecentTransactions from "../components/RecentTransactions.jsx";
import RenderLabel from "../components/RenderLabel.jsx";
import Header from "../layout/Header.jsx";
import { motion } from "framer-motion";

const Transactions = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="Transactions" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-19 space-y-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <MyCards />
          <CreditCardTowhite />
          <RenderLabel />
        </div>
        <div className="w-full">
          <RecentTransactions />
        </div>
      </motion.div>
    </>
  );
};

export default Transactions;
