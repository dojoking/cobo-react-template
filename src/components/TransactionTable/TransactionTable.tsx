import React from 'react';
import { formatDate, formatAddress } from '../../utils/formatters';

interface Transaction {
  transaction_id: string;
  type: string;
  source: {
    address?: string;
    addresses?: string[];
  };
  destination: {
    address?: string;
    amount: string;
  };
  token_id: string;
  created_timestamp: number;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-left">Token</th>
            <th className="py-3 px-6 text-left">From</th>
            <th className="py-3 px-6 text-left">To</th>
            <th className="py-3 px-6 text-left">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {transactions.map((tx) => (
            <tr key={tx.transaction_id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <span className={`bg-${tx.type === 'Deposit' ? 'green' : 'red'}-200 text-${tx.type === 'Deposit' ? 'green' : 'red'}-600 py-1 px-3 rounded-full text-xs`}>
                  {tx.type}
                </span>
              </td>
              <td className="py-3 px-6 text-left">{tx.destination.amount}</td>
              <td className="py-3 px-6 text-left">{tx.token_id}</td>
              <td className="py-3 px-6 text-left">{formatAddress(tx.source.address || tx.source.addresses?.[0])}</td>
              <td className="py-3 px-6 text-left">{formatAddress(tx.destination.address)}</td>
              <td className="py-3 px-6 text-left">{formatDate(tx.created_timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;