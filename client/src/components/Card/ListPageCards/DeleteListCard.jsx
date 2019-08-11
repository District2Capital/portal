import React, { useContext, useState } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Input, Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import GlobalContext from '../../../context/global-context';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getJwt } from '../../../services/auth';

const DeleteListCard = () => {
    const [modalToggleState, toggleModal] = useState(false);
    const [inputState, changeInput] = useState('');
    const value = useContext(GlobalContext);

    const deleteList = async (e) => {
        if (value && value.lists.lists.length) {
            // * Test if list with same name exists
            if (value.lists.lists.includes(inputState)) {
                var params = {
                    "x-auth-token": getJwt(),
                    'listName': inputState
                };
                toggleModal(false);
                await axios.post('api/lists/deleteList', params).then(res => {
                    if (res.status === 200) {
                        toast.warn(`List "${inputState}" Deleted!`, { autoClose: 3000 });
                        value.deleteList(inputState);
                    }
                });
            }
        }
    }

    const handleEnterClicked = (e) => {
        var code = e ? e.key : 'Enter';
        if (code === 'Enter') {
            toggleModal(true);
        }
    }

    return (
        <Card className="m-2">
            <CardHeader style={{ color: "red" }}>Delete List (case sensitive)</CardHeader>
            <CardBody style={{ margin: "0.5rem", padding: "0px" }}>
                <Row>
                    <Col className="my-2" sm={10}>
                        <Input
                            type="list"
                            name="list"
                            style={{ boxShadow: "0 0 0 #ff0000", borderColor: "rgb(199, 199, 199)" }}
                            placeholder="List Name"
                            onChange={(e) => changeInput(e.target.value)}
                            onKeyPress={(e) => handleEnterClicked(e)}
                        />
                    </Col>
                    <Col className="my-2" sm={2}>
                        <Button outline color="danger" className="float-right" onClick={() => handleEnterClicked()}>Delete</Button>
                        <Modal style={{ width: "fit-content", maxHeight: "160px" }} isOpen={modalToggleState} toggle={() => toggleModal(false)}>
                            <ModalHeader toggle={() => toggleModal(false)}>Are You Sure You Want To Delete "{inputState}"?</ModalHeader>
                            <ModalFooter>
                                <Button style={{ margin: "0 auto" }} outline color="danger" onClick={() => deleteList()}>Delete</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default DeleteListCard;