import React, { useState, useEffect } from 'react';
import LoadingSpinner from 'components/LoadingSpinner';
import { Row, Col, Card } from 'reactstrap';
import d2clogo from 'assets/logo.png';

const ResetEmailPage = ({ ...props }) => {
    const [emailConfirm, updateEmailConfirm] = useState(true);

    const handleLogoClick = () => {
        props.history.push('/');
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

                </Card>
            </Col>
        </Row>
    );
}

export default ResetEmailPage;