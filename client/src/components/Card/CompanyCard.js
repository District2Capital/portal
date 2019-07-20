import React, { Component } from 'react';
import { Card, CardBody, Button, Badge } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

class CompanyCard extends Component {
    state = {
        saved: false
    };

    async componentDidMount() {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        if (!this.state.saved) {
            await axios.get(`/api/users/verifySavedCompany/?company=${this.props.company.companyName}`, config).then(res => {
                this.setState({
                    saved: res.data.savedCompany
                });
            });
        }
    }

    saveCompany = async () => {
        var params = {
            "x-auth-token": getJwt(),
            cik: this.props.company.cik,
            companyName: this.props.company.companyName,
            companyLocation: this.props.company.location
        };
        await axios.post(`api/users/addSavedCompany`, params).then(res => {
            if (res.status === 200) {
                this.setState({ saved: true });
            }
        });
    };

    unsaveCompany = async () => {
        var params = {
            "x-auth-token": getJwt(),
            cik: this.props.company.cik,
            companyName: this.props.company.companyName,
            companyLocation: this.props.company.location
        };
        await axios.post(`api/users/removeSavedCompany`, params).then(res => {
            if (res.status === 200) {
                this.setState({ saved: false });
            }
        });
    };

    render() {
        const { saved } = this.state;
        const { company, searchHandler, searchCard } = this.props;
        return (
            <Card className="m-2 flex-row" style={{ minWidth: "150px", height: "min-content", width: "fit-content" }}>
                <CardBody className="p-2" style={{ margin: "auto 5px" }}><div><Badge className="mr-1" color='light'>{company.location}</Badge>{company.companyName}</div></CardBody>
                <div style={{ margin: "auto 0" }}>
                    <div style={{ width: "min-content", textAlign: "center" }}>
                        {searchCard ? <Button className="m-2" outline onClick={() => searchHandler('', '', company.cik)}>Show Filings</Button> : ""}
                        {!saved ? (<Button className="m-2" color="success" outline onClick={() => this.saveCompany()}>Follow</Button>) : (<Button className="m-2" color="danger" outline onClick={() => this.unsaveCompany()}>UnFollow</Button>)}
                    </div>
                </div>
            </Card>
        );
    }
}

export default CompanyCard;