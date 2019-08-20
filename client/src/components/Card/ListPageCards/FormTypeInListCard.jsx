import React from 'react';
import { Card, CardBody, Button, Badge } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

const FormTypeInListCard = ({ listName, updateContent, FormType, BadgeColor }) => {

    const removeFromList = async () => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: FormType,
            BadgeColor: BadgeColor,
            ListName: listName
        };
        await axios.post(`/api/lists/removeFormTypeFromList`, params).then(res => {
            updateContent();
        });
    }

    return (
        <Card className="m-2 flex-row" style={{ minWidth: "max-content", height: "fit-content", width: "fit-content" }}>
            <CardBody className="p-2" style={{ margin: "auto 5px" }}><div><Badge className="mr-1" color={BadgeColor}>{FormType}</Badge></div></CardBody>
            <div style={{ margin: "auto 0" }}>
                <div style={{ width: "min-content", textAlign: "center" }}>
                    <Button className="m-2" color="danger" outline onClick={() => removeFromList()}>Remove</Button>
                </div>
            </div>
        </Card>
    );
}

export default FormTypeInListCard;