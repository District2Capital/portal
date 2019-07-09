import React from 'react';
import { Card, CardHeader, CardBody, Badge, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { Filings } from '../components/Card';
import { filings } from '../config';
import SearchForm from '../components/SearchForm';
import { getJwt } from 'services/auth';
import SmallRecentSearchCard from 'components/Card/SmallRecentSearchCard';
class FilingSearchPage extends React.Component {

  state = {
    time: Date.now(),
    recentSearches: [],
    data: [],
    filter: [],
    numberItems: "All",
    availableFormTypes: [],
    formdropdownOpen: false,
    numberdropdownOpen: false,
    cikQuery: "",
    typeQuery: "",
    companyQuery: "",
    showLoader: false,
    searchExecuted: false
  }

  componentDidMount = async () => {
    await this.getRecentSearchData();
  }

  getDataFromDb = async () => {
    await this.updateRecentSearches();
    await this.getRecentSearchData();
    await axios.get(`/api/sec/getData/?cik=${this.state.cikQuery}&type=${this.state.typeQuery}&company=${this.state.companyQuery}`).then(res => {
      this.setState({
        data: res.data,
        availableFormTypes: [...new Set(res.data.items.map(a => a.formType))],
        filter: [...new Set(res.data.items.map(a => a.formType))],
        showLoader: false,
        searchExecuted: true
      });
    });
  };

  getRecentSearchData = async () => {
    var config = {
      params: { "x-auth-token": getJwt() }
    };
    await axios.get('/api/stats/getRecentSearchData', config).then(res => {
      let searches = res.data;
      if (searches && searches.data.length) {
        // Sort data by company
        this.setState({ recentSearches: searches.data });
      }
    })
      .catch(error => {
        console.log('ERROR. Could not get recent searches.');
      });
  }

  updateRecentSearches = async () => {
    // Save queried filing as a recent search
    var params = {
      "x-auth-token": getJwt(),
      companySearchString: this.state.companyQuery,
      cikSearchString: this.state.cikQuery,
      formTypeSearchString: this.state.typeQuery
    };
    await axios.post(`api/users/updateRecentSearches`, params);
  }

  toggleFormType = () => {
    this.setState({
      formdropdownOpen: !this.state.formdropdownOpen
    });
  }

  toggleNumber = () => {
    this.setState({
      numberdropdownOpen: !this.state.numberdropdownOpen
    });
  }

  handleFilterClick(clickedFormType) {
    this.setState({ filter: clickedFormType });
  }

  handleNumberFilterClick(clickedFormType) {
    this.setState({ numberItems: clickedFormType });
  }

  searchHandler = async (company, type, cik) => {
    await this.setState({ companyQuery: company, typeQuery: type, cikQuery: cik, showLoader: true });
    await this.getDataFromDb();
  }

  render() {
    let { recentSearches, data, filter, availableFormTypes, numberItems, showLoader, searchExecuted } = this.state;
    var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
    return (
      <div className="px-3 h-100 d-flex overflow-hidden flex-column">
        <div className="py-3 d-flex flex-row">
          <h1 className="mr-auto">Filing Search</h1>
          <div className="d-flex flex-wrap justify-content-end">
            <Dropdown className="p-2" style={{ width: "120px" }} isOpen={this.state.numberdropdownOpen} toggle={this.toggleNumber}>
              <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
              <DropdownMenu>
                {numberFilter.map((number, index) => {
                  if (!index) {
                    return (<DropdownItem key={index} onClick={() => this.handleNumberFilterClick(number)}>{number}</DropdownItem>);
                  }
                  return (<DropdownItem key={index} onClick={() => this.handleNumberFilterClick(number)}>{"<"} {number}</DropdownItem>);
                })}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="p-2" style={{ width: "120px" }} isOpen={this.state.formdropdownOpen} toggle={this.toggleFormType}>
              <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Type</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.handleFilterClick(availableFormTypes)}>All</DropdownItem>
                {availableFormTypes.map(formType => {
                  var badgeColor = "primary";
                  var values = Object.values(filings);
                  for (var key = 0; key < values.length; key++) {
                    for (var filing = 0; filing < values[key].filingArray.length; filing++) {
                      if (formType === values[key].filingArray[filing]) {
                        badgeColor = values[key].color;
                      }
                    }
                  }
                  return (<DropdownItem key={formType} onClick={() => this.handleFilterClick([formType])}>
                    {formType} <Badge color={badgeColor}>{formType}</Badge>
                  </DropdownItem>);
                })}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <SearchForm searchHandler={(company, type, cik) => this.searchHandler(company, type, cik)} />
        {(recentSearches.length) ? (<Card className="m-2">
          <CardHeader>Recent Searches</CardHeader>
          <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
            <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
              {recentSearches.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }, index) => {
                return (<SmallRecentSearchCard key={index} companySearchString={companySearchString} cikSearchString={cikSearchString} formTypeSearchString={formTypeSearchString} dateSearched={dateSearched} />);
              })}
            </Row>
          </CardBody>
        </Card>) : ("")}
        <Row className="d-flex justify-content-center flex-grow-1">
          <Filings showLoader={showLoader} searchExecuted={searchExecuted} data={data.items} filter={filter} number={numberItems} />
        </Row>
      </div>
    );
  }
};

export default FilingSearchPage;
