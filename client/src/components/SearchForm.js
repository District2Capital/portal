import React from 'react';
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

class SearchForm extends React.Component {
    state = {
        company: "",
        type: "",
        cik: ""
    }

    handleCompanyChange(e) {
        this.setState({ company: e.target.value });
    }

    handleTypeChange(e) {
        this.setState({ type: e.target.value });
    }

    handleCIKChange(e) {
        this.setState({ cik: e.target.value });
    }

    handleEnterClicked = async (e) => {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();
            await this.props.searchHandler(this.state.company, this.state.type, this.state.cik);
        }
    }

    render() {
        //let { company, type, cik } = this.state;
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
                                    className="mx-4"
                                    type="company"
                                    name="company"
                                    placeholder="Company Name"
                                    onChange={(e) => this.handleCompanyChange(e)}
                                    onKeyPress={(e) => this.handleEnterClicked(e)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="cik" sm={3}><MdFingerprint style={{ margin: "auto 0", minWidth: "16px" }} /> CIK</Label>
                            <Col sm={9}>
                                <Input
                                    style={{ width: "-webkit-fill-available" }}
                                    className="mx-4"
                                    type="cik"
                                    name="cik"
                                    placeholder="Company CIK"
                                    onChange={(e) => this.handleCIKChange(e)}
                                    onKeyPress={(e) => this.handleEnterClicked(e)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ verticalAlign: "-webkit-baseline-middle" }} className="m-auto d-inline-flex" for="type" sm={3}><MdLabelOutline style={{ margin: "auto 0", minWidth: "16px" }} /> FormType</Label>
                            <Col sm={9}>
                                <Input
                                    style={{ width: "-webkit-fill-available" }}
                                    className="mx-4"
                                    type="type"
                                    name="type"
                                    placeholder="Form Type"
                                    onChange={(e) => this.handleTypeChange(e)}
                                    onKeyPress={(e) => this.handleEnterClicked(e)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={{ size: 9, offset: 3 }}>
                                <Button outline className="float-right" onClick={() => this.props.searchHandler(this.state.company, this.state.type, this.state.cik)}>Search</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default SearchForm;