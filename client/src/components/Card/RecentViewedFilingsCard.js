import React, { Component } from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import axios from 'axios';
import SmallFilingCard from './SmallFilingCard';
import { getJwt } from 'services/auth';
import { NavLink } from 'react-router-dom';
class RecentViewedFilingsCard extends Component {
    state = {
        data: [],
        filingCount: 5,
        defaultData: true
    }

    componentDidMount() {
        this.getRecentlyViewedFilings();
    }

    getRecentlyViewedFilings = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentlyViewedFilingData', config).then(res => {
            let filings = res.data;
            if (filings && filings.data.length) {
                this.setState({
                    data: filings.data.splice(0, this.state.filingCount),
                    defaultData: false
                });
            }
            else {
                this.setState({ defaultData: false });
            }
        })
            .catch(error => {
                console.log('ERROR. Could not get recently viewed filings.');
            });
    };

    render() {
        const { data, defaultData } = this.state;
        var counter = 0;
        if (defaultData) {
            return (
                <Card className="m-2" style={{ width: 350 }}>
                    <CardHeader>Recently Viewed Filings</CardHeader>
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
                    {data.map(({ title, formType, filingDate, fileLink, badgeColor }) => (<SmallFilingCard key={counter++} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} previouslySaved={true} />))}
                    <NavLink to="/viewedfilings" style={{ width: "-webkit-fill-available" }} className="btn m-2 btn-outline-secondary">View All</NavLink>
                </Col>
            </Card>
        );
    }
}

export default RecentViewedFilingsCard;