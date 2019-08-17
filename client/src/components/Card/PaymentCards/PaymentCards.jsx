import React, { useState, useEffect } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Row, Card, CardHeader, CardBody } from 'reactstrap';
import StripeCheckout from './StripeCheckout';
import axios from 'axios';
//import Cards from 'react-credit-cards';

const PaymentCards = ({ ...props }) => {
    const [selectedPlan, changeSelectedPlan] = useState('basic_package');
    const [plans, changePlans] = useState([]);
    let publicTestKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY_TEST;
    // ! Get Stripe plans from stripe api 

    useEffect(() => {
        getPlans();
    }, []);

    const getPlans = async () => {
        await axios.get('/api/users/plans').then(res => {
            if (res.status === 200) {
                console.log(res.data.data);
                changePlans(res.data.data);
            }
        });
    }

    let stripeProvider = selectedPlan !== 'basic_package' ? (<StripeProvider apiKey={publicTestKey ? publicTestKey : null}>
        <Elements>
            <StripeCheckout {...props} />
        </Elements>
    </StripeProvider>) : ('');

    return (
        <React.Fragment>
            <Row className="justify-content-center">
                {plans.map((plan, index) => {
                    return (
                        <Card className="m-2">
                            <CardHeader>{plan.nickname} Package</CardHeader>
                            <CardBody>
                                <p>{plan.amount}/{plan.interval}</p>
                                <p>Package Includes:</p>
                                <ul>
                                    <li>Contents...</li>
                                </ul>
                            </CardBody>
                        </Card>
                    );
                })}
            </Row>
            {stripeProvider}
        </React.Fragment>
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