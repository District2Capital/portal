import React, { Component } from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import axios from 'axios';
import SmallFilingCard from './SmallFilingCard';
import { getJwt } from 'services/auth';

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
        })
            .catch(error => {
                console.log('ERROR. Could not get recently viewed filings.');
            });
    };

    render() {
        const { data, defaultData } = this.state;
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
        return (
            <Card className="m-2" style={{ maxWidth: 350 }}>
                <CardHeader>Recently Viewed Filings</CardHeader>
                <Col className="justify-content-center">
                    {data.map(({ title, formType, filingDate, htmlLink, badgeColor }) => (<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />))}
                </Col>
            </Card>
        );
    }
}

export default RecentViewedFilingsCard;