import Page from 'components/Page';
import React from 'react';
import { Row } from 'reactstrap';
import FilingFrequencyCard from 'components/Card/FilingFrequencyCard';
import MarketOverviewCard from 'components/Card/MarketOverviewCard';
import RecentViewedFilingsCard from 'components/Card/RecentViewedFilingsCard';
import RecentSearchesCard from 'components/Card/RecentSearchesCard';
import RecentSavedFilingsCard from 'components/Card/RecentSavedFilingsCard';
import FollowedCompanyFilings from 'components/Card/FollowedCompanyFilings';
import FollowedFormTypeFilings from 'components/Card/FollowedFormTypeFilings';

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
        <Row>
          <RecentViewedFilingsCard />
          <RecentSearchesCard />
          <RecentSavedFilingsCard />
        </Row>
        <Row>
          <FollowedCompanyFilings />
          <FollowedFormTypeFilings />
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
