import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Button, Modal, ModalBody } from 'reactstrap';
import d2clogo from 'assets/logo.png';
import Joi from "joi-browser";
import axios from 'axios';
import * as _ from 'lodash';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import LoadingSpinner from 'components/LoadingSpinner';

const ResetPage = ({ passwordLabel, confirmPasswordLabel, confirmPasswordInputProps, passwordInputProps, ...props }) => {
    const [password, changePassword] = useState("");
    const [confirmPassword, changeConfirmPassword] = useState("");
    const [initialPasswordHover, changeInitialPasswordHover] = useState(false);
    const [initialConfirmPasswordHover, changeInitialConfirmPasswordHover] = useState(false);
    const [passwordChanged, changePasswordChanged] = useState(false);
    const [loadingModal, changeLoadingModal] = useState(false);
    const [errors, changeErrors] = useState({});
    const schema = {
        password: Joi.string()
            .alphanum()
            .required()
            .min(7)
            .max(16)
            .label("password")
            .strict(),
        confirmPassword: Joi.any()
            .valid(Joi.ref("password"))
            .required()
            .label("confirmPassword")
            .strict()
    };

    const submitNewPassword = async (e) => {
        let code = e ? e.key : 'Enter';
        if (code === 'Enter') {
            const passwordErrors = _.isEmpty(validateProperty('password', password)) ? {} : Object.assign({}, errors, validateProperty('password', password));
            const confirmPasswordErrors = _.isEmpty(validateProperty('confirmPassword', confirmPassword)) ? {} : Object.assign({}, errors, validateProperty('confirmPassword', confirmPassword));
            changeErrors(Object.assign({}, passwordErrors, confirmPasswordErrors));
            if ((_.isEmpty(errors) && _.isEmpty(passwordErrors)) && _.isEmpty(confirmPasswordErrors)) {
                changeLoadingModal(true);
                let params = {
                    "resetPasswordToken": props.match.params.token,
                    "password": password
                };
                await axios.post('api/auth/changePassword', params).then(res => {
                    changeLoadingModal(false);
                    if (res.status === 200) {
                        localStorage.setItem(process.env.REACT_APP_API_LOGIN_TOKEN_NAME, res.headers['x-auth-token']);
                        changePasswordChanged(true);
                    }
                    changeInitialPasswordHover(false);
                    changeInitialConfirmPasswordHover(false);
                    changePassword("");
                    changeConfirmPassword("");
                });
            }
            else {
                toast.error('Password Errors. Please Try Again.', { className: 'rounded' });
            }
        }
    }

    const validateProperty = (name, value) => {
        if (name === 'confirmPassword') {
            if (_.isEmpty(validateProperty('password', password)) && password === confirmPassword) {
                return {}
            } else {
                return { 'error': 'error validating confirm password' }
            }
        }
        const obj = { [name]: value };
        const newschema = { [name]: schema[name] };
        const { error } = Joi.validate(obj, newschema);
        return error ? error.details[0].message : null;
    };

    if (passwordChanged) return <Redirect to="/" />;
    return (
        <div className="text-center" style={{ margin: "auto", width: "20rem" }}>
            <div className="text-center pb-4">
                <img
                    className="rounded"
                    style={{ width: 100, cursor: 'pointer' }}
                    alt="logo"
                    src={d2clogo}
                />
            </div>
            <h2>Reset Password</h2>
            <hr />
            <Form onSubmit={() => submitNewPassword()}>
                <FormGroup>
                    <Label for={passwordLabel}>Password</Label>
                    <Input value={password} {...passwordInputProps} className={_.isEmpty(validateProperty('password', password)) ? "form-control is-valid" : (initialPasswordHover && "form-control is-invalid")} onFocus={() => changeInitialPasswordHover(true)} required onKeyPress={(e) => submitNewPassword(e)} onChange={(e) => changePassword(e.target.value)} />
                    {_.isEmpty(validateProperty('password', password)) ? (
                        <div class="valid-feedback">Looks good!</div>
                    ) : (
                            <div class="invalid-feedback">Please provide a valid password.</div>
                        )}
                </FormGroup>
                <FormGroup>
                    <Label for={confirmPasswordLabel}>Confirm Password</Label>
                    <Input value={confirmPassword} {...confirmPasswordInputProps} className={_.isEmpty(validateProperty('confirmPassword', confirmPassword)) ? "form-control is-valid" : (initialConfirmPasswordHover && "form-control is-invalid")} onFocus={() => changeInitialConfirmPasswordHover(true)} required onKeyPress={(e) => submitNewPassword(e)} onChange={(e) => changeConfirmPassword(e.target.value)} />
                    {_.isEmpty(validateProperty('confirmPassword', confirmPassword)) ? (
                        <div class="valid-feedback">Looks good!</div>
                    ) : (
                            <div class="invalid-feedback">Please enter the same password as above.</div>
                        )}
                </FormGroup>
                <Modal id="userCardModal" style={{ height: "100%", margin: "auto", alignItems: "center", display: "flex" }} isOpen={loadingModal} toggle={changeLoadingModal}>
                    <ModalBody className="text-center" style={{ height: "fit-content" }}>
                        <LoadingSpinner style={{ width: "100%" }} />
                        <h3>Updating Password</h3>
                    </ModalBody>
                </Modal>
                <hr />
                <Button
                    size="md"
                    outline
                    block
                    onClick={() => submitNewPassword()}>
                    Update Password
        </Button>
            </Form>
        </div>
    );
}

ResetPage.propTypes = {
    passwordLabel: PropTypes.string,
    passwordInputProps: PropTypes.object,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordInputProps: PropTypes.object
};

ResetPage.defaultProps = {
    passwordLabel: 'Password',
    passwordInputProps: {
        type: 'password',
        placeholder: 'new password',
    },
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordInputProps: {
        type: 'password',
        placeholder: 'confirm new password',
    }
};

export default ResetPage;