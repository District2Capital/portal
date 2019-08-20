import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { FollowedFilingCard } from 'components/Card';

const FollowedFormTypeFilings = () => {
    const [FormTypeFilings, changeFormTypeFilings] = useState([]);
    const [defaultData, changeDefaultData] = useState(true);

    useEffect(() => {
        getDataFromDb();
        const interval = setInterval(getDataFromDb(), 10000);
        return () => clearInterval(interval);
    }, []);

    const getDataFromDb = async () => {
        var FormTypeFilings = [];
        var config = {
            params: { "x-auth-token": getJwt() }
        };

        // * Fetch Filings for each FormType in the past 24 hours
        await axios.get('/api/users/followedFormTypeFilings', config).then(res => {
            if (res.data) {
                changeFormTypeFilings(res.data.data);
            }
        });
        changeDefaultData(false);
    };

    return (
        <Card className="m-2">
            <CardHeader>Followed FormType Filings</CardHeader>
            <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                <Row style={{ overflowX: "scroll" }} className="flex-row flex-nowrap d-flex flex-grow-1">
                    {(!FormTypeFilings.length && defaultData) ? (
                        <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                            <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (<div></div>)}
                    {(!defaultData && !FormTypeFilings.length) ? (
                        <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                            <h3>No Recent Followed Filings</h3>
                        </div>
                    ) : (<div></div>)}
                    {FormTypeFilings.map((Filing, index) => {
                        return (<FollowedFilingCard key={index} companyName={''} badgeColor={Filing.badgeColor} formType={Filing.formType} title={Filing.title} filingDate={Filing.filingDate} fileLink={Filing.fileLink} apiRoute={'sec'} />);
                    })}
                </Row>
            </CardBody>
        </Card>
    );
}

export default FollowedFormTypeFilings;