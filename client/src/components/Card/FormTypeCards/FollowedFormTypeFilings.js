import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { FollowedFilingCard } from 'components/Card';

class FollowedFormTypeFilings extends Component {

    constructor(props) {
        super(props);
        this._isMounted = false;
    }

    state = {
        FormTypeFilings: [],
        noData: true
    }

    async componentDidMount() {
        this._isMounted = true;
        await this.getDataFromDb();
        setInterval(await this.getDataFromDb, 10000);
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.interval);
    }

    getDataFromDb = async () => {
        if (this._isMounted) {
            var FormTypeFilings = [];
            var config = {
                params: { "x-auth-token": getJwt() }
            };

            // * Fetch Filings for each FormType in the past 24 hours
            await axios.get('/api/users/followedFormTypeFilings', config).then(res => {
                if (res.data) {
                    FormTypeFilings = res.data.data;
                }
            });

            // * Set State Filing Arrays
            this.setState({
                FormTypeFilings: FormTypeFilings,
                noData: false
            });
        }
    };

    render() {
        let { FormTypeFilings, noData } = this.state;
        return (
            <Card className="m-2">
                <CardHeader>Followed FormType Filings</CardHeader>
                <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                    <Row style={{ overflowX: "scroll" }} className="flex-row flex-nowrap d-flex flex-grow-1">
                        {(!FormTypeFilings.length && noData) ? (
                            <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                                <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (<div></div>)}
                        {(!noData && !FormTypeFilings.length) ? (
                            <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                                <h3>No Recent Followed Filings</h3>
                            </div>
                        ) : (<div></div>)}
                        {FormTypeFilings.map((Filing, index) => {
                            return (<FollowedFilingCard key={index} companyName={''} badgeColor={Filing.badgeColor} formType={Filing.formType} title={Filing.title} filingDate={Filing.filingDate} fileLink={Filing.fileLink} apiRoute={'sec'} />);
                        })}
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

export default FollowedFormTypeFilings;