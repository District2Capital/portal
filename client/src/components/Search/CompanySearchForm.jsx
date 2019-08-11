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
import { MdAccountBalance } from 'react-icons/md';

const CompanySearchForm = ({ searchHandler }) => {
    const [company, changeCompany] = useState("");

    const handleCompanyChange = (e) => {
        changeCompany(e.target.value);
    }

    const handleEnterClicked = async (e) => {
        var code = e.key;

        if (code === 'Enter') {
            e.preventDefault();
            await searchHandler(e.target.value);
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
                        <Col className="my-2" md={8}>
                            <Input
                                style={{ width: "-webkit-fill-available" }}
                                className="mx-4"
                                type="company"
                                name="company"
                                placeholder="Company Name"
                                onChange={(e) => handleCompanyChange(e)}
                                onKeyPress={(e) => handleEnterClicked(e)}
                            />
                        </Col>
                        <Col className="my-2" md={2}>
                            <Button outline className="float-right" onClick={() => searchHandler(company)}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    );
}

export default CompanySearchForm;