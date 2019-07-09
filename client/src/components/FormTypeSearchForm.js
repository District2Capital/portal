import React, { Component } from 'react';
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
            <Card className="my-3">
                <CardHeader>Search Parameters</CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="my-2" sm={2}>
                                <Label for="FormType"><MdLabelOutline /> FormType</Label>
                            </Col>
                            <Col className="my-2" sm={8}>
                                <Input
                                    type="FormType"
                                    name="FormType"
                                    placeholder="FormType Name"
                                    onChange={(e) => this.handleFormTypeChange(e)}
                                    onKeyPress={(e) => this.handleEnterClicked(e)}
                                />
                            </Col>
                            <Col className="my-2" sm={2}>
                                <Button outline className="float-right" onClick={() => this.props.searchHandler(this.state.FormType)}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default FormTypeSearchForm;