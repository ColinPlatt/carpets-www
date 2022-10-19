import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
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

import theme from '../theme';
import {
  OverlayProvider,
} from 'react-aria';




import { ThemeProvider } from 'theme-ui';

function CarpetApp({ Component, pageProps }) {

  console.log(`trying env ${process.env.MORALIS_API_KEY}`);

  const { chains, provider, webSocketProvider } = configureChains(
    [
      chain.mainnet,
      chain.goerli, //move this before prod
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        ? [chain.goerli, chain.localhost]
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

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });

  const customTheme = merge(lightTheme(), {
    colors: {
      accentColor: theme.colors.ultraRed,
      accentColorForeground: theme.colors.jacarta,
      actionButtonSecondaryBackground: theme.colors.ultraRed,
      modalBackground: theme.colors.ultraRed,
      modalText: theme.colors.jacarta,
      menuItemBackground: theme.colors.ultraRed,
      closeButtonBackground: theme.colors.ultraRed,
      connectButtonBackground: theme.colors.ultraRed,
      connectButtonText: theme.colors.jacarta,
      downloadBottomCardBackground: theme.colors.ultraRed,
      downloadTopCardBackground: theme.colors.ultraRed,
    },
    fonts: {
      body: 'aladdin',
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <OverlayProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={customTheme}
            modalSize="compact"
          >
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </OverlayProvider>
    </ThemeProvider>
  );
}

export default CarpetApp;
