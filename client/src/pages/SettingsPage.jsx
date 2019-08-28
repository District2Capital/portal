import React from 'react';
import { BasicProfileCard, MajorChangesCard, EditListsCard } from 'components/Card';
import { Row } from 'reactstrap';

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
        <div className="d-flex">
            <MajorChangesCard />
            <EditListsCard />
        </div>
    </React.Fragment>);
}

export default SettingsPage;