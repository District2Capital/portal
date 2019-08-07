import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, Button, Badge, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import GlobalContext from '../../context/global-context';

const FormTypeCard = ({ FormType, BadgeColor }) => {
    const [saved, changeSaved] = useState(false);
    const [addToListOpen, changeAddToListOpen] = useState(false);
    const value = useContext(GlobalContext);

    useEffect(() => {
        async function fetchData() {
            var config = {
                params: { "x-auth-token": getJwt() }
            };
            if (!saved) {
                await axios.get(`/api/users/verifySavedFormType/?FormType=${FormType}`, config).then(res => {
                    changeSaved(res.data.savedFormType);
                });
            }
        }
        fetchData();
    }, []);

    const saveFormType = async () => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: FormType,
            BadgeColor: BadgeColor
        };
        await axios.post(`/api/users/addSavedFormType`, params).then(res => {
            if (res.status === 200) {
                changeSaved(true);
            }
        });
    };

    const unsaveFormType = async () => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: FormType,
            BadgeColor: BadgeColor
        };
        await axios.post(`/api/users/removeSavedFormType`, params).then(res => {
            if (res.status === 200) {
                changeSaved(false);
            }
        });
    };

    const toggleAddToList = () => {
        changeAddToListOpen(!addToListOpen);
    }

    const addToList = async (FormType, listname) => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: FormType,
            BadgeColor: BadgeColor,
            ListName: listname
        };
        await axios.post(`/api/lists/addFormTypeToList`, params).then(res => {
            if (res.status === 200) {
                changeSaved(false);
            }
        });
    }

    return (
        <Card className="m-2 flex-row" style={{ minWidth: "150px", height: "fit-content", width: "fit-content" }}>
            <CardBody className="p-2" style={{ margin: "auto 5px" }}><div><Badge className="mr-1" color={BadgeColor}>{FormType}</Badge></div></CardBody>
            <div style={{ margin: "auto 0" }}>
                <div style={{ width: "min-content", textAlign: "center" }}>
                    {!saved ? (<Button className="m-2" outline color="success" onClick={() => saveFormType()}>Follow</Button>) : (<Button className="m-2" color="danger" outline onClick={() => unsaveFormType()}>UnFollow</Button>)}
                    <Dropdown className="p-2" isOpen={addToListOpen} toggle={toggleAddToList}>
                        <DropdownToggle outline className="w-120" style={{ boxShadow: "none" }} caret>Add To List</DropdownToggle>
                        <DropdownMenu>
                            {value.lists.lists.map((listname, index) => {
                                return (<DropdownItem key={index} onClick={() => addToList(FormType, listname)}>{listname}</DropdownItem>);
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </Card>
    );
}

export default FormTypeCard;