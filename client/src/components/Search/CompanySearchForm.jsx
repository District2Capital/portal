import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    Row, //FormGroup, // FormGroup row
    Input,
    Label
} from 'reactstrap';
import { MdAccountBalance, MdFingerprint } from 'react-icons/md';

const CompanySearchForm = ({ searchHandler }) => {
    const [company, changeCompany] = useState("");
    const [cik, changeCik] = useState("");

    const handleCompanyChange = (e) => {
        changeCompany(e.target.value);
    }

    const handleCikChange = (e) => {
        changeCik(e.target.value);
    }

    const handleEnterClicked = async (e) => {
        let code = e ? e.key : 'Enter';
        if (code === 'Enter') {
            if (e) e.preventDefault();
            await searchHandler(company, cik);
        }
    }

    return (
        <Card className="mb-3">
            <CardHeader>Search Parameters</CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        <Col className="my-2" md={2}>
                            <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="company"><MdAccountBalance className="m-auto" /> Company</Label>
                        </Col>
                        <Col className="my-2" md={10}>
                            <Input
                                style={{ width: "-webkit-fill-available" }}
                                className="ml-4"
                                type="company"
                                name="company"
                                placeholder="Company Name"
                                onChange={(e) => handleCompanyChange(e)}
                                onKeyPress={(e) => handleEnterClicked(e)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-2" md={2}>
                            <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="cik" sm={3}><MdFingerprint style={{ margin: "auto 0", minWidth: "16px" }} /> Ticker</Label>
                        </Col>
                        <Col className="my-2" md={10}>
                            <Input
                                style={{ width: "-webkit-fill-available" }}
                                className="ml-4"
                                type="cik"
                                name="cik"
                                placeholder="Company Ticker"
                                onChange={(e) => handleCikChange(e)}
                                onKeyPress={(e) => handleEnterClicked(e)}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col className="my-2" md={2}>
                            <Button outline className="float-right" onClick={() => handleEnterClicked()}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    );
}

export default CompanySearchForm;