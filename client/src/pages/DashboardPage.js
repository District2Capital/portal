import Page from 'components/Page';
import React from 'react';

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
      </Page>
    );
  }
}
export default DashboardPage;
