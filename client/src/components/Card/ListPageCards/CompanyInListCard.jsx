import React from 'react';
import { Card, CardBody, Button, Badge } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

const CompanyInListCard = ({ company, listName, updateContent }) => {

    const removeFromList = async () => {
        var params = {
            "x-auth-token": getJwt(),
            Company: company,
            ListName: listName
        };
        await axios.post(`/api/lists/removeCompanyFromList`, params).then(res => {
            updateContent();
        });
    }

    return (
        <Card className="m-2 flex-row" style={{ minWidth: "min-content", height: "min-content", width: "fit-content" }}>
            <CardBody className="p-2" style={{ margin: "auto 5px" }}><div><Badge className="mr-1" color='light'>{company.location}</Badge>{company.companyName}</div></CardBody>
            <div style={{ margin: "auto 0" }}>
                <div style={{ width: "fit-content", textAlign: "center" }}>
                    <Button className="m-2" color="danger" outline onClick={() => removeFromList()}>Remove</Button>
                </div>
            </div>
        </Card>
    );
}

export default CompanyInListCard;