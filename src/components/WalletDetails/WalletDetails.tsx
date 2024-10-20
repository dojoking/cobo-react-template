import React from "react";
import { Button } from "@/components/ui/button";

interface WalletData {
  wallet_id: string;
  name: string;
  wallet_type: string;
  wallet_subtype: string;
}

interface WalletDetailsProps {
  wallet: WalletData;
  onClose: () => void;
}

const WalletDetails: React.FC<WalletDetailsProps> = ({ wallet, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Wallet Details</h2>
        <div className="space-y-2">
          <p><strong>ID:</strong> {wallet.wallet_id}</p>
          <p><strong>Name:</strong> {wallet.name}</p>
          <p><strong>Type:</strong> {wallet.wallet_type}</p>
          <p><strong>Subtype:</strong> {wallet.wallet_subtype}</p>
        </div>
        <Button onClick={onClose} className="mt-4">Close</Button>
      </div>
    </div>
  );
};

export default WalletDetails;