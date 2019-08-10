import Page, { useEffect } from 'components/Page';
import React from 'react';
import { Row } from 'reactstrap';
import { FilingFrequencyCard, MarketOverviewCard, RecentViewedFilingsCard, RecentFilingSearchesCard, RecentSavedFilingsCard, FollowedCompanyFilings, FollowedFormTypeFilings } from 'components/Card/';

const DashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
export default DashboardPage;
