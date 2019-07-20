import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Dropdown, Col, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import CompanySearchForm from 'components/CompanySearchForm';
import CompanyCard from 'components/Card/CompanyCard';
import SmallRecentSearchCard from 'components/Card/SmallRecentSearchCard';
class CompanySearchPage extends Component {

    state = {
        time: Date.now(),
        recentSearches: [],
        data: [],
        numberItems: "All",
        numberdropdownOpen: false,
        companyQuery: "",
        showLoader: false,
        searchExecuted: false
    }

    componentDidMount = async () => {
        await this.getRecentSearchData();
    }

    getDataFromDb = async () => {
        // * Save company query as recent Company search in DB
        var params = {
            "x-auth-token": getJwt(),
            companySearchString: this.state.companyQuery
        };
        await axios.post(`api/users/updateCompanySearches`, params);
        await this.getRecentSearchData();
        // * Fetch list of companies from DB
        await axios.get(`/api/sec/getCompanies/?company=${this.state.companyQuery}`).then(res => {
            console.log(res.data);
            this.setState({
                data: res.data.companies,
                showLoader: false,
                searchExecuted: true
            });
        });
    };

    getRecentSearchData = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentCompanySearchData', config).then(res => {
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

    toggleNumber = () => {
        this.setState({
            numberdropdownOpen: !this.state.numberdropdownOpen
        });
    }

    handleNumberFilterClick(clickedNumber) {
        this.setState({ numberItems: clickedNumber });
    }

    searchHandler = async (company, type, cik) => {
        await this.setState({ companyQuery: company, showLoader: true });
        await this.getDataFromDb();
    }

    render() {
        let { recentSearches, data, numberItems, showLoader, searchExecuted } = this.state;
        var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
        return (
            <div className="px-4 h-100 d-flex overflow-hidden flex-column">
                <div className="py-3 d-flex flex-row">
                    <h1 className="mr-auto">Company Search</h1>
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
                    </div>
                </div>
                <CompanySearchForm props={this.props} searchHandler={(company) => this.searchHandler(company)} />
                {(recentSearches.length) ? (<Card className="my-2">
                    <CardHeader>Recent Searches</CardHeader>
                    <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                        <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
                            {recentSearches.map(({ companySearchString, dateSearched }, index) => {
                                return (<SmallRecentSearchCard key={index} companySearchString={companySearchString} dateSearched={dateSearched} />);
                            })}
                        </Row>
                    </CardBody>
                </Card>) : ("")}
                <Row className="d-flex justify-content-center flex-grow-1">
                    {(showLoader) ? (
                        <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                            <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (data.map((company, index) => {
                        if (numberItems === "All" || index < numberItems) {
                            return (
                                <Col key={index} xl={3} lg={4} md={6} sm={8} xs={12} className="mb-3">
                                    <CompanyCard company={company} />
                                </Col>
                            );
                        }
                        return (<div></div>);
                    }))}
                    {((!showLoader && searchExecuted) && !data.length) ? (
                        <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                            <h3>No Search Results</h3>
                        </div>
                    ) : (<div></div>)}
                </Row>
            </div>
        );
    }
}

export default CompanySearchPage;