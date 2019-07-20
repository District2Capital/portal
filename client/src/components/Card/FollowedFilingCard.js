import React, { Component } from 'react';
import {
    Badge,
    Card,
    Button,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import ViewModalLogic from '../ViewModalLogic';

class FollowedFilingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false
        }
    }

    async componentDidMount() {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        if (!this.state.saved) {
            await axios.get(`/api/filingdoc/verifyFilingSaved/?link=${this.props.fileLink}`, config).then(res => {
                this.setState({
                    saved: res.data.savedFiling
                });
            });
        }
    }

    saveFiling = async () => {
        var params = {
            "x-auth-token": getJwt(),
            fileLink: this.props.fileLink,
            badgeColor: this.props.badgeColor,
            formType: this.props.formType,
            title: this.props.title,
            filingDate: this.props.filingDate
        };
        await axios.post(`api/users/addSavedFiling`, params).then(res => {
            if (res.status === 200) {
                this.setState({ saved: true });
            }
        });
    };

    unsaveFiling = async () => {
        var params = {
            "x-auth-token": getJwt(),
            fileLink: this.props.fileLink,
            badgeColor: this.props.badgeColor,
            formType: this.props.formType,
            title: this.props.title,
            filingDate: this.props.filingDate
        };
        await axios.post(`api/users/removeSavedFiling`, params).then(res => {
            if (res.status === 200) {
                this.setState({ saved: false });
            }
        });
    };

    render() {
        const { badgeColor, fileLink, formType, title, filingDate, companyName } = this.props;
        const { saved } = this.state;
        return (
            <Card style={{ margin: "5px", minWidth: "250px", minHeight: "300px" }} color='secondary'>
                <CardBody>
                    <Badge color={badgeColor}>{formType}</Badge>
                    <CardTitle className="text-light">{title}</CardTitle>
                </CardBody>
                <ListGroup flush>
                    {(companyName) ? (<ListGroupItem>{companyName}</ListGroupItem>) : ('')}
                    <ListGroupItem>Form Type: {formType}</ListGroupItem>
                    <ListGroupItem>Filing Date: {filingDate}</ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-center">
                        {!saved ? (<Button className="m-1" color="success" outline onClick={() => this.saveFiling()}>Save</Button>) : (<Button className="m-1" outline color="danger" onClick={() => this.unsaveFiling()}>UnSave</Button>)}
                        <ViewModalLogic saved={saved} unsaveFiling={this.unsaveFiling} saveFiling={this.saveFiling} badgeColor={badgeColor} fileLink={fileLink} formType={formType} filingDate={filingDate} companyName={companyName} title={title} />
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}

export default FollowedFilingCard;