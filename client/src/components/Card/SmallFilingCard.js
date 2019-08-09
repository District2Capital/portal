import React, { useState, useEffect } from 'react';
import { Badge, Card, CardText, Button, CardBody, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import ViewModalLogic from '../ViewModalLogic';

const SmallFilingCard = ({ badgeColor, fileLink, formType, title, filingDate }) => {
    const [saved, changeSaved] = useState(false);
    const [addToListOpen, changeAddToListOpen] = useState(false);
    const [filingLists, updateFilingLists] = useState([]);

    const fetchData = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        if (!saved) {
            await axios.get(`/api/filingdoc/verifyFilingSaved/?link=${fileLink}`, config).then(res => {
                changeSaved(res.data.savedFiling);
            });
        }
    }

    useEffect(() => fetchData(), []);

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
            if (res.status === 200) changeSaved(true);
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
            if (res.status === 200) changeSaved(false);
        });
    };

    const entityName = title.slice(title.indexOf("-") + 2, title.indexOf("("));
    return (
        <Card className="m-2 flex-row">
            <CardBody>
                <CardTitle><Badge className="mr-1" color={badgeColor}>{formType}</Badge>{entityName}</CardTitle>
                <CardText>{filingDate}</CardText>
            </CardBody>
            <div style={{ margin: "auto 0" }}>
                <div style={{ width: "min-content", textAlign: "center" }}>
                    {!saved ? (<Button className="m-2" color="success" outline onClick={() => saveFiling()}>Save</Button>) : (<Button className="m-2" outline color="danger" onClick={() => unsaveFiling()}>UnSave</Button>)}
                    <ViewModalLogic saved={saved} unsaveFiling={unsaveFiling} saveFiling={saveFiling} badgeColor={badgeColor} fileLink={fileLink} formType={formType} filingDate={filingDate} title={title} />
                </div>
            </div>
        </Card>
    );
}

export default SmallFilingCard;