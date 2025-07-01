import Header from "../layout/Header";
import { motion } from "framer-motion";

const MyPrevileges = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md p-2 md:p-2">
        <Header title="My Previleges" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-12 space-y-6"
      >
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {/* Privilege Card 1 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-blue-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1m4 0h-1v-4h-1"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">Priority Support</h3>
              <p className="text-gray-600 text-sm">
                Get 24/7 access to our dedicated support team for all your
                banking needs.
              </p>
            </div>
            {/* Privilege Card 2 */}
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-green-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h12a2 2 0 012 2v7c0 2.21-3.582 4-8 4z"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">
                Higher Withdrawal Limits
              </h3>
              <p className="text-gray-600 text-sm">
                Enjoy increased daily withdrawal and transfer limits tailored
                for you.
              </p>
            </div>
            {/* Privilege Card 3 */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-yellow-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2zm-5 6a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">Exclusive Offers</h3>
              <p className="text-gray-600 text-sm">
                Access special rates, cashback, and partner deals available only
                to privileged members.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-purple-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">
                Personal Financial Advisor
              </h3>
              <p className="text-gray-600 text-sm">
                Consult with certified experts to optimize your investments and
                savings.
              </p>
            </div>
            {/* Privilege Card 5 */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-pink-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2a4 4 0 018 0v2m-4-4V7m0 0V5a2 2 0 10-4 0v2m0 0v6"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">
                Faster Loan Approvals
              </h3>
              <p className="text-gray-600 text-sm">
                Benefit from priority processing and reduced paperwork for your
                loan applications.
              </p>
            </div>
            {/* Privilege Card 6 */}
            <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-red-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">
                Customizable Alerts
              </h3>
              <p className="text-gray-600 text-sm">
                Set up personalized notifications for transactions, balances,
                and offers.
              </p>
            </div>
            {/* Privilege Card 7 */}
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-cyan-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h2l1 2h13l1-2h2M7 16h10M8 20h8"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">
                Free International Transfers
              </h3>
              <p className="text-gray-600 text-sm">
                Send money abroad with zero fees and competitive exchange rates.
              </p>
            </div>
            {/* Privilege Card 8 */}
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-indigo-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2">
                Early Access to New Features
              </h3>
              <p className="text-gray-600 text-sm">
                Be the first to try out our latest banking innovations and
                updates.
              </p>
            </div>
            {/* Privilege Card 9 */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-gray-500 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="12" x="2" y="6" rx="2" />
                <path d="M6 10h.01M18 10h.01" />
              </svg>
              <h3 className="font-semibold text-lg mb-2">
                Premium Card Designs
              </h3>
              <p className="text-gray-600 text-sm">
                Choose from exclusive card styles to match your personality and
                status.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyPrevileges;
