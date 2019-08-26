import React, { useState, useEffect } from 'react';
import LoadingSpinner from 'components/LoadingSpinner';
import { Row, Col, Card, Button } from 'reactstrap';
import d2clogo from 'assets/logo.png';
import axios from 'axios';

const ResetEmailPage = ({ ...props }) => {
    const [emailConfirm, updateEmailConfirm] = useState(true);
    let centerContent = emailConfirm ? (<div className="m-auto text-center"><LoadingSpinner /><h4>Updating Email...</h4></div>) : (<div className="m-auto"><h4>Email Confirmed!</h4><div className="m-auto" style={{ width: "fit-content" }}><Button secondary outline onClick={() => handleLogoClick()}>Go to portal</Button></div></div>);

    const handleLogoClick = () => {
        props.history.push('/');
    };

    useEffect(() => {
        confirmEmail();
    }, []);

    const confirmEmail = async () => {
        let params = {
            "resetEmailToken": props.match.params.token
        };
        await axios.post('/api/users/updateEmail', params).then(res => {
            if (res.status === 200) {
                updateEmailConfirm(false);
                localStorage.setItem(process.env.REACT_APP_API_LOGIN_TOKEN_NAME, res.headers['x-auth-token']);
            }
            else if (res.status === 400) {
                centerContent = (<div className="m-auto text-center"><h4>Email reset link expired. Please try again.</h4></div>);
            }
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