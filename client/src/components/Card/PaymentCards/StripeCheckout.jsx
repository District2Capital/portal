import React, { useEffect } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const StripeCheckout = ({ ...props }) => {
    const { createToken, changeToken } = props;
    useEffect(() => {
        if (createToken) {
            let token = newToken();
            changeToken(token);
        }
    }, [createToken]);

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