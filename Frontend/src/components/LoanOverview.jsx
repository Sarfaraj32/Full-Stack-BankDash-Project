import React from "react";

const LoanOverview = () => {
  const loans = [
    {
      id: "01",
      loanMoney: 100000,
      leftToRepay: 40500,
      duration: "8 Months",
      interestRate: "12%",
      installment: "2,000 / month",
    },
    {
      id: "02",
      loanMoney: 500000,
      leftToRepay: 250000,
      duration: "36 Months",
      interestRate: "10%",
      installment: "8,000 / month",
    },
    {
      id: "03",
      loanMoney: 900000,
      leftToRepay: 40500,
      duration: "12 Months",
      interestRate: "12%",
      installment: "5,000 / month",
    },
    {
      id: "04",
      loanMoney: 50000,
      leftToRepay: 40500,
      duration: "25 Months",
      interestRate: "5%",
      installment: "2,000 / month",
    },
    {
      id: "05",
      loanMoney: 50000,
      leftToRepay: 40500,
      duration: "5 Months",
      interestRate: "16%",
      installment: "10,000 / month",
    },
    {
      id: "06",
      loanMoney: 80000,
      leftToRepay: 25500,
      duration: "14 Months",
      interestRate: "8%",
      installment: "2,000 / month",
    },
    {
      id: "07",
      loanMoney: 12000,
      leftToRepay: 5500,
      duration: "9 Months",
      interestRate: "13%",
      installment: "500 / month",
    },
    {
      id: "08",
      loanMoney: 160000,
      leftToRepay: 100800,
      duration: "3 Months",
      interestRate: "12%",
      installment: "900 / month",
    },
  ];

  const totalLoanMoney = loans.reduce((acc, loan) => acc + loan.loanMoney, 0);
  const totalLeftToRepay = loans.reduce(
    (acc, loan) => acc + loan.leftToRepay,
    0
  );
  const totalInstallment = "50,000 / month";

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Active Loan Overviws</h3>
      <div className="p-2">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  SL No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loan Money
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Left to repay
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Interest rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Installment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loans.map((loan) => (
                <tr key={loan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                    {loan.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${loan.loanMoney.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${loan.leftToRepay.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                    {loan.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                    {loan.interestRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                    ${loan.installment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-indigo-600 hover:text-indigo-900 font-medium border border-indigo-600 rounded-full px-4 py-1 hover:bg-indigo-50 transition-colors">
                      Repay
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-medium">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 hidden md:table-cell">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  ${totalLoanMoney.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  ${totalLeftToRepay.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 hidden md:table-cell">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 hidden md:table-cell">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 hidden md:table-cell">
                  ${totalInstallment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoanOverview;
