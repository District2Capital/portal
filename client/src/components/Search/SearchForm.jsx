import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { MdAccountBalance, MdFingerprint, MdLabelOutline } from 'react-icons/md';

const SearchForm = ({ searchHandler }) => {
    const [company, changeCompany] = useState("");
    const [type, changeType] = useState("");
    const [cik, changeCik] = useState("");

    const handleCompanyChange = (e) => {
        changeCompany(e.target.value);
    }

    const handleTypeChange = (e) => {
        changeType(e.target.value);
    }

    const handleCIKChange = (e) => {
        changeCik(e.target.value);
    }

    const handleEnterClicked = async (e) => {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();
            await searchHandler(company, type, cik);
        }
    }

    return (
        <Card className="mb-3">
            <CardHeader>Search Parameters</CardHeader>
            <CardBody>
                <Form>
                    <FormGroup row>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="company" sm={3}><MdAccountBalance style={{ margin: "auto 0", minWidth: "16px" }} /> Company</Label>
                        <Col sm={9}>
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
                    </FormGroup>
                    <FormGroup row>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="cik" sm={3}><MdFingerprint style={{ margin: "auto 0", minWidth: "16px" }} /> Ticker</Label>
                        <Col sm={9}>
                            <Input
                                style={{ width: "-webkit-fill-available" }}
                                className="ml-4"
                                type="cik"
                                name="cik"
                                placeholder="Company Ticker"
                                onChange={(e) => handleCIKChange(e)}
                                onKeyPress={(e) => handleEnterClicked(e)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="type" sm={3}><MdLabelOutline style={{ margin: "auto 0", minWidth: "16px" }} /> FormType</Label>
                        <Col sm={9}>
                            <Input
                                style={{ width: "-webkit-fill-available" }}
                                className="ml-4"
                                type="type"
                                name="type"
                                placeholder="Form Type"
                                onChange={(e) => handleTypeChange(e)}
                                onKeyPress={(e) => handleEnterClicked(e)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Button outline className="float-right" onClick={() => searchHandler(company, type, cik)}>Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    );
}

export default SearchForm;