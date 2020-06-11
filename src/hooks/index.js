import React, { useCallback, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

import BaseModal from 'components/Modals/Base';
import ActionButtons from 'components/Modals/ActionButtons';

export const useShallowEqualSelector = selector => useSelector(selector, shallowEqual);

export const useModal = () => {
  const [content, setContent] = useState(null);
  const closeModal = useCallback(() => setContent(null), [setContent]);

  const Modal = ({ ...props }) =>
    content && (
      <BaseModal open={!!content} handleClose={closeModal} {...props}>
        {content}
      </BaseModal>
    );

  return {
    closeModal,
    Modal,
    setContent,
  };
};

export const useConfirmationModal = () => {
  const [confirmContent, setConfirmContent] = useState(null);
  const closeModal = useCallback(() => setConfirmContent(null), [setConfirmContent]);

  const confirmationModal = confirmContent && (
    <BaseModal open={!!confirmContent} handleClose={closeModal}>
      <DialogTitle>{confirmContent.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{confirmContent.message}</DialogContentText>
      </DialogContent>
      <ActionButtons handleClose={closeModal} onSubmit={confirmContent.onSubmit} withoutForm />
    </BaseModal>
  );

  return {
    confirmationModal,
    setConfirmContent,
  };
};
