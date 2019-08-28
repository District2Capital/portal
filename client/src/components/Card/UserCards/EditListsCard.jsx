import React from 'react';
import { Card, CardHeader, Button, Row, Col, CardBody } from 'reactstrap';

const EditListsCard = () => {

    const deleteAccount = () => {
        console.log('delete account called.');
    }

    return (
        <Card className="m-3">
            <CardHeader>Edit Lists</CardHeader>
            <CardBody>
                <Col className="text-center m-auto" md={5}>
                    <Button warning outline onClick={() => deleteAccount()}>Delete Account</Button>
                </Col>
            </CardBody>
        </Card>
    );
}

export default EditListsCard;