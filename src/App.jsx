import "./App.css";
import { useSDK } from "@metamask/sdk-react";
import React, { useState } from "react";

import Header from "./components/Header";
import PostBox from "./components/PostBox";
import PostButton from "./components/PostButton";
import TweetList from "./components/TweetList";

function App() {
  const [account, setAccount] = useState(null);
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header connect={connect} account={account} />
      <div>
        <h2 className="text-3xl font-bold text-gray-700 text-center w-full">
          Twitter dApp
        </h2>
      </div>
      <div className="flex items-center gap-2 w-full justify-center my-10">
        <PostBox />
        <PostButton />
      </div>
      <div>
        <TweetList />
      </div>
    </div>
  );
}

export default App;
