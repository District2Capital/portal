import React, {Suspense} from 'react';
import axios from 'axios';
import { AxiosProvider } from 'react-axios';
import LoadingOverlay from "react-loading-overlay";
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

// Components
import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import HashLoader from "react-spinners/HashLoader";
import './styles/reduction.scss';

// Pages
import DashboardPage from 'pages/DashboardPage';
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
import HistoricalPage from 'pages/HistoricalPage';
import EdgarDocsPage from 'pages/EdgarDocsPage';
import CompanySearchPage from 'pages/CompanySearchPage';
import EdgarFeedPage from 'pages/EdgarFeedPage';
import SECFeedPage from 'pages/SECFeedPage';
import StockPage from 'pages/StockPage';


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 15000,
  headers: {
    Accept: "application/json"
  }
});

class App extends React.Component {

  render() {
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
                  path="/sec"
                  layout={MainLayout}
                  component={SECFeedPage}
                />
                <LayoutRoute
                  exact
                  path="/historical"
                  layout={MainLayout}
                  component={HistoricalPage}
                />
                <LayoutRoute
                  exact
                  path="/edgarDocs"
                  layout={MainLayout}
                  component={EdgarDocsPage}
                />
                <LayoutRoute
                  exact
                  path="/search"
                  layout={MainLayout}
                  component={CompanySearchPage}
                />
                <LayoutRoute
                  exact
                  path="/edgar"
                  layout={MainLayout}
                  component={EdgarFeedPage}
                />
                <LayoutRoute
                  exact
                  path="/stock"
                  layout={MainLayout}
                  component={StockPage}
                />
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
