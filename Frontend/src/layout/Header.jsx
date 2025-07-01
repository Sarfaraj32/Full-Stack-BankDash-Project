import { Settings, BellDot } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pageMap = {
  dashboard: "/",
  accounts: "/Accounts",
  transactions: "/Transactions",
  investments: "/Investments",
  loans: "/Loans",
  settings: "/Settings",
  services: "/Services",
  myprevileges: "/Previleges",
  creditcards: "/Credit-Cards",
};

const Header = ({ title }) => {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const notificationRef = useRef();
  const bellButtonRef = useRef();

  const notifications = [
    { id: 1, message: "Your account was credited.", time: "2m ago" },
    { id: 2, message: "Loan payment due tomorrow.", time: "1h ago" },
    { id: 3, message: "New investment opportunity!", time: "3h ago" },
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const query = search.trim().toLowerCase();
      if (pageMap[query]) {
        navigate(pageMap[query]);
      }
    }
  };

  useEffect(() => {
    if (!showNotifications) return;
    function handleClick(event) {
      // If click is outside both the dropdown and the bell button, close
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        bellButtonRef.current &&
        !bellButtonRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showNotifications]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between w-full px-4 py-2 bg-white"
    >
      <div className="flex-1 text-center">
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      </div>

      <div className="flex items-center gap-4 relative">
        <input
          className="hidden md:block w-full max-w-md px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search for something"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="hidden md:block p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={() => navigate("/Settings")}
        >
          <Settings className="w-5 h-5 text-gray-700" />
        </button>
        <button
          ref={bellButtonRef}
          className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200 shadow-sm relative focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={(e) => {
            e.stopPropagation();
            setShowNotifications((prev) => !prev);
          }}
          aria-label="Show notifications"
        >
          <BellDot className="w-5 h-5 text-gray-700" />
          {notifications.length > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          )}
        </button>
        {showNotifications && (
          <div
            ref={notificationRef}
            className="fixed md:absolute right-4 md:right-16 top-16 md:mt-2 w-[95vw] max-w-xs md:w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 z-50 animate-fade-in overflow-hidden"
            style={{ minWidth: "min(95vw, 18rem)" }}
          >
            <div className="p-4 border-b font-semibold text-gray-900 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center gap-2">
              <BellDot className="w-5 h-5 text-blue-500" /> Notifications
            </div>
            <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100">
              {notifications.length === 0 ? (
                <li className="p-6 text-gray-400 text-center">
                  No notifications
                </li>
              ) : (
                notifications.map((n) => (
                  <li
                    key={n.id}
                    className="px-5 py-4 hover:bg-blue-50 transition-colors duration-150 flex justify-between items-center"
                  >
                    <span className="text-gray-800 text-sm font-medium">
                      {n.message}
                    </span>
                    <span className="text-xs text-blue-400 ml-2 whitespace-nowrap">
                      {n.time}
                    </span>
                  </li>
                ))
              )}
            </ul>
            <div className="p-3 text-center bg-blue-50 text-blue-600 text-xs cursor-pointer hover:underline select-none">
              View all notifications
            </div>
          </div>
        )}
        <img
          className="h-8 w-8 rounded-2xl border-gray-700"
          src="/profile.jpg"
          alt="Profile"
        />
      </div>
    </motion.div>
  );
};

export default Header;
