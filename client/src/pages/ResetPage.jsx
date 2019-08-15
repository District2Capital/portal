import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import d2clogo from 'assets/logo.png';
import Joi from "joi-browser";
import axios from 'axios';
import * as _ from 'lodash';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';

const ResetPage = ({ passwordLabel, confirmPasswordLabel, confirmPasswordInputProps, passwordInputProps }) => {
    const [password, changePassword] = useState("");
    const [confirmPassword, changeConfirmPassword] = useState("");
    const [initialPasswordHover, changeInitialPasswordHover] = useState(false);
    const [initialConfirmPasswordHover, changeInitialConfirmPasswordHover] = useState(false);
    const [passwordChanged, changePasswordChanged] = useState(false);
    const [errors, changeErrors] = useState({});
    const schema = {
        password: Joi.string()
            .alphanum()
            .required()
            .min(7)
            .max(16)
            .label("password"),
        confirmPassword: Joi.any()
            .valid(Joi.ref('password'))
            .required()
            .label('confirmPassword')
    };

    const submitNewPassword = () => {
        const passwordErrors = _.isEmpty(validateProperty('password', password)) ? {} : Object.assign({}, errors, validateProperty('password', password));
        const confirmPasswordErrors = _.isEmpty(validateProperty('confirmPassword', confirmPassword)) ? {} : Object.assign({}, errors, validateProperty('confirmPassword', confirmPassword));
        changeErrors(Object.assign({}, passwordErrors, confirmPasswordErrors));
        if (_.isEmpty(errors) && _.isEmpty(passwordErrors) && _.isEmpty(confirmPasswordErrors)) {

        }
        else {
            toast.error('Password Errors. Please Try Again.', { className: 'rounded' });
        }
    }

    const validateProperty = (name, value) => {
        const obj = { [name]: value };
        const newschema = { [name]: schema[name] };
        const { error } = Joi.validate(obj, newschema);
        return error ? error.details[0].message : null;
    };

    if (passwordChanged) return <Redirect to="/" />;
    return (
        <div className="text-center" style={{ margin: "20px auto", width: "20rem" }}>
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
                    <Input {...passwordInputProps} className={_.isEmpty(validateProperty('password', password)) ? "form-control is-valid" : (initialPasswordHover && "form-control is-invalid")} onMouseEnter={() => changeInitialPasswordHover(true)} required onKeyPress={(e) => submitNewPassword(e)} onChange={(e) => changePassword(e.target.value)} />
                    {_.isEmpty(validateProperty('password', password)) ? (
                        <div class="valid-feedback">Looks good!</div>
                    ) : (
                            <div class="invalid-feedback">Please provide a valid password.</div>
                        )}
                </FormGroup>
                <FormGroup>
                    <Label for={confirmPasswordLabel}>Confirm Password</Label>
                    <Input {...confirmPasswordInputProps} className={_.isEmpty(validateProperty('confirmPassword', confirmPassword)) ? "form-control is-valid" : (initialConfirmPasswordHover && "form-control is-invalid")} onMouseEnter={() => changeInitialConfirmPasswordHover(true)} required onKeyPress={(e) => submitNewPassword(e)} onChange={(e) => changeConfirmPassword(e.target.value)} />
                    {_.isEmpty(validateProperty('confirmPassword', confirmPassword)) ? (
                        <div class="valid-feedback">Looks good!</div>
                    ) : (
                            <div class="invalid-feedback">Please enter the same password as above.</div>
                        )}
                </FormGroup>
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