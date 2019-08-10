import Page from 'components/Page';
import React from 'react';
import { Row } from 'reactstrap';
import { FilingFrequencyCard } from 'components/Card/';
import { MarketOverviewCard } from 'components/Card/';
import { RecentViewedFilingsCard } from 'components/Card/';
import { RecentFilingSearchesCard } from 'components/Card/';
import { RecentSavedFilingsCard } from 'components/Card/';
import { FollowedCompanyFilings } from 'components/Card/';
import { FollowedFormTypeFilings } from 'components/Card/';

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
          <RecentFilingSearchesCard />
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
