
import { useAccount } from 'wagmi';

import {
  useRugsBalance,
  useRugsImage
} from '../hooks/index';

import theme from '../theme';
import { Text, Container, Grid, Button, Box } from 'theme-ui';
import { useEffect, useState } from 'react';
import FlyingCarpet from '../components/FlyingCarpet';

import { ConnectButton } from "@rainbow-me/rainbowkit";


const Home = () => {
  const [rugImage, setRugImg] = useState(null);
  const rugsBalance = useRugsBalance();
  const { address } = useAccount();

  useEffect(() => {
    const GetWalletRug = async () => {
      let rugImg = await useRugsImage(address)
      setRugImg(rugImg);
    }

    if (!rugImage && rugsBalance > 0) {
      GetWalletRug();
    }
  }, [rugsBalance, rugImage]);



  return (

    <Container>
      {!address && (
        <Box px={2} py={2}  sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1
        }}>
          <ConnectButton
            label='Get Rugged'
            accountStatus='address'
            chainStatus='none'
          />
        </Box>
      )}
      <FlyingCarpet imageUrl={rugImage}/>
    </Container>
  )
};

export default Home;
