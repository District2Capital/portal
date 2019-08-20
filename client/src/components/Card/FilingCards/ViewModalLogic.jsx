import React, { useState } from 'react';
import { FilingViewModalBody } from 'components/Card';
import axios from 'axios';
import { getJwt } from 'services/auth';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

const ViewModalLogic = ({ fileLink, badgeColor, formType, filingDate, title, unsaveFiling, saveFiling, saved, ...props }) => {
    const [modal, changeModal] = useState(false);
    const [data, changeData] = useState(null);
    const [link, changeLink] = useState(null);

    const viewExternally = async () => {
        if (link) {
            window.open(fileLink);
        }
    }

    const toggleModal = async () => {
        if (!modal) {
            // Query api route to get filing data
            await axios.get(`api/filingdoc/getData/?link=${fileLink}`).then(async res => {
                changeModal(!modal);
                changeData(res.data.htmlArray);
                changeLink(res.data.link);
            });

            // Save queried filing as a recent search
            var params = {
                "x-auth-token": getJwt(),
                fileLink: fileLink,
                badgeColor: badgeColor,
                formType: formType,
                title: title,
                filingDate: filingDate
            };
            await axios.post(`api/users/updateViewedFilings`, params);
        }
        else {
            changeModal(!modal);
        }
    };

    return (
        <div>
            <Button className="m-1" outline onClick={() => toggleModal()}>View</Button>
            <Modal
                isOpen={modal}
                toggle={toggleModal}
                className={props.className}
                style={{ maxWidth: '80%', margin: "1.7rem auto" }}>
                <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
                <ModalBody style={{ overflowY: "scroll" }}>
                    {/* Html Slider Component */}
                    <FilingViewModalBody data={data} link={link} />
                </ModalBody>
                <ModalFooter>
                    {!saved ? (<Button className="m-1" outline onClick={() => saveFiling()}>Save</Button>) : (<Button className="m-1" outline onClick={() => unsaveFiling()}>UnSave</Button>)}
                    <Button outline color="primary" onClick={() => viewExternally()}>
                        View All
                                </Button>{' '}
                    <Button outline color="secondary" onClick={toggleModal}>
                        Close
                                </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ViewModalLogic;