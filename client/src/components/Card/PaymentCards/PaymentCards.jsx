import React, { useState, useEffect } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Row, Card, CardHeader, CardBody, Label } from 'reactstrap';
import StripeCheckout from './StripeCheckout';
import axios from 'axios';
//import Cards from 'react-credit-cards';

const PaymentCards = ({ noIntoText, selectedPlan, changeSelectedPlan, ...props }) => {
    const [plans, changePlans] = useState([]);
    let publicTestKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY_PUB;
    let classes = ['border-info thickBorder', 'border-secondary thickBorder', 'border-warning thickBorder'];

    useEffect(() => {
        getPlans();
    }, []);

    const getPlans = async () => {
        await axios.get('/api/users/plans').then(res => {
            if (res.status === 200) {
                changePlans(res.data);
            }
        });
    }

    let stripeProvider = selectedPlan !== 'basic_package' ? (
        <React.Fragment>
            <hr />
            <StripeProvider apiKey={publicTestKey ? publicTestKey : null}>
                <Elements>
                    <StripeCheckout {...props} />
                </Elements>
            </StripeProvider>
        </React.Fragment>
    ) : ('');

    return (
        <React.Fragment>
            {noIntoText ? '' : <Label>Select a plan(cancel anytime):</Label>}
            <Row className="justify-content-center">
                {plans.map((plan, index) => {
                    let classNames = plan.id === selectedPlan ? classes[index] : 'border';
                    return (
                        <Card id="cardshadow" style={{ minWidth: "280px", maxWidth: "280px" }} key={index} className={`m-2 col-sm ${classNames}`} onMouseEnter={() => { }} onClick={() => changeSelectedPlan(plan.id)}>
                            <CardHeader>{plan.nickname} Package</CardHeader>
                            <CardBody>
                                <p>${plan.amount / 100}/{plan.interval}</p>
                                <p>Package Includes:</p>
                                <ul>
                                    {Object.values(plan.metadata).map((bullet, i) => {
                                        return (
                                            <li key={i}>{bullet}</li>
                                        );
                                    })}
                                </ul>
                            </CardBody>
                        </Card>
                    );
                })}
            </Row>
            {stripeProvider}
        </React.Fragment >
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