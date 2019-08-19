import React, { useEffect } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const StripeCheckout = ({ ...props }) => {
    const { createToken, changeToken, signUpName } = props;
    useEffect(() => {
        console.log('user Effect in StripeCheckout called.');
        if (createToken) {
            newToken().then(token => {
                console.log('new token:');
                console.dir(token);
                changeToken(token);
            });
        }
    }, [createToken]);

    const newToken = async () => {
        let token = await props.stripe.createToken({ name: signUpName });
        return token;
    }

    return (<div className="checkout">
        <CardElement />
    </div>);
}

export default injectStripe(StripeCheckout);