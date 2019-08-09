import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { AxiosProvider } from 'react-axios';
import { Redirect, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

// Components
import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import './styles/reduction.scss';
import 'react-toastify/dist/ReactToastify.css';

// * Main Pages
import DashboardPage from 'pages/DashboardPage';
import ListsFeedPage from 'pages/ListsFeedPage';
import MainFeedPage from 'pages/MainFeedPage';
import SECFeedPage from 'pages/SECFeedPage';

// * Lists
import ListPage from 'pages/ListPage';
import CreateDeletePage from 'pages/CreateDeletePage';

// * Search
import FilingSearchPage from 'pages/FilingSearchPage';
import CompanySearchPage from 'pages/CompanySearchPage';
import FormTypeSearchPage from 'pages/FormTypeSearchPage';

// * Personal
import MyCompaniesPage from 'pages/MyCompaniesPage';
import MyFormTypesPage from 'pages/MyFormTypesPage';
import SavedFilingsPage from 'pages/SavedFilingsPage';
import ViewedFilingsPage from 'pages/ViewedFilingsPage';
import SearchHistoryPage from 'pages/SearchHistoryPage';

// * Reference Docs
import FilingDocsPage from 'pages/FilingDocsPage';

// * Others
import FilingSpreadsheet from 'pages/FilingSpreadsheet';
import SECHistoricalPage from 'pages/SECHistoricalPage';
import XBRLFeedPage from 'pages/XBRLFeedPage';
import XBRLHistoricalPage from 'pages/XBRLHistoricalPage';

// * Settings
import SettingsPage from 'pages/SettingsPage';

// import StockPage from 'pages/StockPage';
// import FilingReaderPage from 'pages/FilingReaderPage';
import auth from "services/auth";
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
import GlobalContext from './context/global-context';

toast.configure();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    Accept: "application/json"
  }
});

const App = () => {
  const user = auth.getCurrentUser();
  if (!user) {
    return (
      <div>
        <LayoutRoute
          exact
          path="/login"
          layout={EmptyLayout}
          component={props => (
            <AuthPage {...props} authState={STATE_LOGIN} />
          )}
        />
        <Redirect from="/" to="/login" />
      </div>);
  }
  const value = useContext(GlobalContext);
  const fetchData = async () => {
    // Fetch request to api/users and update Context lists
    var config = {
      params: { "x-auth-token": getJwt() }
    };
    await axios.get('/api/lists/getListNames', config).then(res => {
      value['updateListNames'](res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    < Switch >
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
          path="/listfeeds"
          layout={MainLayout}
          component={ListsFeedPage}
        />
        <LayoutRoute
          exact
          path="/mainfeed"
          layout={MainLayout}
          component={MainFeedPage}
        />
        <LayoutRoute
          exact
          path="/secfilings"
          layout={MainLayout}
          component={SECFeedPage}
        />
        {(value && value.lists.lists) ? value.lists.lists.map((listName, index) => {
          return (<LayoutRoute
            key={listName}
            exact
            path={`/${listName}List`}
            layout={MainLayout}
            component={props => (
              <ListPage {...props} listName={listName} />
            )}
          />);
        }) : ('')}
        <LayoutRoute
          exact
          path='/createDeleteList'
          layout={MainLayout}
          component={CreateDeletePage}
        />
        <LayoutRoute
          exact
          path="/search"
          layout={MainLayout}
          component={FilingSearchPage}
        />
        <LayoutRoute
          exact
          path="/companysearch"
          layout={MainLayout}
          component={CompanySearchPage}
        />
        <LayoutRoute
          exact
          path="/formtypesearch"
          layout={MainLayout}
          component={FormTypeSearchPage}
        />
        <LayoutRoute
          exact
          path="/mycompanies"
          layout={MainLayout}
          component={MyCompaniesPage}
        />
        <LayoutRoute
          exact
          path="/myformtypes"
          layout={MainLayout}
          component={MyFormTypesPage}
        />
        <LayoutRoute
          exact
          path="/savedfilings"
          layout={MainLayout}
          component={SavedFilingsPage}
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
        <LayoutRoute
          exact
          path="/settings"
          layout={MainLayout}
          component={SettingsPage}
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
    </Switch >
  );
}

export default App;
