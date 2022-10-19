
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
    const GetWalletRug = async () => {
      let rugImg = await useRugsImage(address)
      setRugImg(rugImg);
    }

    if (!rugImage && rugsBalance > 0) {
      GetWalletRug();
    }
  }, [rugsBalance, rugImage]);



  return (

      <Container sx={{
      }}>
        {/* <Grid>
          <Text>test stuff here: { }</Text>
          <Text>balance: {rugsBalance} { }</Text>
        </Grid> */}

{rugImage &&

<FlyingCarpet imageUrl={rugImage}/>
}



      </Container>
  )
};

export default Home;
