import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

const SocialAuth = () => {
    const responseGoogle = (response) => {
        console.dir(response);
    }

    return (
        <GoogleLogin
            className="my-3 w-100 mx-auto justify-content-center"
            buttonText="Authenticate With Google"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={responseGoogle}
            onFailure={responseGoogle} />
    );
}

export default SocialAuth;