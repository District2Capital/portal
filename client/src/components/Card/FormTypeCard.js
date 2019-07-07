import React, { Component } from 'react';
import { Card, CardBody, Button, Badge } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

class FormTypeCard extends Component {
    state = {
        saved: false
    };

    async componentDidMount() {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        if (!this.state.saved) {
            await axios.get(`/api/users/verifySavedFormType/?FormType=${this.props.FormType}`, config).then(res => {
                this.setState({
                    saved: res.data.savedFormType
                });
            });
        }
    }

    saveFormType = async () => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: this.props.FormType,
            BadgeColor: this.props.BadgeColor
        };
        await axios.post(`api/users/addSavedFormType`, params).then(res => {
            if (res.status === 200) {
                this.setState({ saved: true });
            }
        });
    };

    unsaveFormType = async () => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: this.props.FormType,
            BadgeColor: this.props.BadgeColor
        };
        await axios.post(`api/users/removeSavedFormType`, params).then(res => {
            if (res.status === 200) {
                this.setState({ saved: false });
            }
        });
    };

    render() {
        const { saved } = this.state;
        const { FormType, BadgeColor } = this.props;
        return (
            <Card className="m-2 flex-row" style={{ minWidth: "150px", height: "min-content", width: "fit-content" }}>
                <CardBody className="p-2" style={{ margin: "auto 5px" }}><div><Badge className="mr-1" color={BadgeColor}>{FormType}</Badge></div></CardBody>
                <div style={{ margin: "auto 0" }}>
                    <div style={{ width: "min-content", textAlign: "center" }}>
                        {!saved ? <Button className="m-2" outline onClick={() => this.saveFormType()}>Follow</Button> : ""}
                        {saved ? <Button className="m-2" outline onClick={() => this.unsaveFormType()}>UnFollow</Button> : ""}
                    </div>
                </div>
            </Card>
        );
    }
}

export default FormTypeCard;