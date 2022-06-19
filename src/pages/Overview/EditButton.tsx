import React, { useState } from 'react';
import { Theme } from '../../theme';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import styled, { withTheme } from 'styled-components';
import { Button, Modal } from '@mui/material';
import CitiesForm from './CitiesForm';

const EditButtonWrapper = styled(Button)`
  min-width: 0;
  padding: 0;
`;

const EditButton = ({ theme }: { theme: Theme }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <EditButtonWrapper onClick={() => setOpen(true)}>
        <EditLocationOutlinedIcon htmlColor={theme.mainColor} />
      </EditButtonWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="select-cities"
        aria-describedby="select-cities"
      >
        <CitiesForm closeModal={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default withTheme(EditButton);
