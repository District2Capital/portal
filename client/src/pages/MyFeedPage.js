import React from 'react';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import FollowedFilingCard from 'components/Card/FollowedFilingCard';
class MyFeedPage extends React.Component {

    state = {
        time: Date.now(),
        companyFilings: [],
        FormTypeFilings: [],
        filter: [],
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
        var FormTypeFilings = [];
        var config = {
            params: { "x-auth-token": getJwt() }
        };

        // * Fetch Filings for each company in the past 24 hours
        await axios.get('/api/users/followedCompanyFilings', config).then(res => {
            if (res.data) {
                companyFilings = res.data.data;
            }
        });

        // * Fetch Filings for each FormType in the past 24 hours
        await axios.get('/api/users/followedFormTypeFilings', config).then(res => {
            if (res.data) {
                FormTypeFilings = res.data.data;
            }
        });

        // * Set State Filing Arrays
        this.setState({
            companyFilings: companyFilings,
            FormTypeFilings: FormTypeFilings,
            noData: false
        });
    };

    render() {
        let { companyFilings, FormTypeFilings, noData } = this.state;
        return (
            <div className="px-3 h-100 d-flex overflow-hidden flex-column">
                <Card className="m-2">
                    <CardHeader>Followed Company Filings</CardHeader>
                    <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                        <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
                            {(!companyFilings.length && noData) ? (
                                <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                                    <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (<div></div>)}
                            {(!noData && !companyFilings.length) ? (
                                <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                                    <h3>No Filings of Followed Companies</h3>
                                </div>
                            ) : (<div></div>)}
                            {companyFilings.map((Filing, index) => {
                                return (<FollowedFilingCard key={index} companyName={Filing.companyName} badgeColor={Filing.badgeColor} formType={Filing.formType} title={Filing.title} filingDate={Filing.filingDate} fileLink={Filing.fileLink} apiRoute={'sec'} />);
                            })}
                        </Row>
                    </CardBody>
                </Card>
                <Card className="m-2">
                    <CardHeader>Followed FormType Filings</CardHeader>
                    <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                        <Row style={{ overflowX: "scroll" }} className="flex-row flex-nowrap d-flex flex-grow-1">
                            {(!FormTypeFilings.length && noData) ? (
                                <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                                    <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (<div></div>)}
                            {(!noData && !FormTypeFilings.length) ? (
                                <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                                    <h3>No Recent Followed Filings</h3>
                                </div>
                            ) : (<div></div>)}
                            {FormTypeFilings.map((Filing, index) => {
                                return (<FollowedFilingCard key={index} companyName={''} badgeColor={Filing.badgeColor} formType={Filing.formType} title={Filing.title} filingDate={Filing.filingDate} fileLink={Filing.fileLink} apiRoute={'sec'} />);
                            })}
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default MyFeedPage;