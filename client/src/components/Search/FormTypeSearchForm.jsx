import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    Container,
    Row, //FormGroup, // FormGroup row
    Input,
    Label
} from 'reactstrap';
import { MdLabelOutline } from 'react-icons/md';

const FormTypeSearchForm = ({ searchHandler }) => {
    const [FormType, changeFormType] = useState("");

    const handleFormTypeChange = async (e) => {
        changeFormType(e.target.value);
        await searchHandler(FormType);
    }

    const handleEnterClicked = async (e) => {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();
            await searchHandler(FormType);
        }
    }

    return (
        <Card className="mb-3">
            <CardHeader>Search Parameters</CardHeader>
            <CardBody>
                <Form>
                    <Container>
                        <Row>
                            <Col className="my-2" md={2}>
                                <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="FormType"><MdLabelOutline className="m-auto" /> FormType</Label>
                            </Col>
                            <Col className="my-2" md={8}>
                                <Input
                                    style={{ width: "-webkit-fill-available" }}
                                    className="mx-4"
                                    type="FormType"
                                    name="FormType"
                                    placeholder="FormType Name"
                                    onChange={(e) => handleFormTypeChange(e)}
                                    onKeyPress={(e) => handleEnterClicked(e)}
                                />
                            </Col>
                            <Col className="my-2" md={2}>
                                <Button outline className="float-right" onClick={() => searchHandler(FormType)}>Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </CardBody>
        </Card>
    );
}

export default FormTypeSearchForm;