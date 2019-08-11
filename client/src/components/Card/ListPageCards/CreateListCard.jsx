import React, { useContext, useState } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Input, Button } from 'reactstrap';
import GlobalContext from '../../../context/global-context';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getJwt } from '../../../services/auth';

const CreateListCard = () => {
    const [inputState, changeInput] = useState('');
    const value = useContext(GlobalContext);

    const handleEnterClicked = async (e) => {
        var code = e ? e.key : 'Enter';
        if (code === 'Enter') {
            if (value && value.lists.lists.length) {
                // * Test if list with same name does not already exist
                var regex = new RegExp(value.lists.lists.join("|"), "i");
                if (regex.test(inputState.toLowerCase())) {
                    toast.error(`List with name "${inputState}" already exists!`, { autoClose: 3000 });
                }
                else {
                    // * Post to /createNewList
                    var params = {
                        "x-auth-token": getJwt(),
                        'listName': inputState
                    };

                    await axios.post('api/lists/createNewList', params).then(res => {
                        if (res.status === 200) {
                            toast.success(`List "${inputState}" created!`, { autoClose: 3000 });
                            console.dir(value);
                            value.createNewList(inputState);
                        }
                    });
                }
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
                            onKeyPress={(e) => handleEnterClicked(e)}
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