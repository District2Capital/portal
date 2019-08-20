import React from 'react';
import { filings } from '../../../config';
import { Col } from 'reactstrap';
import { FilingCard } from 'components/Card';
import LoadingSpinner from '../../LoadingSpinner';

const Filings = ({ data, searchExecuted, filter, number, showLoader, apiRoute }) => {

  if (showLoader) {
    return (<LoadingSpinner />);
  }
  if (searchExecuted && data && !data.length) {
    return (
      <div className="d-flex align-items-center flex-grow-1 justify-content-center">
        <h3>No Search Results</h3>
      </div>
    );
  }
  if (data) {
    return data.map(({ title, formType, filingDate, fileLink }, index) => {
      var badgeColor = "primary";
      var values = Object.values(filings);
      for (var key = 0; key < values.length; key++) {
        for (var filing = 0; filing < values[key].filingArray.length; filing++) {
          if (formType === values[key].filingArray[filing]) {
            badgeColor = values[key].color;
          }
        }
      }
      if (filter.includes(formType) && (number === "All" || index < number)) {
        return (<Col key={index} xl={3} lg={4} md={6} sm={8} xs={12} className="mb-3">
          <FilingCard badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} apiRoute={apiRoute}></FilingCard>
        </Col >);
      }
      return <div key={index} ></div>;
    });
  }
  return (<div></div>);
};

export default Filings;