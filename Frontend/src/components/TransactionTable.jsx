// src/components/TransactionTable.jsx
const transactions = [
  { id: 1, date: "2025-05-01", description: "Starbucks", amount: -12.5 },
  { id: 1, date: "2025-05-01", description: "Starbucks", amount: -12.5 },
  { id: 2, date: "2025-05-02", description: "Salary", amount: 2000 },
  { id: 3, date: "2025-05-03", description: "Amazon", amount: -150 },
  { id: 4, date: "2025-05-03", description: "Amazon", amount: -150 },
  { id: 5, date: "2025-05-01", description: "Starbucks", amount: -12.5 },
  { id: 6, date: "2025-05-02", description: "Salary", amount: 2000 },
];

const TransactionTable = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Description</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-b last:border-none">
              <td className="p-2">{txn.date}</td>
              <td className="p-2">{txn.description}</td>
              <td className="p-2 font-medium text-right">
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

export default TransactionTable;
