import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { BasicProfileCard } from 'components/Card';

class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
    }

    onChange = e => {
        e.preventDefault();
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })

        // fetch(`${API_URL}/image-upload`, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             uploading: false,
        //             images
        //         })
        //     })
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (<div>
            <BasicProfileCard />
        </div>);
    }
}

export default SettingsPage;