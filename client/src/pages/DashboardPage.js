import Page from 'components/Page';
import React from 'react';
import {
  Card,
  Row,
  CardBody,
  CardHeader,
} from 'reactstrap';
import StockCard from '../components/Card/StockCard';

class DashboardPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const usMarkets = [".DJI", ".SPX",  "NASDAQ:^RUT", "NASDAQ:^IXIC"];
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
      >
        <Card>
          <CardHeader>US Market Overview</CardHeader>
          <CardBody>
            <Row className="d-flex flex-wrap justify-content-center">
              <Row className="d-flex m-0 justify-content-center">
                <StockCard ticker={usMarkets[0]}/>
                <StockCard ticker={usMarkets[1]}/>
              </Row>
              <Row className="d-flex m-0 justify-content-center">
                <StockCard ticker={usMarkets[2]}/>
                <StockCard ticker={usMarkets[3]}/>
              </Row>
            </Row>
          </CardBody>
        </Card>
      </Page>
    );
  }
}
export default DashboardPage;
