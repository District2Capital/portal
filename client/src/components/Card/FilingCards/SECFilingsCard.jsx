import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import LoadingSpinner from '../../LoadingSpinner';
import axios from 'axios';
import { getJwt } from 'services/auth';
import FilingCard from './FilingCard';

const SECFilingsCard = ({ listName, count, ...args }) => {
    let content;
    const [fetchedContent, updateContent] = useState([]);
    const [isLoading, changeLoading] = useState(false);

    const fetchRecentSECFilings = async () => {
        // Fetch filings array from database
        var config = {
            params: { "x-auth-token": getJwt(), "listName": listName }
        };
        await axios.get('/api/sec/getData', config).then(res => {
            updateContent(res.data);
            changeLoading(false);
        }).catch(err => {
            changeLoading(false);
            console.log(err);
        });
    };

    useEffect(() => {
        changeLoading(true);
        fetchRecentSECFilings();
    }, []);

    if (isLoading) {
        content = (<LoadingSpinner />);
    }
    else {
        if (fetchedContent.items) { content = fetchedContent.items.map(({ fileLink, filingDate, formType, title }) => (<FilingCard formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} />)); }
        else { content = (<h4 style={{ margin: "1rem auto", padding: "0.75rem" }}>Could not fetch SEC Filings</h4>); }
    }

    return (
        <Card className="m-2">
            <CardHeader>Recent SEC Filings</CardHeader>
            <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                <Row style={{ overflowX: "scroll" }} className="flex-row m-2 d-flex flex-nowrap flex-grow-1">
                    {content}
                </Row>
            </CardBody>
        </Card>
    );
}

export default SECFilingsCard;