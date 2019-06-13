import React from 'react';
//import { Datetime } from 'react-datetime';
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

const EdgarFiling = ({ data }) => {
  var counter = 0;
  if (data) {
    return data.items.map(({ title, formType, filingDate, fileLink }) => (
      <Col key={counter++} lg={4} md={6} sm={6} xs={12} className="mb-3">
        <Card color='secondary'>
          <CardBody>
            <CardTitle className="text-light">{title}</CardTitle>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>Form Type: {formType}</ListGroupItem>
            <ListGroupItem>Filing Date: {filingDate}</ListGroupItem>
            <ListGroupItem className="d-flex justify-content-center">
              <Button href={fileLink}>View Filing</Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    ));
  }
  return (<div className="spinner-grow d-flex align-items-center" role="status">
    <span className="sr-only">Loading...</span>
  </div>);
}

export default EdgarFiling;