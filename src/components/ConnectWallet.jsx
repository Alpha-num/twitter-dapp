import React from "react";

function ConnectWallet({ connect, account }) {
  return (
    <div>
      {account ? (
        <p className="text-green-400">Connected: {account}</p>
      ) : (
        <button
          onClick={connect}
          className="p-2 border rounded-md bg-gray-700 text-gray-300 cursor-pointer"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default ConnectWallet;
