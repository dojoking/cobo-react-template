import React, { useState } from 'react';
import coboApi from '@/services/coboApi';

interface DepositWithdrawProps {
  walletId: string;
}

const DepositWithdraw: React.FC<DepositWithdrawProps> = ({ walletId }) => {
  const [depositAddress, setDepositAddress] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawAddress, setWithdrawAddress] = useState('');

  const handleCreateDepositAddress = async () => {
    try {
      const response = await coboApi.createNewAddress(walletId);
      setDepositAddress(response.data.address);
    } catch (error) {
      console.error('Error creating deposit address:', error);
    }
  };

  const handleWithdraw = async () => {
    try {
      await coboApi.withdrawFromWallet(walletId, {
        amount: withdrawAmount,
        address: withdrawAddress,
      });
      alert('Withdrawal request submitted successfully');
    } catch (error) {
      console.error('Error submitting withdrawal:', error);
    }
  };

  return (
    <div>
      <h3>Deposit</h3>
      <button onClick={handleCreateDepositAddress}>Generate Deposit Address</button>
      {depositAddress && <p>Deposit Address: {depositAddress}</p>}

      <h3>Withdraw</h3>
      <input
        type="text"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={withdrawAddress}
        onChange={(e) => setWithdrawAddress(e.target.value)}
        placeholder="Destination Address"
      />
      <button onClick={handleWithdraw}>Submit Withdrawal</button>
    </div>
  );
};

export default DepositWithdraw;