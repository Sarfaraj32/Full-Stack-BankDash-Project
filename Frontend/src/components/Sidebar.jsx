import {
  House,
  CreditCard,
  Banknote,
  BarChart2,
  Wallet,
  Settings,
  Swords,
  Repeat,
  Biohazard,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: House, path: "/" },
  { label: "Transactions", icon: Repeat, path: "/transactions" },
  { label: "Accounts", icon: Wallet, path: "/accounts" },
  { label: "Investments", icon: BarChart2, path: "/investments" },
  { label: "Credit Cards", icon: CreditCard, path: "/credit-cards" },
  { label: "Loans", icon: Banknote, path: "/loans" },
  { label: "Services", icon: Swords, path: "/services" },
  { label: "My Previleges", icon: Biohazard, path: "/previleges" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex">
      <button
        className="lg:hidden fixed top-4 left-4 z-10000 p-2 bg-gray-200 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>
      <aside
        className={`fixed top-0 left-0 bg-white text-black shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:w-64 z-40`}
        style={{
          height: "100vh",
          overflowY: "auto",
          position: "fixed",
        }}
      >
        <div className="px-4 py-6">
          <Link to="/" onClick={closeSidebar}>
            <h1 className="text-2xl font-bold mb-8 text-center">BankDash.</h1>
          </Link>
          <nav className="flex flex-col gap-2">
            {navItems.map(({ label, icon: Icon, path }) => (
              <Link
                key={label}
                to={path}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-900 hover:text-white transition ${
                  pathname === path ? "text-blue-900 font-bold" : ""
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
