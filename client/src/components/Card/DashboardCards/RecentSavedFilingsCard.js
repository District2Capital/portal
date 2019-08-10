import React, { Component } from 'react';
import { getJwt } from 'services/auth';
import axios from 'axios';
import { Card, CardHeader, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { SmallFilingCard } from 'components/Card';

class RecentSavedFilingsCard extends Component {
    state = {
        data: [],
        filingsCount: 5,
        defaultData: true
    }

    componentDidMount() {
        this.getRecentSavedFilings();
    }

    getRecentSavedFilings = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentSavedFilings', config).then(res => {
            let filings = res.data;
            if (filings && filings.data.length) {
                this.setState({
                    data: filings.data.splice(0, this.state.filingsCount),
                    defaultData: false
                });
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
                <Card className="m-2" style={{ width: 350 }}>
                    <CardHeader>Recently Saved Filings</CardHeader>
                    <div className="d-flex m-3 align-items-center flex-grow-1 justify-content-center">
                        <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Card>);
        }
        return (
            <Card className="m-2" style={{ width: 350, maxHeight: "min-content" }}>
                <CardHeader>Recently Saved Filings</CardHeader>
                <Col className="justify-content-center">
                    {data.map(({ title, formType, filingDate, fileLink, badgeColor }) => (<SmallFilingCard key={counter++} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} previouslySaved={true} />))}
                    <NavLink to="/savedfilings" style={{ width: "-webkit-fill-available" }} className="btn m-2 btn-outline-secondary">View All</NavLink>
                </Col>
            </Card>
        );
    }
}

export default RecentSavedFilingsCard;