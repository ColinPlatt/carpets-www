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

import { ThemeProvider, Box, Flex, Text } from 'theme-ui';

import Header from "../components/Header";
import Head from 'next/head';


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

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Head>
                <title>Flying Rugs 🧞</title>
                <meta
                  name="Magic Flying Rugs Tokens"
                  content="An experimental crypto art project, in conjunction with Rug Research"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
              </Head>
              <Header />

              <Box
                sx={{
                  width: '100%',
                  flex: '1 1 auto',
                  variant: 'layout.main',
                }}
              >

                <Component {...pageProps} />
              </Box>

              <Box
              >
                <Flex sx={{
                  justifyContent: 'center',
                  py: 3
                }}>
                  <Text>
                    A Rug Research collaboration
                  </Text>
                </Flex>
              </Box>
            </Box>
          </RainbowKitProvider>
        </WagmiConfig>
      </OverlayProvider>
    </ThemeProvider>
  );
}

export default CarpetApp;
