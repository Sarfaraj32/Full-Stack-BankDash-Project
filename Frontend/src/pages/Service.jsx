import BankServiceList from "../components/BankServiceList";
import ServiceFeatures from "../components/ServiceFeatures";
import Header from "../layout/Header";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="Services" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-15 space-y-6"
      >
        <ServiceFeatures />
        <BankServiceList />
      </motion.div>
    </>
  );
};

export default Service;
