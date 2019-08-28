import React from 'react';
import { Card, CardHeader, Button, Row, Col, CardBody } from 'reactstrap';

const MajorChangesCard = () => {

    const deleteAccount = () => {
        console.log('delete account called.');
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