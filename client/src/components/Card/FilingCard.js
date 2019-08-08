import React, { useState, useEffect } from 'react';
import { Badge, Card, Button, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import ViewModalLogic from '../ViewModalLogic';

const FilingCard = ({ badgeColor, fileLink, formType, title, filingDate }) => {
    const [saved, changeSaved] = useState(false);

    useEffect(() => {
        async function fetchData() {
            var config = {
                params: { "x-auth-token": getJwt() }
            };
            if (!saved) {
                await axios.get(`/api/filingdoc/verifyFilingSaved/?link=${fileLink}`, config).then(res => {
                    changeSaved(res.data.savedFiling);
                });
            }
        }
        fetchData();
    }, []);

    const saveFiling = async () => {
        var params = {
            "x-auth-token": getJwt(),
            fileLink: fileLink,
            badgeColor: badgeColor,
            formType: formType,
            title: title,
            filingDate: filingDate
        };
        await axios.post(`api/users/addSavedFiling`, params).then(res => {
            if (res.status === 200) {
                changeSaved(true);
            }
        });
    };

    const unsaveFiling = async () => {
        var params = {
            "x-auth-token": getJwt(),
            fileLink: fileLink,
            badgeColor: badgeColor,
            formType: formType,
            title: title,
            filingDate: filingDate
        };
        await axios.post(`api/users/removeSavedFiling`, params).then(res => {
            if (res.status === 200) {
                changeSaved(false);
            }
        });
    };

    return (
        <Card className="m-2" color='secondary' style={{ minWidth: "250px" }}>
            <CardBody>
                <Badge color={badgeColor}>{formType}</Badge>
                <CardTitle className="text-light">{title}</CardTitle>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>Form Type: {formType}</ListGroupItem>
                <ListGroupItem>Filing Date: {filingDate}</ListGroupItem>
                <ListGroupItem className="d-flex justify-content-center">
                    {!saved ? (<Button className="m-1" color="success" outline onClick={() => saveFiling()}>Save</Button>) : (<Button className="m-1" outline color="danger" onClick={() => unsaveFiling()}>UnSave</Button>)}
                    <ViewModalLogic saved={saved} unsaveFiling={unsaveFiling} saveFiling={saveFiling} badgeColor={badgeColor} fileLink={fileLink} formType={formType} filingDate={filingDate} title={title} />
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default FilingCard;