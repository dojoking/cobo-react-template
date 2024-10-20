import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Wallet, Banknote } from "lucide-react";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Crypto Wallet</h1>
      <nav className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-white hover:bg-gray-800"
          onClick={() => handleNavigation('/')}
        >
          <Wallet className="mr-2 h-4 w-4" />
          Wallets
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-white hover:bg-gray-800"
          onClick={() => handleNavigation('/transactions')}
        >
          <Banknote className="mr-2 h-4 w-4" />
          Transactions
        </Button>
      </nav>
    </div>
  );
};

export default Sidebar;