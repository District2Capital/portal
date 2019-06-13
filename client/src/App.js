import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
import CardPage from 'pages/CardPage';
// pages
import DashboardPage from 'pages/DashboardPage';
import React, {Suspense} from 'react';
import LoadingOverlay from "react-loading-overlay";
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import EdgarFeed from 'pages/EdgarFeed';
import Stock from 'pages/Stock';
import axios from 'axios';
import { AxiosProvider } from 'react-axios';
import HashLoader from "react-spinners/HashLoader";

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
          <GAListener>
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
                  path="/cards"
                  layout={MainLayout}
                  component={CardPage}
                />
                <LayoutRoute
                  exact
                  path="/edgar"
                  layout={MainLayout}
                  component={EdgarFeed}
                />
                <LayoutRoute
                  exact
                  path="/stock"
                  layout={MainLayout}
                  component={Stock}
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
          </GAListener>
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
