import React, { useState } from 'react';
import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import { Button, Modal, ModalBody } from 'reactstrap';

const AuthModal = () => {
  const [show, changeShow] = useState(true);
  const [authState, changeAuthState] = useState(STATE_LOGIN);

  const toggle = () => {
    changeShow(!show);
  };

  const handleAuthState = authState => {
    changeAuthState(authState);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Login
        </Button>
      <Modal
        isOpen={show}
        toggle={toggle}
        size="sm"
        fade={false}
        centered>
        <ModalBody>
          <AuthForm
            authState={authState}
            onChangeAuthState={handleAuthState}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AuthModal;
