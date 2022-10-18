import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { AppProps } from 'next/app';
import merge from 'lodash.merge';
import {
  RainbowKitProvider,
  getDefaultWallets,
  Theme,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

console.log(`trying env ${process.env.MORALIS_API_KEY}`);

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.sepolia]
      : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      // move this to env
      apiKey: process.env.ALCHEMY_API_KEY,
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Carpet App',
  chains,
});

const customTheme = merge(lightTheme(), {
  colors: {
    accentColor: "var(--color-ultra-red)",
    accentColorForeground: "var(--color-jacarta)",
    actionButtonSecondaryBackground: "var(--color-ultra-red)",
    modalBackground: "var(--color-ultra-red)",
    menuItemBackground: "var(--color-ultra-red)",
    closeButtonBackground: "var(--color-ultra-red)",
    connectButtonBackground: "var(--color-ultra-red)",
    downloadBottomCardBackground: "var(--color-ultra-red)",
    downloadTopCardBackground: "var(--color-ultra-red)",
  },
  fonts: {
    body: 'aladdin',
  },
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function CarpetApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={customTheme} 
        >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default CarpetApp;
