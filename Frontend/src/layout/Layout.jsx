import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto lg:ml-64">{children}</main>
    </div>
  );
};

export default Layout;
