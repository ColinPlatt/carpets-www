import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IconButton, Button, Box , Flex } from 'theme-ui';
import styles from "../styles/Home.module.css";


export default function Header() {
  return (
    <div className={styles.header}>
      <Flex >
        <Box px={2} paddingTop={3} paddingBottom={3} sx={{ flex: '1 1 auto' }}>
          An experimental crypto art project. 
        </Box>
        <IconButton paddingTop={4}>
          <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 40"
              width="30"
              height="30"
              fill="currentcolor">
            <path d="M14.768,0C6.611,0,0,6.609,0,14.768c0,8.155,6.611,14.767,14.768,14.767s14.768-6.612,14.768-14.767
              C29.535,6.609,22.924,0,14.768,0z M14.768,27.126c-6.828,0-12.361-5.532-12.361-12.359c0-6.828,5.533-12.362,12.361-12.362
              c6.826,0,12.359,5.535,12.359,12.362C27.127,21.594,21.594,27.126,14.768,27.126z"/>
            <path d="M14.385,19.337c-1.338,0-2.289,0.951-2.289,2.34c0,1.336,0.926,2.339,2.289,2.339c1.414,0,2.314-1.003,2.314-2.339
              C16.672,20.288,15.771,19.337,14.385,19.337z"/>
            <path d="M14.742,6.092c-1.824,0-3.34,0.513-4.293,1.053l0.875,2.804c0.668-0.462,1.697-0.772,2.545-0.772
              c1.285,0.027,1.879,0.644,1.879,1.543c0,0.85-0.67,1.697-1.494,2.701c-1.156,1.364-1.594,2.701-1.516,4.012l0.025,0.669h3.42
              v-0.463c-0.025-1.158,0.387-2.162,1.311-3.215c0.979-1.08,2.211-2.366,2.211-4.321C19.705,7.968,18.139,6.092,14.742,6.092z"/>
          </svg>
        </IconButton>
        <Button >
          Box with WARP Balance
          <Box>
            Value
          </Box>
        </Button>
        <Box px={2} py={2} >
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