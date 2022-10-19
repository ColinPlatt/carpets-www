
import { useAccount } from 'wagmi';

import {
  useRugsBalance,
  useRugsImage
} from '../hooks/index';

import theme from '../theme';
import { Text, Container, Grid, Button } from 'theme-ui';
import { useEffect, useState } from 'react';
import FlyingCarpet from '../components/FlyingCarpet';

const Home = () => {
  const [rugImage, setRugImg] = useState(null);
  const rugsBalance = useRugsBalance();
  const { address } = useAccount();

  useEffect(() => {
    const getWalletRug = async () => {
      let rugImg = await useRugsImage(address)
      setRugImg(rugImg);
    }

    if (!rugImage && rugsBalance > 0) {
      getWalletRug();
    }
  }, [rugsBalance, rugImage]);



  return (

      <Container sx={{
        pt: 3
      }}>
        <Grid>
          <Text>test stuff here: { }</Text>
          <Text>balance: {rugsBalance} { }</Text>
          {rugImage && <img src={rugImage} />}
        </Grid>

            <FlyingCarpet />
      </Container>
  )
};

export default Home;
