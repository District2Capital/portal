import React, { Suspense } from 'react';
import axios from 'axios';
import { AxiosProvider } from 'react-axios';
import LoadingOverlay from "react-loading-overlay";
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

// Components
import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import HashLoader from "react-spinners/HashLoader";
import { toast } from 'react-toastify';
import './styles/reduction.scss';
import 'react-toastify/dist/ReactToastify.css';

// Main Pages
import DashboardPage from 'pages/DashboardPage';
import MyFeedPage from 'pages/MyFeedPage';
import SECFeedPage from 'pages/SECFeedPage';
import FilingSearchPage from 'pages/FilingSearchPage';
import ViewedFilingsPage from 'pages/ViewedFilingsPage';
import SearchHistoryPage from 'pages/SearchHistoryPage';
// Reference Docs
import FilingDocsPage from 'pages/FilingDocsPage';

// Others
import FilingSpreadsheet from 'pages/FilingSpreadsheet';
import SECHistoricalPage from 'pages/SECHistoricalPage';
import XBRLFeedPage from 'pages/XBRLFeedPage';
import XBRLHistoricalPage from 'pages/XBRLHistoricalPage';
// import StockPage from 'pages/StockPage';
// import FilingReaderPage from 'pages/FilingReaderPage';
import auth from "services/auth";
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

toast.configure();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    Accept: "application/json"
  }
});

class App extends React.Component {
  state = {}

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <Suspense
        fallback={
          <LoadingOverlay
            active
            classNamePrefix={"SuspenseLoader_"}
            spinner={<HashLoader size={85} color={"#0212cb"} />}
          />
        }
      >
        <BrowserRouter basename={getBasename()}>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            {!user && <Redirect from="/" to="/login" />}
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
            <LayoutRoute
              exact
              path="/login-modal"
              layout={MainLayout}
              component={AuthModalPage}
            />
            <AxiosProvider instance={axiosInstance}>
              <LayoutRoute
                exact
                path="/"
                layout={MainLayout}
                component={DashboardPage}
              />
              <LayoutRoute
                exact
                path="/myfeed"
                layout={MainLayout}
                component={MyFeedPage}
              />
              <LayoutRoute
                exact
                path="/secfilings"
                layout={MainLayout}
                component={SECFeedPage}
              />
              <LayoutRoute
                exact
                path="/search"
                layout={MainLayout}
                component={FilingSearchPage}
              />
              <LayoutRoute
                exact
                path="/viewedfilings"
                layout={MainLayout}
                component={ViewedFilingsPage}
              />
              <LayoutRoute
                exact
                path="/searchhistory"
                layout={MainLayout}
                component={SearchHistoryPage}
              />
              <LayoutRoute
                exact
                path="/filingDocs"
                layout={MainLayout}
                component={FilingDocsPage}
              />
              <LayoutRoute
                exact
                path="/spreadsheet"
                layout={MainLayout}
                component={FilingSpreadsheet}
              />
              <LayoutRoute
                exact
                path="/sechistorical"
                layout={MainLayout}
                component={SECHistoricalPage}
              />
              <LayoutRoute
                exact
                path="/xbrlhistorical"
                layout={MainLayout}
                component={XBRLHistoricalPage}
              />
              <LayoutRoute
                exact
                path="/xbrlfilings"
                layout={MainLayout}
                component={XBRLFeedPage}
              />
              {/*<LayoutRoute
                exact
                path="/filingreader"
                layout={MainLayout}
                component={FilingReaderPage}
              />
              <LayoutRoute
                exact
                path="/stock"
                layout={MainLayout}
                component={StockPage}
              />*/}
              <LayoutRoute
                exact
                path="/register"
                layout={MainLayout}
                component={AuthPage}
              />
            </AxiosProvider>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
