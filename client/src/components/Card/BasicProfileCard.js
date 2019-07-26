import React, { useRef } from 'react';
import { Card, CardHeader, CardText, CardBody, Button, Form, FormGroup, CustomInput, Label } from 'reactstrap';
import Avatar from '../../components/Avatar';
import defaultUser from 'assets/defaultUser.png';
import { useUserData } from 'components/hooks/useUserData';
import Files from 'react-files';

const BasicProfileCard = (props) => {

    const [defaultData, fetchedData] = useUserData('/api/user/getProfileImage', []);

    const inputFile = useRef(null);

    const fileChangedHandler = event => {
        event.preventDefault();
        console.log(event.target.files[0]);
    }

    const uploadHandler = () => {
        //console.log(this.state.selectedFile);
        inputFile.current.click();
    }

    let content = (
        <Card className="m-3">
            <CardHeader>Profile</CardHeader>
            <CardBody className="m-auto">
                <div className="m-auto d-block text-center">
                    {defaultData ? (<Avatar src={defaultUser} className="m-2" />) : (<Avatar src={fetchedData.profileImage} className="m-2" />)}
                </div>
                <Files
                    className='files-dropzone'
                    onChange={uploadHandler}
                    onError={uploadHandler}
                    accepts={['image/*']}
                    multiple={false}
                    maxFileSize={10000000}
                    minFileSize={0}
                    clickable={true}
                >
                    Drop files here or click to upload
        </Files>
            </CardBody>
        </Card >
    );

    return content;
};

export default BasicProfileCard;