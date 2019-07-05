import React, { Component } from 'react';
import {
    Badge,
    Card,
    CardText,
    Button,
    CardBody,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

class SmallFilingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: null,
            link: null,
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

    toggleModal = async () => {
        if (!this.state.modal) {
            // Query api route to get filing data
            await axios.get(`api/filingdoc/getData/?link=${this.props.fileLink}`).then(async res => {
                this.setState({
                    modal: !this.state.modal,
                    data: res.data.html,
                    link: res.data.link
                });
            });
            // Save queried filing as a recent search if not previously saved
            if (!this.props.previouslySaved) {
                var params = {
                    "x-auth-token": getJwt(),
                    htmlLink: this.props.fileLink
                };
                await axios.post(`api/users/updateViewedFilings`, params);
            }
        }
        else {
            this.setState({
                modal: !this.state.modal
            });
        }
    };

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

    viewExternally = async () => {
        if (this.state.link) {
            window.open(this.state.link);
        }
    }

    render() {
        const { badgeColor, formType, title, filingDate } = this.props;
        const { modal, data, saved } = this.state;
        const entityName = title.slice(title.indexOf("-") + 2, title.indexOf("("));
        return (
            <Card className="m-2 flex-row">
                <CardBody>
                    <CardTitle><Badge className="mr-1" color={badgeColor}>{formType}</Badge>{entityName}</CardTitle>
                    <CardText>{filingDate}</CardText>
                </CardBody>
                <div style={{ margin: "auto 0" }}>
                    <div style={{ width: "min-content", textAlign: "center" }}>
                        {!saved ? <Button className="m-2" outline onClick={() => this.saveFiling()}>Save</Button> : ""}
                        {saved ? <Button className="m-2" outline onClick={() => this.unsaveFiling()}>UnSave</Button> : ""}
                        <Button outline className="m-2" onClick={() => this.toggleModal()}>View</Button>
                        <Modal
                            isOpen={modal}
                            toggle={this.toggleModal}
                            className={this.props.className}
                            style={{ maxWidth: '80%', margin: "1.7rem auto" }}>
                            <ModalHeader toggle={this.toggleModal}>{title}</ModalHeader>
                            <ModalBody style={{ overflowY: "scroll" }}>{data !== null ? <div dangerouslySetInnerHTML={{ __html: data }} style={{ maxHeight: "80%", overflowY: "scroll" }}></div> : <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                                <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>}
                            </ModalBody>
                            <ModalFooter>
                                {!saved ? <Button outline onClick={() => this.saveFiling()}>Save</Button> : ""}
                                {saved ? <Button outline onClick={() => this.unsaveFiling()}>UnSave</Button> : ""}
                                <Button outline color="primary" onClick={() => this.viewExternally()}>
                                    View In Browser
                                    </Button>{' '}
                                <Button outline color="secondary" onClick={this.toggleModal}>
                                    Close
                                    </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </Card>
        );
    }
}

export default SmallFilingCard;