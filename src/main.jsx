import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { MetaMaskProvider } from "@metamask/sdk-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        rpc: {
          15727628: "https://sepolia.rpc.zora.energy",
        },
        // Other options.
      }}
    >
      <App />
    </MetaMaskProvider>
  </StrictMode>
);
