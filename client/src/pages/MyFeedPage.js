import React from 'react';
import { Badge, Card, CardHeader, CardBody, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { Filings } from '../components/Card';
import { filings } from '../config';
import { getJwt } from 'services/auth';
class MyFeedPage extends React.Component {

    state = {
        time: Date.now(),
        companyFilings: [],
        FormTypeFilings: [],
        filter: []
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
            companyFilings = res.data;
        });

        // * Fetch Filings for each FormType in the past 24 hours
        await axios.get('/api/users/followedFormTypeFilings', config).then(res => {
            FormTypeFilings = res.data;
        });

        // * Set State Filing Arrays
        this.setState({
            companyFilings: companyFilings,
            FormTypeFilings: FormTypeFilings
        });
    };

    render() {
        let { companyFilings, FormTypeFilings } = this.state;
        return (
            <div className="px-3 h-100 d-flex overflow-hidden flex-column">
                <div className="py-3 d-flex flex-row">
                    <h1 className="mr-auto">My Feed</h1>
                </div>
                <Card className="m-2">
                    <CardHeader>Followed Company Filings</CardHeader>
                    <CardBody>
                        <Row className="flex-row flex-nowrap d-flex justify-content-center flex-grow-1">
                            {companyFilings.map((Filing, index) => {
                                return ('')
                            })}
                        </Row>
                    </CardBody>
                </Card>
                <Card className="m-2">
                    <CardHeader>Followed FormType Filings</CardHeader>
                    <CardBody>
                        <Row className="flex-row flex-nowrap d-flex justify-content-center flex-grow-1">
                            {FormTypeFilings.map((Filing, index) => {
                                return ('')
                            })}
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default MyFeedPage;