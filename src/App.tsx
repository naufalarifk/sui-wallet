import "./App.css";
import { SendTransaction } from "./pages/SendTransactions";
import { ConnectButton } from "@suiet/wallet-kit";

function App() {
  return (
    <>
      <SendTransaction />
      <ConnectButton />
    </>
  );
}

export default App;
