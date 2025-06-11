import './App.css'
import { SendTransaction } from './components/sendTransactions';
import { ConnectButton } from '@suiet/wallet-kit';


function App() {

  return (
    <>
      <SendTransaction />
      <ConnectButton />
    </>
  )
}

export default App
