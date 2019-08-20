import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import axios from 'axios';
import { SmallFilingCard } from 'components/Card';
import { getJwt } from 'services/auth';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner';

const RecentViewedFilingsCard = () => {
    const [data, updateData] = useState([]);
    const [filingCount, updateFilingCount] = useState(5);
    const [defaultData, changeDefaultData] = useState(true);

    useEffect(() => {
        getRecentlyViewedFilings();
    }, []);

    const getRecentlyViewedFilings = async () => {
        updateFilingCount(5);
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentlyViewedFilingData', config).then(res => {
            let filings = res.data;
            if (filings && filings.data.length) {
                updateData(filings.data.splice(0, filingCount));
            }
            changeDefaultData(false);
        })
            .catch(error => {
                console.log('ERROR. Could not get recently viewed filings.');
            });
    };

    if (defaultData) {
        return (
            <Card className="m-2" style={{ width: 350 }}>
                <CardHeader>Recently Viewed Filings</CardHeader>
                <LoadingSpinner />
            </Card>);
    }
    if (!data.length) {
        return (
            <Card className="m-2" style={{ maxWidth: 350 }}>
                <CardHeader>Recently Viewed Filings</CardHeader>
                <Col className="justify-content-center">
                    <div style={{ marginTop: "20px" }} className="d-flex flex-row align-items-center flex-grow-1 justify-content-center">
                        <Col><div><h3 style={{ textAlign: "center" }}>No Viewed Filings</h3></div>
                            <div style={{ width: "fit-content", margin: "auto" }}><NavLink to="/secfilings" className="btn m-2 btn-outline-secondary">View Recent Filings</NavLink></div>
                        </Col>
                    </div>
                </Col>
            </Card>
        );
    }
    return (
        <Card className="m-2" style={{ maxWidth: 350 }}>
            <CardHeader>Recently Viewed Filings</CardHeader>
            <Col className="justify-content-center">
                {data.map(({ title, formType, filingDate, fileLink, badgeColor }, index) => (<SmallFilingCard key={index} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} previouslySaved={true} />))}
                <NavLink to="/viewedfilings" style={{ width: "-webkit-fill-available" }} className="btn m-2 btn-outline-secondary">View All</NavLink>
            </Col>
        </Card>
    );
}

export default RecentViewedFilingsCard;