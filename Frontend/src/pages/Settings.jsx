import SettingFile from "../components/SettingFile";
import Header from "../layout/Header";
import React from "react";
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="Settings" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-19 space-y-6"
      >
        <SettingFile />
      </motion.div>
    </>
  );
};

export default Settings;
