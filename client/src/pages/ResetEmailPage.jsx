import React, { useState, useEffect, useMemo } from 'react';
import LoadingSpinner from 'components/LoadingSpinner';
import { Row, Col, Card, Button } from 'reactstrap';
import d2clogo from 'assets/logo.png';
import axios from 'axios';
import { getCurrentUser, logout, getJwt } from 'services/auth';

const ResetEmailPage = ({ ...props }) => {
    const resetEmailToken = props.match.params.token;
    const emailLoading = (<div className="m-auto text-center"><LoadingSpinner /><h4>Updating Email...</h4></div>);
    const emailConfirmed = (<div className="m-auto"><h4>Email Confirmed!</h4><div className="m-auto" style={{ width: "fit-content" }}><Button secondary outline onClick={() => handleLogoClick()}>Go to portal</Button></div></div>);
    const emailFailed = (<div className="m-auto text-center"><h4>Email reset link expired.</h4><h4> Please try again.</h4></div>);
    const [centerContent, updateCenterContent] = useState(emailLoading);

    const handleLogoClick = () => {
        props.history.push('/');
    };

    useEffect(() => {
        confirmEmail();
    }, []);

    const confirmEmail = async () => {
        let params = {
            "resetEmailToken": resetEmailToken
        };
        await axios.post('/api/users/updateEmail', params).then(res => {
            if (res.status === 200) {
                logout();
                updateCenterContent(emailConfirmed);
                localStorage.setItem(process.env.REACT_APP_API_LOGIN_TOKEN_NAME, res.headers['x-auth-token']);
            } else {
                updateCenterContent(emailFailed);
            }
        }).catch(async err => {
            // * verify token with axios get request
            let user = getCurrentUser();
            await axios.get('/api/users/updateEmailToken', params).then(res => {
                if (user && res.status === 200) {
                    updateCenterContent(emailConfirmed);
                } else {
                    updateCenterContent(emailFailed);
                }
            }).catch(err => {
                updateCenterContent(emailFailed);
            });
        });
    };

    return (
        <Row
            style={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Col md={8} lg={8}>
                <Card body className="m-4">
                    <div className="text-center pb-4">
                        <img
                            className="rounded"
                            style={{ width: 100, cursor: 'pointer' }}
                            alt="logo"
                            src={d2clogo}
                            onClick={handleLogoClick}
                        />
                    </div>
                    {centerContent}
                </Card>
            </Col>
        </Row>
    );
}

export default ResetEmailPage;