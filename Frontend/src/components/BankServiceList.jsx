import { Wallet, CreditCard, PiggyBank, Building2, Shield } from "lucide-react";

const BankServiceList = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-pink-500" />,
      title: "Business loans",
      description: "It is a long established",
      col1: "Many publishing",
      col2: "Many publishing",
      col3: "Many publishing",
    },
    {
      icon: <Wallet className="w-8 h-8 text-yellow-500" />,
      title: "Checking accounts",
      description: "It is a long established",
      col1: "Many publishing",
      col2: "Many publishing",
      col3: "Many publishing",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-pink-500" />,
      title: "Savings accounts",
      description: "It is a long established",
      col1: "Many publishing",
      col2: "Many publishing",
      col3: "Many publishing",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: "Debit and credit cards",
      description: "It is a long established",
      col1: "Many publishing",
      col2: "Many publishing",
      col3: "Many publishing",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Life Insurance",
      description: "It is a long established",
      col1: "Many publishing",
      col2: "Many publishing",
      col3: "Many publishing",
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Bank Services List</h3>
      <div className="w-full">
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg">{service.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
                <span>{service.col1}</span>
                <span>{service.col2}</span>
                <span>{service.col3}</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankServiceList;
