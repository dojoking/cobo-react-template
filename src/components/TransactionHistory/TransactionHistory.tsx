import React from 'react';

interface Transaction {
  id: number;
  walletId: number;
  type: string;
  amount: number;
  token: string;
  date: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-2">Type</th>
            <th className="text-left py-2">Amount</th>
            <th className="text-left py-2">Token</th>
            <th className="text-left py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td className="py-2">
                <span className={`inline-block px-2 py-1 rounded ${
                  tx.type === 'Deposit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {tx.type}
                </span>
              </td>
              <td className="py-2">{tx.amount}</td>
              <td className="py-2">{tx.token}</td>
              <td className="py-2">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;