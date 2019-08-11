import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import { BasicProfileCard } from 'components/Card';

const SettingsPage = () => {
    const [pictures, changePictures] = useState([]);
    const [uploading, changeUploading] = useState(false);

    const onChange = e => {
        e.preventDefault();
        const files = Array.from(e.target.files)
        changeUploading(true);

        const formData = new FormData();

        files.forEach((file, i) => {
            formData.append(i, file);
        })
    }

    const onDrop = (picture) => {
        changePictures(pictures.concat(picture));
    }

    return (<React.Fragment>
        <BasicProfileCard />
    </React.Fragment>);
}

export default SettingsPage;