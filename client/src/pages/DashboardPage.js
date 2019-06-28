import Page from 'components/Page';
import React from 'react';
import { Row } from 'reactstrap';
import FilingFrequencyCard from '../components/Card/FilingFrequencyCard';
import MarketOverviewCard from '../components/Card/MarketOverviewCard';

class DashboardPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
      >
        <Row>
          <MarketOverviewCard />
          <FilingFrequencyCard />
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
