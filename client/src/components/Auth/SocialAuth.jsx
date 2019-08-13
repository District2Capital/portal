import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';
import { login, loginWithJwt, getCurrentUser } from 'services/auth';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

const SocialAuth = () => {

    const googleResponse = async (response) => {
        if (response && response.profileObj) {
            const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
            const options = {
                method: 'POST',
                body: tokenBlob,
                mode: 'cors',
                cache: 'default'
            };
            await axios.post('/api/auth/google', options).then((res) => {
                const token = res.headers.get('x-auth-token');
                loginWithJwt(token);
                if (!token) toast.warn('Credentials not found.', { className: 'rounded' });
                else window.location = "/";
            });
        }
    };

    return (
        <GoogleLogin
            className="my-3 w-100 mx-auto justify-content-center"
            buttonText="Authenticate With Google"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={googleResponse}
            onFailure={googleResponse} />
    );
}

export default SocialAuth;