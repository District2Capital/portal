import React, { useContext, useState } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Input, Button, Label } from 'reactstrap';
import GlobalContext from '../../context/global-context';
import { toast } from 'react-toastify';

const CreateListCard = () => {
    const [inputState, changeInput] = useState('');
    const value = useContext(GlobalContext);

    const handleEnterClicked = () => {
        var regex = new RegExp(value.lists.lists.join("|"), "i");
        if (value && value.lists.lists.length) {
            if (regex.test(inputState.toLowerCase())) {
                toast.error(`List with name "${inputState}" already exists!`, { autoClose: 3000 });
            }
        }
    }

    return (
        <Card className="m-2">
            <CardHeader>Create New List</CardHeader>
            <CardBody style={{ margin: "0.5rem", padding: "0px" }}>
                <Row>
                    <Col className="my-2" sm={10}>
                        <Input
                            type="list"
                            name="list"
                            placeholder="List Name"
                            onChange={(e) => changeInput(e.target.value)}
                            onKeyPress={() => handleEnterClicked()}
                        />
                    </Col>
                    <Col className="my-2" sm={2}>
                        <Button outline className="float-right" onClick={() => handleEnterClicked()}>Create</Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default CreateListCard;