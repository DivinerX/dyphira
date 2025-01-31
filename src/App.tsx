import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '@/Routes'
import { store } from '@/redux'
import { AuthProvider } from '@/contexts/auth.provider'
import { ToastContainer } from 'react-toastify';
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import * as web3 from "@solana/web3.js"
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets"
import { useMemo } from 'react'


function App() {
  const endpoint = web3.clusterApiUrl("devnet")
  const wallets = useMemo(() => {
    return [
      new walletAdapterWallets.PhantomWalletAdapter(),
      new walletAdapterWallets.SolflareWalletAdapter(),
    ]
  }, [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          <Provider store={store}>
            <AuthProvider>
              <BrowserRouter>
                <Routes />
                <ToastContainer />
              </BrowserRouter>
            </AuthProvider>
          </Provider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider >
  )
}

export default App
