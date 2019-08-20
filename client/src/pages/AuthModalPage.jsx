import React, { useState } from 'react';
import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import Page from 'components/Page';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  Row,
} from 'reactstrap';

const AuthModalPage = () => {
  const [show, changeShow] = useState(false);
  const [authState, changeAuthState] = useState(STATE_LOGIN);

  const toggle = () => {
    changeShow(!show);
  };

  const handleAuthState = authState => {
    changeAuthState(authState);
  };

  const externalCloseBtn = (
    <button
      className="close"
      style={{
        position: 'absolute',
        top: '15px',
        right: '20px',
        fontSize: '3rem',
      }}
      onClick={toggle}>
    </button>
  );

  return (
    <Page
      title="Login Modal"
      breadcrumbs={[{ name: 'login modal', active: true }]}>
      <Row>
        <Col md="12" sm="12" xs="12">
          <Card>
            <CardHeader>Login Modal Example</CardHeader>
            <CardBody>
              <Button color="danger" onClick={toggle}>
                Click to Login
                </Button>
              <Modal
                isOpen={show}
                toggle={toggle}
                size="sm"
                backdrop="static"
                backdropClassName="modal-backdrop-light"
                external={externalCloseBtn}
                centered>
                <ModalBody>
                  <AuthForm
                    authState={authState}
                    onChangeAuthState={handleAuthState}
                  />
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
}

export default AuthModalPage;
