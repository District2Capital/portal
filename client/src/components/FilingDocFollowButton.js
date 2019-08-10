import React, { Component } from 'react';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { Button } from 'reactstrap';

class FilingDocFollowButton extends Component {
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
        if (saved) {
            return (<Button style={{ height: "min-content" }} className="m-2 p-1" outline onClick={() => this.unsaveFormType()}>UnFollow</Button>);
        }
        return (<Button style={{ height: "min-content" }} className="m-2 p-1" outline onClick={() => this.saveFormType()}>Follow</Button>);
    }
}

export default FilingDocFollowButton;