import { useWallet } from "@suiet/wallet-kit";
import { Transaction } from "@mysten/sui/transactions";
// import { AppButton as Button, AppInput as Input } from "@/components";
import { useState } from "react";
import { Button } from "@heroui/button";

export function SendTransaction() {
  const [address, setAddress] = useState(
    "0x64b83450f7c00cd1f3e1aed0f413b7c2f2df814ea4821f5768254f5b0212974f"
  );

  const wallet = useWallet();

  async function handleTransaction() {
    if (!wallet.connected || !wallet.address) return;

    const tx = new Transaction();
    const recipient: string =
      "0x64b83450f7c00cd1f3e1aed0f413b7c2f2df814ea4821f5768254f5b0212974f";
    const amount: number = 10000000;
    tx.setSender(wallet.address);
    tx.setGasBudget(10000000);

    const [coin] = tx.splitCoins(tx.gas, [tx.pure("u64", amount)]);
    tx.transferObjects([coin], tx.pure("address", recipient));
    try {
      const res = await wallet.signAndExecuteTransaction({
        transaction: tx,
      });

      console.log("✅ Transaction Success!", res.digest);
      const explorerLink = `https://suiexplorer.com/txblock/${res.digest}?network=testnet`;
      window.open(explorerLink, "_blank");
    } catch (err) {
      console.error("❌ Transaction failed:", err);
    }
  }

  return (
    <>
      {/* <Button variant="default">
        zamn zaniel
      </Button> */}
      {/* <Input /> */}
      <Button color="danger" onPress={() => handleTransaction()}>
        Send Transaction!
      </Button>
    </>
  );
}
