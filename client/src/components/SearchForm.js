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

  
class SearchForm extends React.Component {
    state = {
        company: "",
        type: "",
        cik: ""
    }

    handleCompanyChange(e) {
        this.setState({company: e.target.value});
        console.log(e.target.value);
    }

    handleTypeChange(e) {
        this.setState({type: e.target.value});
    }

    handleCIKChange(e) {
        this.setState({cik: e.target.value});
    }

    render() {
        //let { company, type, cik } = this.state;
        return ( 
            <Card className="my-3">
                <CardHeader>Search Parameters</CardHeader>
                <CardBody>
                <Form>
                    <FormGroup row>
                    <Label for="company" sm={3}>
                        Company
                    </Label>
                    <Col sm={9}>
                        <Input
                        type="company"
                        name="company"
                        placeholder="Company Name"
                        onChange={(e) => this.handleCompanyChange(e)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="cik" sm={3}>
                        CIK
                    </Label>
                    <Col sm={9}>
                        <Input
                        type="cik"
                        name="cik"
                        placeholder="Company CIK"
                        onChange={(e) => this.handleCIKChange(e)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="type" sm={3}>
                        Form Type
                    </Label>
                    <Col sm={9}>
                        <Input
                        type="type"
                        name="type"
                        placeholder="Form Type"
                        onChange={(e) => this.handleTypeChange(e)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Button className="float-right" onClick={() => this.props.searchHandler(this.state.company, this.state.type, this.state.cik)}>Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
                </CardBody>
            </Card>
        );
    }
}
 
export default SearchForm;