import axios from 'axios';

export const fetchTransactions = async (page: number, walletId?: string | null) => {
  const params = new URLSearchParams({
    limit: '10',
    before: (page * 10).toString(),
  });

  if (walletId) {
    params.append('wallet_ids', walletId);
  }

  const response = await axios.get(`/transactions?${params.toString()}`);
  return response.data;
};