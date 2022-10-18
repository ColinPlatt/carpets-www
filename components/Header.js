import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box , Flex } from 'theme-ui';
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Flex >
        <Box px={4} paddingTop={3} paddingBottom={3} sx={{ flex: '1 1 auto' }}>
          An experimental crypto art project. 
        </Box>
        <Box px={4} py={2} >
          <ConnectButton 
                    label='Get Rugged'
                    accountStatus='address'
                    chainStatus='none'
                  />
        </Box>
      </Flex>
    </div>
  );
}