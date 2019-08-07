import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, Button, Badge } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import GlobalContext from '../../context/global-context';

const CompanyCard = ({ company, searchHandler, searchCard }) => {
    const [saved, changeSaved] = useState(false);

    useEffect(() => {
        async function getSaved() {
            var config = {
                params: { "x-auth-token": getJwt() }
            };
            if (!saved) {
                await axios.get(`/api/users/verifySavedCompany/?company=${company.companyName}`, config).then(res => {
                    if (res.data.savedCompany) {
                        changeSaved(true);
                    }
                });
            }
        }
        getSaved();
    }, []);

    const saveCompany = async () => {
        var params = {
            "x-auth-token": getJwt(),
            cik: company.cik,
            companyName: company.companyName,
            companyLocation: company.location
        };
        await axios.post(`api/users/addSavedCompany`, params).then(res => {
            if (res.status === 200) {
                changeSaved(true);
            }
        });
    };

    const unsaveCompany = async () => {
        var params = {
            "x-auth-token": getJwt(),
            cik: company.cik,
            companyName: company.companyName,
            companyLocation: company.location
        };
        await axios.post(`api/users/removeSavedCompany`, params).then(res => {
            if (res.status === 200) {
                changeSaved(true);
            }
        });
    };

    return (
        <Card className="m-2 flex-row" style={{ minWidth: "150px", height: "min-content", width: "fit-content" }}>
            <CardBody className="p-2" style={{ margin: "auto 5px" }}><div><Badge className="mr-1" color='light'>{company.location}</Badge>{company.companyName}</div></CardBody>
            <div style={{ margin: "auto 0" }}>
                <div style={{ width: "min-content", textAlign: "center" }}>
                    {searchCard ? <Button className="m-2" outline onClick={() => searchHandler('', '', company.cik)}>Show Filings</Button> : ""}
                    {!saved ? (<Button className="m-2" color="success" outline onClick={() => saveCompany()}>Follow</Button>) : (<Button className="m-2" color="danger" outline onClick={() => unsaveCompany()}>UnFollow</Button>)}
                </div>
            </div>
        </Card>
    );
}

export default CompanyCard;