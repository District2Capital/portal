import React, { Component } from 'react';
import {
    Badge,
    Card,
    CardText,
    Button,
    CardBody,
    CardTitle
} from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import ViewModalLogic from '../ViewModalLogic';

class SmallFilingCard extends Component {
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
        const { badgeColor, fileLink, formType, title, filingDate } = this.props;
        const { saved } = this.state;
        const entityName = title.slice(title.indexOf("-") + 2, title.indexOf("("));
        return (
            <Card className="m-2 flex-row">
                <CardBody>
                    <CardTitle><Badge className="mr-1" color={badgeColor}>{formType}</Badge>{entityName}</CardTitle>
                    <CardText>{filingDate}</CardText>
                </CardBody>
                <div style={{ margin: "auto 0" }}>
                    <div style={{ width: "min-content", textAlign: "center" }}>
                        {!saved ? (<Button className="m-2" color="success" outline onClick={() => this.saveFiling()}>Save</Button>) : (<Button className="m-2" outline color="danger" onClick={() => this.unsaveFiling()}>UnSave</Button>)}
                        <ViewModalLogic saved={saved} unsaveFiling={this.unsaveFiling} saveFiling={this.saveFiling} badgeColor={badgeColor} fileLink={fileLink} formType={formType} filingDate={filingDate} title={title} />
                    </div>
                </div>
            </Card>
        );
    }
}

export default SmallFilingCard;