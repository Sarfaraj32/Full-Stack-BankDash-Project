import AddNewCard from "../components/AddNewCard";
import CardExpenseStatistics from "../components/CardExpenseStatistics";
import CardList from "../components/CardList";
import CardSettings from "../components/CardSettings";
import CreditCardTowhite from "../components/CreditCardTowhite";
import MyCards from "../components/MyCards";
import MyCardsTo from "../components/MyCardsTo";
import Header from "../layout/Header";
import { motion } from "framer-motion";

const CreditCards = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="Credit Cards" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-19 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MyCardsTo />
          <MyCards />
          <CreditCardTowhite />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <CardExpenseStatistics />
          </div>
          <div className="col-span-12 md:col-span-8">
            <CardList />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <AddNewCard />
          </div>
          <div className="col-span-12 md:col-span-4">
            <CardSettings />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CreditCards;
