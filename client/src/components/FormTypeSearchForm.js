import React, { Component } from 'react';
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

class FormTypeSearchForm extends Component {
    state = {
        FormType: ""
    }

    handleFormTypeChange = async (e) => {
        this.setState({ FormType: e.target.value });
        await this.props.searchHandler(this.state.FormType);
    }

    handleEnterClicked = async (e) => {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();
            await this.props.searchHandler(this.state.FormType);
        }
    }

    render() {
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
                                        onChange={(e) => this.handleFormTypeChange(e)}
                                        onKeyPress={(e) => this.handleEnterClicked(e)}
                                    />
                                </Col>
                                <Col className="my-2" md={2}>
                                    <Button outline className="float-right" onClick={() => this.props.searchHandler(this.state.FormType)}>Search</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default FormTypeSearchForm;