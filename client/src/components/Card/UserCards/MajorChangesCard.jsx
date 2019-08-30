import React, { useContext } from 'react';
import GlobalContext from 'context/global-context';
import { Card, CardHeader, Button, Row, Col, CardBody } from 'reactstrap';
import { getJwt, logout } from 'services/auth';
import axios from 'axios';

const MajorChangesCard = () => {

    const deleteAccount = async () => {
        let params = {
            "x-auth-token": getJwt()
        };
        await axios.post('/api/users/deleteUser', params).then(res => {
            if (res.status === 200) {
                logout();
            }
        });
    }

    return (
        <Card className="m-3">
            <CardHeader>Account</CardHeader>
            <CardBody>
                <Col className="text-center m-auto">
                    <Button color="danger" className="m-auto" outline onClick={() => deleteAccount()}>Clear All Data</Button>
                    <Button color="danger" outline onClick={() => deleteAccount()}>Delete Account</Button>
                </Col>
            </CardBody>
        </Card>
    );
}

export default MajorChangesCard;