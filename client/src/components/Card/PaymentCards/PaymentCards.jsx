import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
//import Cards from 'react-credit-cards';
import StripeCheckout from './StripeCheckout';

const PaymentCards = ({ ...props }) => {
    let publicTestKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY_TEST;
    console.log(publicTestKey);
    return (
        <StripeProvider apiKey={publicTestKey ? publicTestKey : null}>
            <Elements>
                <StripeCheckout {...props} />
            </Elements>
        </StripeProvider>
    );
    // return ( 
    //     <Cards
    //     number={input.number.value}
    //     name={input.name.value}
    //     expiry={input.expiry.value}
    //     cvc={input.cvc.value}
    //     focused={state.focused}
    //   />
    //  );
}

export default PaymentCards;