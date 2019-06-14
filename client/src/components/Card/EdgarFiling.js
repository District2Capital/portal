import React from 'react';
import { filings } from '../../config';
import {
  Badge,
  Card,
  Button,
  CardBody,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

const EdgarFiling = ({ data, filter, number }) => {
  var counter = 0;
  if (data) {
    return data.items.map(({ title, formType, filingDate, fileLink }) => {
      var badgeColor = "primary";  
      var values = Object.values(filings);
      for(var key = 0; key < values.length; key++){
        for(var filing = 0; filing < values[key].filingArray.length; filing++){
          if(formType === values[key].filingArray[filing]){
            badgeColor = values[key].color;
          }
        }
      }
      if(filter.includes(formType) && counter < number){
        return (<Col key={counter++} lg={4} md={6} sm={6} xs={12} className="mb-3">
          <Card color='secondary'>
            <CardBody>
              <Badge color={badgeColor}>{formType}</Badge>
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
        </Col>);}
        return <div key={counter++} ></div>;
      });
  }
  return (
    <div className="d-flex align-items-center flex-grow-1 justify-content-center">
      <div className="spinner-grow d-flex align-items-center" style={{width: "75px", height: "75px"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default EdgarFiling;