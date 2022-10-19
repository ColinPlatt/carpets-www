import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IconButton, Button, Box, Flex, Text } from 'theme-ui';
import styles from "../styles/Home.module.css";
import RugBalance from "./RugBalance";
import ModalDialog from "./ModalDialog";
import {
  OverlayContainer,
} from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';



export default function Header() {
  let infoModalState = useOverlayTriggerState({});

  return (
    <Box  sx={{
      bg: 'liberty',
      color: 'ultraRed'
    }}
    
    className={styles.header}>
      <Flex sx={{
        alignItems: 'center',
      }}>
        <Box px={2} sx={{ flex: '1 1 auto' }}>
          An experimental crypto art project.
        </Box>
        <IconButton
          sx={{
            px: 4,
            '&:hover': {transform: 'scale(1.1)'},
            '&:active' : {transform: 'scale(0.9)'}
          }}
          onClick={infoModalState.open}>

          <img rel="icon" height="125%" src="/magiclamp.svg" />
        </IconButton>
        <RugBalance />
        <Box px={2} py={2} >
          <ConnectButton
            label='Get Rugged'
            accountStatus='address'
            chainStatus='none'
          />
        </Box>
      </Flex>





      {infoModalState.isOpen &&
        (
          <OverlayContainer>
            <ModalDialog
              title="Info"
              isOpen
              onClose={infoModalState.close}
              isDismissable
            >
              <Box>
                <Text>
                  Ayo, this is a test
                </Text>
              </Box>
              <Button
                onClick={infoModalState.close}
                sx={{ mt: 10 }}
              >
                Close
              </Button>
            </ModalDialog>
          </OverlayContainer>
        )}
    </Box>
  );
}