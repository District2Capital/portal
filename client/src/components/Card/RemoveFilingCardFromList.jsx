import React, { useState, useEffect } from 'react';
import { Badge, Card, Button, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import ViewModalLogic from '../ViewModalLogic';

const RemoveFilingCardFromList = ({ Filing, updateContent, listName }) => {
    const { formType, badgeColor, filingDate, title, fileLink } = Filing;
    const removeFromList = async () => {
        var params = {
            "x-auth-token": getJwt(),
            filingItem: Filing,
            ListName: listName
        };
        await axios.post(`/api/lists/removeFilingFromList`, params).then(res => {
            updateContent();
        });
    }

    return (
        <Card className="m-2" color='secondary' style={{ minWidth: "250px" }}>
            <CardBody>
                <Badge color={badgeColor}>{formType}</Badge>
                <CardTitle className="text-light">{title}</CardTitle>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>Form Type: {formType}</ListGroupItem>
                <ListGroupItem>Filing Date: {filingDate}</ListGroupItem>
                <ListGroupItem>
                    <div className="d-flex justify-content-center">
                        <Button className="m-2" color="danger" outline onClick={() => removeFromList()}>Remove</Button>
                        <ViewModalLogic badgeColor={badgeColor} fileLink={fileLink} formType={formType} filingDate={filingDate} title={title} />
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default RemoveFilingCardFromList;