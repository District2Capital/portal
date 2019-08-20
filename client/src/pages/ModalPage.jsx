import React, { useState } from 'react';
import Page from 'components/Page';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';

const ModalPage = ({ ...props }) => {
  const [modal, changeModal] = useState(false);
  const [modalBackdrop, changeModalBackDrop] = useState(false);
  const [modalNestedParent, changeModalNestedParent] = useState(false);
  const [modalNested, changeModalNested] = useState(false);
  const [backDrop, changeBackDrop] = useState(true);
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  return (
    <Page title="Modals" breadcrumbs={[{ name: 'modals', active: true }]}>
      <Row>
        <Col md="12" sm="12" xs="12">
          <Card>
            <CardHeader>Modal</CardHeader>
            <CardBody>
              <Button onClick={() => changeModal(!modal)}>Launch Modal</Button>
              <Modal
                isOpen={modal}
                toggle={changeModal}
                className={props.className}>
                <ModalHeader toggle={changeModal}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                  </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => changeModal(!modal)}>
                    Do Something
                    </Button>{' '}
                  <Button color="secondary" onClick={() => changeModal(!modal)}>
                    Cancel
                    </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>

        <Col md="12" sm="12" xs="12">
          <Card>
            <CardHeader className="d-flex justify-content-between">
              Backdrop
                <ButtonGroup size="sm">
                <Button
                  onClick={() => changeBackDrop(true)}
                  color="primary"
                  active={backdrop}>
                  true
                  </Button>
                <Button
                  onClick={() => changeBackDrop(false)}
                  color="primary"
                  active={!backdrop}>
                  false
                  </Button>
                <Button
                  onClick={() => changeBackDrop('static')}
                  color="primary"
                  active={backdrop === 'static'}>
                  static
                  </Button>
              </ButtonGroup>
            </CardHeader>
            <CardBody>
              <p>Backdrop state: {`${modalBackdrop}`}</p>
              <Button onClick={() => { changeModalBackDrop(!modalBackdrop) }}>Launch Modal</Button>
              <Modal
                isOpen={modalBackdrop}
                toggle={changeModalBackDrop}
                backdrop={modalBackdrop}>
                <ModalHeader toggle={changeModalBackDrop}>
                  Modal title
                  </ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                  </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => changeModalBackDrop(true)}>
                    Do Something
                    </Button>{' '}
                  <Button color="secondary" onClick={() => changeModalBackDrop(false)}>
                    Cancel
                    </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>

        <Col md="12" sm="12" xs="12">
          <Card>
            <CardHeader>Nested</CardHeader>
            <CardBody>
              <Button color="danger" onClick={() => changeModalNestedParent(true)}>
                Launch Modal
                </Button>
              <Modal
                isOpen={modalNestedParent}
                toggle={changeModalNestedParent}
                className={props.className}>
                <ModalHeader toggle={changeModalNestedParent}>
                  Modal title
                  </ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                    <br />
                  <Button color="success" onClick={() => changeModalNested(true)}>
                    Show Nested Model
                    </Button>
                  <Modal
                    isOpen={modalNested}
                    toggle={changeModalNested}>
                    <ModalHeader>Nested Modal title</ModalHeader>
                    <ModalBody>Stuff and things</ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={() => changeModalNested(true)}>
                        Done
                        </Button>{' '}
                      <Button
                        color="secondary"
                        onClick={() => changeModalNestedParent(true)}>
                        All Done
                        </Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => changeModalNested(true)}>
                    Do Something
                    </Button>{' '}
                  <Button
                    color="secondary"
                    onClick={() => changeModalNested(false)}>
                    Cancel
                    </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
}

export default ModalPage;
