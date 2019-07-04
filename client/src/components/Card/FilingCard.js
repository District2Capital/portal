import React, { Component } from 'react';
import {
    Badge,
    Card,
    Button,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

class FilingCard extends Component {
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
            // Save queried filing as a recent search
            var params = {
                "x-auth-token": getJwt(),
                fileLink: this.props.fileLink,
                badgeColor: this.props.badgeColor,
                formType: this.props.formType,
                title: this.props.title,
                filingDate: this.props.filingDate
            };
            await axios.post(`api/users/updateViewedFilings`, params);
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
        return (
            <Card color='secondary'>
                <CardBody>
                    <Badge color={badgeColor}>{formType}</Badge>
                    <CardTitle className="text-light">{title}</CardTitle>
                </CardBody>
                <ListGroup flush>
                    <ListGroupItem>Form Type: {formType}</ListGroupItem>
                    <ListGroupItem>Filing Date: {filingDate}</ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-center">
                        <Button outline onClick={() => this.toggleModal()}>View Filing</Button>
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
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}

export default FilingCard;