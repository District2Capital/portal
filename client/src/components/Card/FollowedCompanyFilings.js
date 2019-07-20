import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import FollowedFilingCard from 'components/Card/FollowedFilingCard';

class FollowedCompanyFilings extends Component {
    state = {
        companyFilings: [],
        noData: true
    }

    async componentDidMount() {
        await this.getDataFromDb();
        setInterval(await this.getDataFromDb, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getDataFromDb = async () => {
        var companyFilings = [];
        var config = {
            params: { "x-auth-token": getJwt() }
        };

        // * Fetch Filings for each company in the past 24 hours
        await axios.get('/api/users/followedCompanyFilings', config).then(res => {
            if (res.data) {
                companyFilings = res.data.data;
            }
        });

        // * Set State Filing Arrays
        this.setState({
            companyFilings: companyFilings,
            noData: false
        });
    };

    render() {
        let { companyFilings, noData } = this.state;
        return (
            <Card className="m-2">
                <CardHeader>Followed Company Filings</CardHeader>
                <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                    <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
                        {(!companyFilings.length && noData) ? (
                            <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                                <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (<div></div>)}
                        {(!noData && !companyFilings.length) ? (
                            <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                                <h3>No Filings of Followed Companies</h3>
                            </div>
                        ) : (<div></div>)}
                        {companyFilings.map((Filing, index) => {
                            return (<FollowedFilingCard key={index} companyName={Filing.companyName} badgeColor={Filing.badgeColor} formType={Filing.formType} title={Filing.title} filingDate={Filing.filingDate} fileLink={Filing.fileLink} apiRoute={'sec'} />);
                        })}
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

export default FollowedCompanyFilings;