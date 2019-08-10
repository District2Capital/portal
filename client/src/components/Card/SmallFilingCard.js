import React, { useState, useEffect } from 'react';
import { Badge, Card, CardText, Col, Row, Button, CardBody, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
        if (!filingLists.length) {
            await axios.get(`/api/lists/getFilingLists/?title=${title}`, config).then(res => {
                updateFilingLists(res.data);
            });
        }
    }

    useEffect(() => {
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

    const toggleAddToList = () => {
        changeAddToListOpen(!addToListOpen);
    }

    const addToList = async (listname) => {
        var filingItem = {
            'fileLink': fileLink,
            'badgeColor': badgeColor,
            'formType': formType,
            'title': title,
            'filingDate': filingDate
        };
        var params = {
            "x-auth-token": getJwt(),
            filingItem: filingItem,
            ListName: listname
        };
        await axios.post(`/api/lists/addFilingToList`, params).then(res => {
            var index = filingLists.indexOf(listname);
            filingLists.splice(index, 1);
            updateFilingLists(filingLists);
        });
    }

    const entityName = title.slice(title.indexOf("-") + 2, title.indexOf("("));
    return (
        <Card className="m-2 flex-row">
            <CardBody>
                <CardTitle><Badge className="mr-1" color={badgeColor}>{formType}</Badge>{entityName}</CardTitle>
                <CardText>{filingDate}</CardText>
            </CardBody>
            <Col>
                <Row style={{ width: "max-content" }}>
                    {!saved ? (<Button style={{ height: "fit-content" }} className="m-2" color="success" outline onClick={() => saveFiling()}>Save</Button>) : (<Button style={{ height: "fit-content" }} className="m-2" outline color="danger" onClick={() => unsaveFiling()}>UnSave</Button>)}
                    <div className="m-1"><ViewModalLogic saved={saved} unsaveFiling={unsaveFiling} saveFiling={saveFiling} badgeColor={badgeColor} fileLink={fileLink} formType={formType} filingDate={filingDate} title={title} /></div>
                </Row>
                <div style={{ margin: "auto 0" }}>
                    <Dropdown className="p-2" style={{ width: "fit-content", margin: "0 auto" }} isOpen={addToListOpen} toggle={toggleAddToList}>
                        <DropdownToggle outline className="w-120" style={{ boxShadow: "none" }} caret>Add To List</DropdownToggle>
                        <DropdownMenu>
                            {filingLists.map((listname, index) => {
                                return (<DropdownItem key={index} onClick={() => addToList(listname)}>{listname}</DropdownItem>);
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Col>
        </Card>
    );
}

export default SmallFilingCard;