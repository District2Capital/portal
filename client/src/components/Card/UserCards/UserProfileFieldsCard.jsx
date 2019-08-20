import React, { useState, useContext, useEffect } from 'react';
import { Input, Label, Form, Button, Col, Row } from 'reactstrap';
import GlobalContext from 'context/global-context';
import * as _ from 'lodash';

const UserProfileFieldsCard = () => {
    const [name, changeName] = useState("");
    const [namePlaceholder, changeNamePlaceholder] = useState("");
    const [email, changeEmail] = useState("");
    const [emailPlaceholder, changeEmailPlaceholder] = useState("");
    const [password, changePassword] = useState("");
    const { userInfo } = useContext(GlobalContext);

    useEffect(() => {
        if (!_.isEmpty(userInfo)) {
            console.dir(userInfo);
            let { name, email } = userInfo;
            changeNamePlaceholder(name);
            changeEmailPlaceholder(email);
        }
    }, [userInfo]);

    const handleSubmit = (e) => {
        let code = e ? e.key : 'Enter';
        if (code === 'Enter') {
            // * post to changeUserProfile
            console.info('updating user info...');
        }
    }

    return (
        <Col>
            <Form>
                <Row>
                    <Col className="my-2" md={3}>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="name">Name</Label>
                    </Col>
                    <Col className="my-2" md={9}>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            className="ml-4"
                            type="name"
                            name="name"
                            value={name}
                            placeholder={namePlaceholder}
                            onChange={(e) => changeName(e.target.value)}
                            onKeyPress={(e) => handleSubmit(e)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2" md={3}>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="email">Email</Label>
                    </Col>
                    <Col className="my-2" md={9}>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            className="ml-4"
                            type="email"
                            name="email"
                            value={email}
                            placeholder={emailPlaceholder}
                            onChange={(e) => changeEmail(e.target.value)}
                            onKeyPress={(e) => handleSubmit(e)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2" md={3}>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="email">Password</Label>
                    </Col>
                    <Col className="my-2" md={9}>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            className="ml-4"
                            type="password"
                            name="password"
                            value={password}
                            placeholder="your password"
                            onChange={(e) => changePassword(e.target.value)}
                            onKeyPress={(e) => handleSubmit(e)}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col className="my-2" md={10}>
                        <Button outline className="float-right" onClick={() => handleSubmit()}>Update Profile</Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    );
}

export default UserProfileFieldsCard;