import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from "../components/Header";

const Home = () => {
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


      test stuff here: 
      {/*connectedAdfdress.toString()*/}
      </>
  )
};

export default Home;