import React from 'react';
import { BasicProfileCard, AccountPlanCard, MajorChangesCard, EditListsCard } from 'components/Card';
import { Row, Col } from 'reactstrap';

const SettingsPage = () => {
    // const [pictures, changePictures] = useState([]);

    // const onChange = e => {
    //     e.preventDefault();
    //     const files = Array.from(e.target.files)

    //     const formData = new FormData();

    //     files.forEach((file, i) => {
    //         formData.append(i, file);
    //     })
    // }

    // const onDrop = (picture) => {
    //     changePictures(pictures.concat(picture));
    // }

    return (<React.Fragment>
        <BasicProfileCard />
        <AccountPlanCard />
        <Row>
            <Col md={6}>
                <MajorChangesCard />
            </Col>
            <Col md={6}>
                <EditListsCard />
            </Col>
        </Row>
    </React.Fragment>);
}

export default SettingsPage;