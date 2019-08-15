import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import d2clogo from 'assets/logo.png';
import { login, signUp, getCurrentUser, getJwt } from 'services/auth';
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import * as _ from 'lodash';
import { SocialAuth } from 'components/Auth';
import axios from 'axios';

const AuthForm = ({ nameLabel, nameInputProps, usernameLabel, usernameInputProps, passwordLabel, passwordInputProps, confirmPasswordLabel, confirmPasswordInputProps, children, onLogoClick }) => {
  const [signInUsername, changeSignInUsername] = useState("");
  const [signUpUsername, changeSignUpUsername] = useState("");
  const [signInPassword, changeSignInPassword] = useState("");
  const [signUpPassword, changeSignUpPassword] = useState("");
  const [initialSignUpNameHover, changeInitialSignUpNameHover] = useState(false);
  const [initialSignUpUsernameHover, changeInitialSignUpUsernameHover] = useState(false);
  const [initialSignUpPasswordHover, changeInitialSignUpPasswordHover] = useState(false);
  const [initialSignInUsernameHover, changeInitialSignInUsernameHover] = useState(false);
  const [initialSignInPasswordHover, changeInitialSignInPasswordHover] = useState(false);
  const [signUpName, changeSignUpName] = useState("");
  const [errors, changeErrors] = useState({});
  const [activeTab, changeActiveTab] = useState('1');

  const schema = {
    name: Joi.string()
      .min(4)
      .max(30)
      .required()
      .label("name"),
    username: Joi.string()
      .email()
      .max(30)
      .required()
      .label("username"),
    password: Joi.string()
      .required()
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

  const handleSubmitSignIn = async event => {
    const usernameErrors = _.isEmpty(validateProperty('username', signInUsername)) ? {} : Object.assign({}, errors, validateProperty('username', signInUsername));
    const passwordErrors = _.isEmpty(validateProperty('password', signInPassword)) ? {} : Object.assign({}, errors, validateProperty('password', signInPassword));
    changeErrors(Object.assign({}, usernameErrors, passwordErrors));
    if (_.isEmpty(errors)) {
      try {
        await login(signInUsername, signInPassword);
        if (_.isEmpty(getCurrentUser())) toast.warn('Credentials not found.', { className: 'rounded' });
        else {
          console.log('Logged in. Redirecting...');
          window.location = "/";
          //window.location = this.props.location ? this.props.location.state.from.pathname : "/";
        }
      }
      catch (e) {
        toast.error('Incorrect Email Or Password.', { className: 'rounded' });
        console.log('Login Failure:', e);
      }
    }
    else {
      toast.error('Please enter a valid Email and Password', { className: 'rounded' });
      console.log('Username or password does not meet requirements.');
    }
  };

  const handleSubmitSignUp = async event => {
    const nameErrors = _.isEmpty(validateProperty('name', signUpName)) ? {} : Object.assign({}, errors, validateProperty('name', signUpName));
    const usernameErrors = _.isEmpty(validateProperty('username', signUpUsername)) ? {} : Object.assign({}, errors, validateProperty('username', signUpUsername));
    const passwordErrors = _.isEmpty(validateProperty('password', signUpPassword)) ? {} : Object.assign({}, errors, validateProperty('password', signUpPassword));
    changeErrors(Object.assign({}, nameErrors, usernameErrors, passwordErrors));
    if (_.isEmpty(errors)) {
      try {
        await signUp(signUpName, signUpUsername, signUpPassword);
        if (_.isEmpty(getCurrentUser())) toast.warn('Could Not Create New User.', { className: 'rounded' });
        else {
          console.log('Logged in. Redirecting...');
          window.location = "/";
          //window.location = this.props.location ? this.props.location.state.from.pathname : "/";
        }
      }
      catch (e) {
        toast.error('Incorrect Email Or Password.', { className: 'rounded' });
        console.log('Login Failure:', e);
      }
    }
    else {
      toast.error('Please enter a valid Email and Password', { className: 'rounded' });
      console.log('Username or password does not meet requirements.');
    }
  };

  const handleSignInEnterClicked = async (e) => {
    var code = e.key;
    if (code === 'Enter') {
      e.preventDefault();
      await handleSubmitSignIn();
    }
  }

  const handleSignUpEnterClicked = async (e) => {
    var code = e.key;
    if (code === 'Enter') {
      e.preventDefault();
      await handleSubmitSignUp();
    }
  }

  const passwordReset = async () => {
    changeInitialSignInUsernameHover(true);
    var params = {
      "email": signInUsername
    };
    if (_.isEmpty(validateProperty('username', signInUsername))) {
      await axios.post('api/auth/forgotPassword', params).then(res => {
        if (res.data === 'email not in db') {
          toast.error('Email not found in database.', { className: 'rounded' });
        }
        else if (res.data === 'recovery email sent') {
          toast.success('Recovery email sent successfully.', { className: 'rounded' });
          changeSignInUsername("");
          changeSignInPassword("");
        }
      });
    } else {
      toast.error('Please enter an email.', { className: 'rounded' });
    }
  }

  if (getCurrentUser()) return <Redirect to="/" />;
  return (
    <Form onSubmit={activeTab === '1' ? handleSubmitSignIn : handleSubmitSignUp}>
      <div className="text-center pb-4">
        <img
          className="rounded"
          style={{ width: 100, cursor: 'pointer' }}
          alt="logo"
          src={d2clogo}
          onClick={onLogoClick}
        />
      </div>
      <Nav tabs>
        <NavItem>
          <NavLink style={{ color: "black" }} className={activeTab === '1' ? 'active' : ''} onClick={() => changeActiveTab('1')}>
            Sign In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "black" }} className={activeTab === '2' ? 'active' : ''} onClick={() => changeActiveTab('2')}>
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className="m-3">
          <FormGroup>
            <Label for={usernameLabel}>{usernameLabel}</Label>
            <Input className={_.isEmpty(validateProperty('username', signInUsername)) ? "form-control is-valid" : (initialSignInUsernameHover && "form-control is-invalid")} onMouseEnter={() => changeInitialSignInUsernameHover(true)} required {...usernameInputProps} onKeyPress={(e) => handleSignInEnterClicked(e)} onChange={(e) => changeSignInUsername(e.target.value)} />
            {_.isEmpty(validateProperty('username', signInUsername)) ? (
              <div class="valid-feedback">Looks good!</div>
            ) : (
                <div class="invalid-feedback">Please provide a valid email.</div>
              )}
          </FormGroup>
          <FormGroup>
            <Label for={passwordLabel}>{passwordLabel}</Label>
            <Input className={_.isEmpty(validateProperty('password', signInPassword)) ? "form-control is-valid" : (initialSignInPasswordHover && "form-control is-invalid")} onMouseEnter={() => changeInitialSignInPasswordHover(true)} required {...passwordInputProps} onKeyPress={(e) => handleSignInEnterClicked(e)} onChange={(e) => changeSignInPassword(e.target.value)} />
            {_.isEmpty(validateProperty('password', signInPassword)) ? (
              <div class="valid-feedback">Looks good!</div>
            ) : (
                <div class="invalid-feedback">Please provide a valid email.</div>
              )}
          </FormGroup>
          <div className="my-3">
            <a style={{ color: "blue" }} onClick={() => passwordReset()}>Forgot Password</a>
          </div>
          <hr />
          <Button
            size="md"
            outline
            block
            onClick={() => handleSubmitSignIn()}>
            Login
        </Button>
        </TabPane>
        <TabPane tabId="2" className="m-3">
          <FormGroup>
            <Label for={nameLabel}>{nameLabel}</Label>
            <Input className={_.isEmpty(validateProperty('name', signUpName)) ? "form-control is-valid" : (initialSignUpNameHover && "form-control is-invalid")} onMouseEnter={() => changeInitialSignUpNameHover(true)} id={nameLabel} required {...nameInputProps} onKeyPress={(e) => handleSignUpEnterClicked(e)} onChange={(e) => changeSignUpName(e.target.value)} />
            {_.isEmpty(validateProperty('name', signUpName)) ? (
              <div class="valid-feedback">Looks good!</div>
            ) : (
                <div class="invalid-feedback">Please provide a valid name.</div>
              )}
          </FormGroup>
          <FormGroup>
            <Label for={usernameLabel}>{usernameLabel}</Label>
            <Input className={_.isEmpty(validateProperty('username', signUpUsername)) ? "form-control is-valid" : (initialSignUpUsernameHover && "form-control is-invalid")} onMouseEnter={() => changeInitialSignUpUsernameHover(true)} id={usernameLabel} required {...usernameInputProps} onKeyPress={(e) => handleSignUpEnterClicked(e)} onChange={(e) => changeSignUpUsername(e.target.value)} />
            {_.isEmpty(validateProperty('username', signUpUsername)) ? (
              <div class="valid-feedback">Looks good!</div>
            ) : (
                <div class="invalid-feedback">Please provide a valid email.</div>
              )}
          </FormGroup>
          <FormGroup>
            <Label for={passwordLabel}>{passwordLabel}</Label>
            <Input className={_.isEmpty(validateProperty('password', signUpPassword)) ? "form-control is-valid" : (initialSignUpPasswordHover && "form-control is-invalid")} onMouseEnter={() => changeInitialSignUpPasswordHover(true)} id={passwordLabel} required {...passwordInputProps} onKeyPress={(e) => handleSignUpEnterClicked(e)} onChange={(e) => changeSignUpPassword(e.target.value)} />
            {_.isEmpty(validateProperty('password', signUpPassword)) ? (
              <div class="valid-feedback">Looks good!</div>
            ) : (
                <div class="invalid-feedback">Please provide a valid password. 7-16 letters/numbers only.</div>
              )}
          </FormGroup>
          <hr />
          <Button
            size="md"
            outline
            block
            onClick={() => handleSubmitSignUp()}>
            Sign Up
        </Button>
        </TabPane>
      </TabContent>
      <SocialAuth />
      {children}
    </Form >
  );
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  nameLabel: PropTypes.string,
  nameInputProps: PropTypes.object,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  nameLabel: 'Name',
  nameInputProps: {
    type: 'text',
    placeholder: 'Full Name'
  },
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => { },
};

export default AuthForm;
