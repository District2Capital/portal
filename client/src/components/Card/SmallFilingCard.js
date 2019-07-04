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
            link: null
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

    viewExternally = async () => {
        if (this.state.link) {
            window.open(this.state.link);
        }
    }

    render() {
        const { badgeColor, formType, title, filingDate } = this.props;
        const { modal, data } = this.state;
        const entityName = title.slice(title.indexOf("-") + 2, title.indexOf("("));
        return (
            <Card className="m-2 flex-row">
                <CardBody>
                    <CardTitle><Badge className="mr-1" color={badgeColor}>{formType}</Badge>{entityName}</CardTitle>
                    <CardText>{filingDate}</CardText>
                </CardBody>
                <div style={{ margin: "auto 0" }}>
                    <div>
                        <Button outline className="m-3" onClick={() => this.toggleModal()}>View</Button>
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