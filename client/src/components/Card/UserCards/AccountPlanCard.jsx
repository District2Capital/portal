import React, { useState, useRef, useEffect, useContext } from 'react';
import { Card, CardHeader, Row, Col, CardBody, Button } from 'reactstrap';
import GlobalContext from 'context/global-context';
import Avatar from '../../Avatar';
import defaultUser from 'assets/defaultUser.png';
import { useUserData } from 'components/hooks/useUserData';
import Files from 'react-files';
import { UserProfileFieldsCard, PaymentCards } from 'components/Card';
import * as _ from 'lodash';
import { getJwt } from 'services/auth';
import axios from 'axios';

const AccountPlanCard = (props) => {
    const [selectedPlan, changeSelectedPlan] = useState('');
    const [token, changeToken] = useState({});
    const [createToken, changeCreateToken] = useState(false);
    const value = useContext(GlobalContext);
    const { userInfo } = value;
    const { name, stripePlan, stripeID } = userInfo;

    useEffect(() => {
        if (!(_.isEmpty(token))) {
            handleSubmit(token.token.id);
        }
    }, [token])

    const handleSubmit = async () => {
        if (!(_.isEmpty(token))) {
            let params = {
                "x-auth-token": getJwt(),
                stripePlan,
                stripeID,
                name
            };
            await axios.post('/api/users/changeStripePlan', params).then(async res => {

            });
        }
    }

    let content = (
        <Card className="m-3">
            <CardHeader>Account Plan (Current Plan Highlighted)</CardHeader>
            <CardBody>
                <PaymentCards noIntoText={true} signUpName={name} selectedPlan={selectedPlan.length ? selectedPlan : stripePlan} changeSelectedPlan={(plan) => changeSelectedPlan(plan)} createToken={createToken} changeToken={(e) => changeToken(e)} />
                <div className="m-2">
                    <Button outline className="float-right" onClick={() => handleSubmit()}>Change Plan</Button>
                </div>
            </CardBody>
        </Card >
    );

    return content;
};

export default AccountPlanCard;