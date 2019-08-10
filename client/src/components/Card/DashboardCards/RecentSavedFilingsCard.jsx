import React, { useState, useEffect } from 'react';
import { getJwt } from 'services/auth';
import axios from 'axios';
import { Card, CardHeader, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { SmallFilingCard } from 'components/Card';
import LoadingSpinner from '../../LoadingSpinner';

const RecentSavedFilingsCard = () => {
    const [data, updateData] = useState([]);
    const [filingCount, updateFilingCount] = useState(5);
    const [defaultData, changeDefaultData] = useState(true);

    useEffect(() => {
        getRecentlySavedFilings();
    }, []);

    const getRecentlySavedFilings = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentSavedFilings', config).then(res => {
            let filings = res.data;
            if (filings && filings.data.length) {
                updateData(filings.data.splice(0, filingCount));
            }
            changeDefaultData(false);
        })
            .catch(error => {
                console.log('ERROR. Could not get recent searches.');
            });
    };

    if (defaultData) {
        return (
            <Card className="m-2" style={{ width: 350 }}>
                <CardHeader>Recently Saved Filings</CardHeader>
                <LoadingSpinner />
            </Card>);
    }
    return (
        <Card className="m-2" style={{ width: 350, maxHeight: "min-content" }}>
            <CardHeader>Recently Saved Filings</CardHeader>
            <Col className="justify-content-center">
                {data.map(({ title, formType, filingDate, fileLink, badgeColor }, index) => (<SmallFilingCard key={index} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} previouslySaved={true} />))}
                <NavLink to="/savedfilings" style={{ width: "-webkit-fill-available" }} className="btn m-2 btn-outline-secondary">View All</NavLink>
            </Col>
        </Card>
    );
}

export default RecentSavedFilingsCard;