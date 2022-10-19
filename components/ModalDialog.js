import React from 'react';
import {
    FocusScope,
    useDialog,
    useModal,
    useOverlay,
    usePreventScroll
  } from 'react-aria';
  
import { Box } from 'theme-ui';
const ModalDialog = (props) => {
    let { title, children } = props;
  
    // Handle interacting outside the dialog and pressing
    // the Escape key to close the modal.
    let ref = React.useRef();
    let { overlayProps, underlayProps } = useOverlay(props, ref);
  
    // Prevent scrolling while the modal is open, and hide content
    // outside the modal from screen readers.
    usePreventScroll();
    let { modalProps } = useModal();
  
    // Get props for the dialog and its title
    let { dialogProps, titleProps } = useDialog(props, ref);
  
    return (
      <Box
        sx={{
          position: 'fixed',
          zIndex: 100,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        {...underlayProps}
      >
        <FocusScope contain restoreFocus autoFocus>
          <Box
            {...overlayProps}
            {...dialogProps}
            {...modalProps}
            ref={ref}
            style={{
              background: 'white',
              color: 'black',
              padding: 30
            }}
          >
            <h3
              {...titleProps}
              style={{ marginTop: 0 }}
            >
              {title}
            </h3>
            {children}
          </Box>
        </FocusScope>
      </Box>
    );
  }

  export default ModalDialog;