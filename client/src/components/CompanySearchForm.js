import React from 'react';
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


class CompanySearchForm extends React.Component {
    state = {
        company: ""
    }

    handleCompanyChange(e) {
        this.setState({ company: e.target.value });
    }

    handleEnterClicked = async (e) => {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();
            await this.props.searchHandler(this.state.company);
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
                                <Label for="company">Company</Label>
                            </Col>
                            <Col className="my-2" sm={8}>
                                <Input
                                    type="company"
                                    name="company"
                                    placeholder="Company Name"
                                    onChange={(e) => this.handleCompanyChange(e)}
                                    onKeyPress={(e) => this.handleEnterClicked(e)}
                                />
                            </Col>
                            <Col className="my-2" sm={2}>
                                <Button outline className="float-right" onClick={() => this.props.searchHandler(this.state.company)}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default CompanySearchForm;