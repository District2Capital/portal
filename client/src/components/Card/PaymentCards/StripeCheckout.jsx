import React, { useEffect } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const StripeCheckout = ({ ...props }) => {
    const { createToken, changeToken } = props;
    useEffect(() => {
        console.log('user Effect in StripeCheckout called.');
        if (createToken) {
            let token = newToken();
            console.log('new token:');
            console.dir(token);
            changeToken(token);
        }
    }, [createToken]);

    // ! create new token when user submits form
    const newToken = async () => {
        let { token } = await props.stripe.createToken({ name: "Name" });
        return token;
    }
    // const submit = async () => {
    //     let { token } = await props.stripe.createToken({ name: "Name" });
    //     let response = await fetch("/charge", {
    //         method: "POST",
    //         headers: { "Content-Type": "text/plain" },
    //         body: token.id
    //     });

    //     if (response.ok) console.log("Purchase Complete!");
    // }

    return (<div className="checkout">
        <CardElement />
    </div>);
}

export default StripeCheckout;