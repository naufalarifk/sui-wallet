import "@suiet/wallet-kit/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SuiClientProvider } from "@mysten/dapp-kit";
import { WalletProvider } from "@suiet/wallet-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";

const queryClient = new QueryClient();

const networks = {
  devnet: { url: getFullnodeUrl("devnet") },
  mainn: { url: getFullnodeUrl("mainnet") },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networks} defaultNetwork="devnet">
          <WalletProvider>
            <App />
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  </StrictMode>
);
