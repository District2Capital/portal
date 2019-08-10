import React, { Component } from 'react';
import FilingViewModalBody from './Card/FilingCards/FilingViewModalBody';
import axios from 'axios';
import { getJwt } from 'services/auth';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

class ViewModalLogic extends Component {
    state = {
        modal: false,
        data: null,
        link: null
    }

    viewExternally = async () => {
        if (this.state.link) {
            window.open(this.props.fileLink);
        }
    }

    toggleModal = async () => {
        if (!this.state.modal) {
            // Query api route to get filing data
            await axios.get(`api/filingdoc/getData/?link=${this.props.fileLink}`).then(async res => {
                this.setState({
                    modal: !this.state.modal,
                    data: res.data.htmlArray,
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

    render() {
        const { title, unsaveFiling, saveFiling, saved } = this.props;
        const { modal, data, link } = this.state;

        return (
            <div>
                <Button className="m-1" outline onClick={() => this.toggleModal()}>View</Button>
                <Modal
                    isOpen={modal}
                    toggle={this.toggleModal}
                    className={this.props.className}
                    style={{ maxWidth: '80%', margin: "1.7rem auto" }}>
                    <ModalHeader toggle={this.toggleModal}>{title}</ModalHeader>
                    <ModalBody style={{ overflowY: "scroll" }}>
                        {/* Html Slider Component */}
                        <FilingViewModalBody data={data} link={link} />
                    </ModalBody>
                    <ModalFooter>
                        {!saved ? (<Button className="m-1" outline onClick={() => saveFiling()}>Save</Button>) : (<Button className="m-1" outline onClick={() => unsaveFiling()}>UnSave</Button>)}
                        <Button outline color="primary" onClick={() => this.viewExternally()}>
                            View All In Browser
                                </Button>{' '}
                        <Button outline color="secondary" onClick={this.toggleModal}>
                            Close
                                </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ViewModalLogic;