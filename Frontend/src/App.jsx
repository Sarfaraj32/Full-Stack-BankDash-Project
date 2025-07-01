import Layout from "./layout/Layout";
import Accounts from "./pages/Accounts";
import CreditCards from "./pages/CreditCards";
import Dashboard from "./pages/Dashboard";
import Investment from "./pages/Investment";
import Loans from "./pages/Loans";
import MyPrevileges from "./pages/MyPrevileges";
import Service from "./pages/Service";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investment />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Service />} />
          <Route path="/previleges" element={<MyPrevileges />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
