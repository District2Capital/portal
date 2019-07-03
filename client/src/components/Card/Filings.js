import React from 'react';
import { filings } from '../../config';
import { Col } from 'reactstrap';
import FilingCard from './FilingCard';

class Filings extends React.Component {

  render() {
    const { data, filter, number, showLoader, apiRoute } = this.props;
    var counter = 0;
    if (data) {
      return data.map(({ title, formType, filingDate, fileLink }) => {
        var badgeColor = "primary";
        var values = Object.values(filings);
        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }
        if (filter.includes(formType) && counter < number) {
          return (<Col key={counter++} xl={3} lg={4} md={6} sm={8} xs={12} className="mb-3">
            <FilingCard badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} apiRoute={apiRoute}></FilingCard>
            {/*<Card color='secondary'>
              <CardBody>
                <Badge color={badgeColor}>{formType}</Badge>
                <CardTitle className="text-light">{title}</CardTitle>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>Form Type: {formType}</ListGroupItem>
                <ListGroupItem>Filing Date: {filingDate}</ListGroupItem>
                <ListGroupItem className="d-flex justify-content-center">
                  <Button onClick={() => this.toggleModal()}>View Filing</Button>{/* href={fileLink}
            <Modal visible={modal} width="400" height="300" effect="fadeInDown" onClickAway={() => this.toggleModal()}>
              <div>
                <h1>Title</h1>
                <p>Some Contents</p>
                <Button onClick={() => this.toggleModal()}>Close</Button>
              </div>
            </Modal>
            <Modal
              isOpen={modal}
              toggle={this.toggleModal}
              className={this.props.className}>
              <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                    </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>
                  Do Something
                      </Button>{' '}
                <Button color="secondary" onClick={this.toggleModal}>
                  Cancel
                      </Button>
              </ModalFooter>
            </Modal>
                </ListGroupItem>
              </ListGroup >
            </Card > */}
          </Col >);
        }
        return <div key={counter++} ></div>;
      });
    }
    if (showLoader !== false) {
      return (
        <div className="d-flex align-items-center flex-grow-1 justify-content-center">
          <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (<div></div >);
  }
};

export default Filings;