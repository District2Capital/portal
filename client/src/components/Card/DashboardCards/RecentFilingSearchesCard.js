import React, { Component } from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import SmallRecentSearchCard from 'components/Card/SmallRecentSearchCard';
import { NavLink } from 'react-router-dom';

class RecentFilingSearchesCard extends Component {
    state = {
        data: [],
        SearchesCount: 5,
        defaultData: true
    }

    componentDidMount() {
        this.getRecentSearches();
    }

    getRecentSearches = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentSearchData', config).then(res => {
            let searches = res.data;
            if (searches && searches.data.length) {
                this.setState({
                    data: searches.data.splice(0, this.state.SearchesCount),
                    defaultData: false
                });
            }
            else {
                this.setState({ defaultData: false });
            }
        })
            .catch(error => {
                console.log('ERROR. Could not get recent searches.');
            });
    };

    render() {
        const { data, defaultData } = this.state;
        var counter = 0;
        if (defaultData) {
            return (
                <Card className="m-2" style={{ width: 270 }}>
                    <CardHeader>Recent Filing Searches</CardHeader>
                    <div className="d-flex m-3 align-items-center flex-grow-1 justify-content-center">
                        <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
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
                    {data.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }) => (
                        <SmallRecentSearchCard key={counter++} companySearchString={companySearchString} cikSearchString={cikSearchString} formTypeSearchString={formTypeSearchString} dateSearched={dateSearched} />
                        //<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />
                    ))}
                    <NavLink to="/searchhistory" style={{ width: "-webkit-fill-available" }} className="btn m-2 btn-outline-secondary">View All</NavLink>
                </Col>
            </Card>
        );
    }
}

export default RecentFilingSearchesCard;