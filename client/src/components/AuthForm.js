import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import d2clogo from 'assets/logo.png';
import { login, getCurrentUser } from 'services/auth';
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import * as _ from 'lodash';

class AuthForm extends React.Component {

  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("username"),
    password: Joi.string()
      .required()
      .label("password")
  };

  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  validateProperty = (name, value) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = async event => {
    const { username, password } = this.state.data;
    if (_.isEmpty(this.state.errors)) {
      try {
        await login(username, password);
        if (_.isEmpty(getCurrentUser())) toast.warn('Credentials not found.', { className: 'rounded' });
        else {
          window.location = this.props.location ? this.props.location.state.from.pathname : "/";
        }
      }
      catch (e) {
        toast.error('Internal Error.', { className: 'rounded' });
        console.log('Login Failure:', e);
      }
    }
    else {
      toast.error('Please enter a valid Email and Password', { className: 'rounded' });
      console.log('Username or password does not meet requirements.');
    }
  };

  handleUsernameChange = (e) => {
    const errors = _.isEmpty(this.validateProperty('username', e.target.value)) ? {} : Object.assign({}, this.state.errors, this.validateProperty('username', e.target.value));
    const data = { ...this.state.data };
    data.username = e.target.value;
    this.setState({ data, errors: errors });
  }

  handlePasswordChange = (e) => {
    const errors = _.isEmpty(this.validateProperty('password', e.target.value)) ? {} : Object.assign({}, this.state.errors, this.validateProperty('password', e.target.value));
    const data = { ...this.state.data };
    data.password = e.target.value;
    this.setState({ data, errors: errors });
  }

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;

    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              className="rounded"
              style={{ width: 100, cursor: 'pointer' }}
              alt="logo"
              src={d2clogo}
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} onChange={this.handleUsernameChange} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} onChange={this.handlePasswordChange} />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
          </FormGroup>
        )}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="border-0"
          style={{ backgroundColor: '$primary' }}
          block
          onClick={this.handleSubmit}>
          Login
        </Button>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
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
