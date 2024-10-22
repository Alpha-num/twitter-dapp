import React from "react";
import ConnectWallet from "./ConnectWallet";

function Header({ connect, account }) {
  return (
    <div className="flex justify-end p-1 m-3 w-full">
      <ConnectWallet connect={connect} account={account} />
    </div>
  );
}

export default Header;
