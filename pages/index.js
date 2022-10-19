
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from "../components/Header";

import { useAccount } from 'wagmi';

import { 
  useRugsBalance, 
  useRugsImage 
}  from '../hooks/index';

import { Text, Container, Grid, Button } from 'theme-ui';

const Home = () => {
  
  const rugsBalance = useRugsBalance();
  const {address} = useAccount();
  //const rugsImage = useRugsImage();

  let rugImg;
  
  return (
    <>
      <Head>
          <title>Flying Rugs 🧞</title>
          <meta
            name="Magic Flying Rugs Tokens"
            content="An experimental crypto art project, in conjunction with Rug Research"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        </Head>
      {/* Add Navbar to homepage */}
      <Header />

      

      <Grid>      
        <Text>test stuff here: {}</Text>
        <Text>balance: {rugsBalance} {}</Text>
        <Button onClick={(e) => {
          rugImg = useRugsImage(address)
        }}>
        get image 
        </Button>
      </Grid>

      

      </>
  )
};

export default Home;