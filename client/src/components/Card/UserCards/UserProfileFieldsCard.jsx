import React, { useState, useContext, useEffect } from 'react';
import { Input, Label, Form, Button, Col, Row } from 'reactstrap';
import GlobalContext from 'context/global-context';
import * as _ from 'lodash';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { toast } from 'react-toastify';
import Joi from "joi-browser";

const UserProfileFieldsCard = () => {
    const [name, changeName] = useState("");
    const [initialNameHover, changeInitialNameHover] = useState(false);
    const [namePlaceholder, changeNamePlaceholder] = useState("");
    const [email, changeEmail] = useState("");
    const [initialEmailHover, changeInitialEmailHover] = useState(false);
    const [emailPlaceholder, changeEmailPlaceholder] = useState("");
    const [password, changePassword] = useState("");
    const [initialPasswordHover, changeInitialPasswordHover] = useState(false);
    const [loadingModal, changeLoadingModal] = useState(false);

    const value = useContext(GlobalContext);
    const { userInfo } = value;
    const schema = {
        name: Joi.string()
            .min(4)
            .max(30)
            .label("name"),
        email: Joi.string()
            .email()
            .max(30)
            .label("email"),
        password: Joi.string()
            .alphanum()
            .min(7)
            .max(16)
            .label("password")
    };

    const validateProperty = (name, value) => {
        const obj = { [name]: value };
        const newschema = { [name]: schema[name] };
        const { error } = Joi.validate(obj, newschema);
        return error ? error.details[0].message : null;
    };

    useEffect(() => {
        if (!_.isEmpty(userInfo)) {
            let { name, email } = userInfo;
            changeNamePlaceholder(name);
            changeEmailPlaceholder(email);
        }
    }, [userInfo]);

    const handleSubmit = async (e) => {
        let code = e ? e.key : 'Enter';
        if (code === 'Enter') {
            // * post to changeUserProfile
            let nameErrors = _.isEmpty(validateProperty('name', name)) || !name.length ? {} : Object.assign({}, validateProperty('name', name));
            let emailErrors = _.isEmpty(validateProperty('email', email)) || !email.length ? {} : Object.assign({}, validateProperty('email', email));
            let passwordErrors = _.isEmpty(validateProperty('password', password)) || !password.length ? {} : Object.assign({}, validateProperty('password', password));
            if (_.isEmpty(Object.assign({}, nameErrors, emailErrors, passwordErrors))) {
                let params = {
                    "x-auth-token": getJwt(),
                    name: name,
                    email: email,
                    password: password
                };
                await axios.post('/api/users/updateProfile', params).then(async res => {
                    if (res.status === 200) {
                        if (email.length) {
                            toast.warn('Confirmation email sent.', { className: 'rounded' });
                        }
                        changeName('');
                        changeEmail('');
                        changePassword('');
                        let config = {
                            params: { "x-auth-token": getJwt() }
                        };
                        await axios.get('/api/users/me', config).then(res => {
                            value['getUserInfo'](res.data);
                        });
                        toast.success('User info updated.', { className: 'rounded' });
                    } else {
                        toast.error('User info failed to update.', { className: 'rounded' });
                    }
                });
            }
        }
    }

    return (
        <Col md={7}>
            <Form>
                <Row>
                    <Col className="my-2" md={4}>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="name">Name</Label>
                    </Col>
                    <Col className="my-2" md={8}>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            className={"ml-4" + (_.isEmpty(validateProperty('name', name)) ? "form-control is-valid" : (initialNameHover && name.length && "form-control is-invalid"))}
                            onFocus={() => changeInitialNameHover(true)}
                            type="name"
                            name="name"
                            value={name}
                            placeholder={namePlaceholder}
                            onChange={(e) => changeName(e.target.value)}
                            onKeyPress={(e) => handleSubmit(e)}
                        />
                        {_.isEmpty(validateProperty('name', name)) ? (<div className="valid-feedback">Looks good!</div>) : (<div className="invalid-feedback">Not Sufficient.</div>)}
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2" md={4}>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="email">Email</Label>
                    </Col>
                    <Col className="my-2" md={8}>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            className={"ml-4" + (_.isEmpty(validateProperty('email', email)) ? "form-control is-valid" : (initialEmailHover && email.length && "form-control is-invalid"))}
                            onFocus={() => changeInitialEmailHover(true)}
                            type="email"
                            name="email"
                            value={email}
                            placeholder={emailPlaceholder}
                            onChange={(e) => changeEmail(e.target.value)}
                            onKeyPress={(e) => handleSubmit(e)}
                        />
                        {_.isEmpty(validateProperty('email', email)) ? (<div className="valid-feedback">Looks good!</div>) : (<div className="invalid-feedback">Not Sufficient.</div>)}
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2" md={4}>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="email">Password</Label>
                    </Col>
                    <Col className="my-2" md={8}>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            className={"ml-4" + (_.isEmpty(validateProperty('password', password)) ? "form-control is-valid" : (initialPasswordHover && password.length && "form-control is-invalid"))}
                            onFocus={() => changeInitialPasswordHover(true)}
                            type="password"
                            name="password"
                            value={password}
                            placeholder="your password"
                            onChange={(e) => changePassword(e.target.value)}
                            onKeyPress={(e) => handleSubmit(e)}
                        />
                        {_.isEmpty(validateProperty('password', password)) ? (<div className="valid-feedback">Looks good!</div>) : (<div className="invalid-feedback">Not Sufficient.</div>)}
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col className="my-2" md={10}>
                        <Button outline className="float-right" onClick={() => handleSubmit()}>Save Profile</Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    );
}

export default UserProfileFieldsCard;