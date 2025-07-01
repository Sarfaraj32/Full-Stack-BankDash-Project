// src/components/AccountTable.jsx
const transactions = [
  { id: 1, date: "2025-05-04", type: "Deposit", amount: 1000 },
  { id: 2, date: "2025-05-03", type: "Withdrawal", amount: -200 },
  { id: 3, date: "2025-05-02", type: "Transfer", amount: -500 },
];

const AccountTable = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-b last:border-none">
              <td className="p-2">{txn.date}</td>
              <td className="p-2">{txn.type}</td>
              <td className="p-2 text-right font-medium">
                {txn.amount < 0 ? (
                  <span className="text-red-500">-${Math.abs(txn.amount)}</span>
                ) : (
                  <span className="text-green-500">+${txn.amount}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
