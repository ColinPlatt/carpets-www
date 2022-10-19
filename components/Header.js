import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IconButton, Button, Box, Flex, Text, Heading, Container } from 'theme-ui';
import CarpetsBalance from "./CarpetsBalance";
import ModalDialog from "./ModalDialog";
import {
  OverlayContainer,
} from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';



export default function Header() {
  let infoModalState = useOverlayTriggerState({});

  return (
    <Box sx={{
      bg: 'liberty',
      color: 'ultraRed',
      px: 4
    }}>
      <Flex sx={{
        alignItems: 'center',
      }}>
        <Box px={2} sx={{ flex: '1 1 auto' }}>
          <Heading>
            An experimental crypto art project.
          </Heading>
        </Box>
        <IconButton
          sx={{
            px: 4,
            '&:hover': { transform: 'scale(1.1)' },
            '&:active': { transform: 'scale(0.9)' }
          }}
          onClick={infoModalState.open}>

          <img rel="icon" height="125%" src="/magiclamp.svg" />
        </IconButton>
        <CarpetsBalance />
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
