import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { SmallRecentSearchCard } from 'components/Card';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner';

const RecentFilingSearchesCard = () => {
    const [data, updateData] = useState([]);
    const [searchesCount, updateSearchesCount] = useState(5);
    const [defaultData, changeDefaultData] = useState(true);

    useEffect(() => {
        getRecentSearches();
    }, []);

    const getRecentSearches = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentSearchData', config).then(res => {
            let searches = res.data;
            if (searches && searches.data.length) {
                updateData(searches.data.splice(0, searchesCount));
            }
            changeDefaultData(false);
        })
            .catch(error => {
                console.log('ERROR. Could not get recent searches.');
            });
    };

    if (defaultData) {
        return (
            <Card className="m-2" style={{ width: 270 }}>
                <CardHeader>Recent Filing Searches</CardHeader>
                <LoadingSpinner />
            </Card>);
    }
    if (!data.length) {
        return (
            <Card className="m-2" style={{ maxWidth: 350 }}>
                <CardHeader>Recent Filing Searches</CardHeader>
                <Col className="justify-content-center">
                    <div style={{ marginTop: "20px" }} className="d-flex flex-row align-items-center flex-grow-1 justify-content-center">
                        <Col><div><h3 style={{ textAlign: "center" }}>No Recent Searches</h3></div>
                            <div style={{ width: "fit-content", margin: "auto" }}><NavLink to="/search" className="btn m-2 btn-outline-info">Search For Filings</NavLink></div>
                        </Col>
                    </div>
                </Col>
            </Card>
        );
    }
    return (
        <Card className="m-2" style={{ width: 270, maxHeight: "min-content" }}>
            <CardHeader>Recent Filing Searches</CardHeader>
            <Col className="justify-content-center">
                {data.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }, index) => (
                    <SmallRecentSearchCard key={index} companySearchString={companySearchString} cikSearchString={cikSearchString} formTypeSearchString={formTypeSearchString} dateSearched={dateSearched} />
                    //<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />
                ))}
                <NavLink to="/searchhistory" style={{ width: "-webkit-fill-available" }} className="btn m-2 btn-outline-secondary">View All</NavLink>
            </Col>
        </Card>
    );
}

export default RecentFilingSearchesCard;