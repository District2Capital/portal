import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Dropdown, Col, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { FormTypeSearchForm } from 'components/Search';
import { FormTypeCard, SmallRecentSearchCard } from 'components/Card';
import { filings } from '../config';

class FormTypeSearchPage extends Component {

    state = {
        time: Date.now(),
        recentSearches: [],
        data: [],
        numberItems: "All",
        numberdropdownOpen: false,
        FormTypeQuery: "",
        showLoader: false,
        searchExecuted: false
    }

    componentDidMount = async () => {
        await this.getRecentSearchData();
    }

    getDataFromDb = async () => {
        // * Save FormType Query in recent FormType searches
        var params = {
            "x-auth-token": getJwt(),
            FormTypeSearchString: this.state.FormTypeQuery
        };
        await axios.post(`api/users/updateFormTypeSearches`, params);
        await this.getRecentSearchData();
        // * Compare FormTypes in state data to FormType Search String
        var values = Object.values(filings);
        var FormTypeArray = [];
        values.map((value, valueindex) => {
            value.filingArray.map((filing, filingindex) => {
                if (this.state.FormTypeQuery && filing.includes(this.state.FormTypeQuery.toUpperCase())) {
                    FormTypeArray.push({ FormType: filing, BadgeColor: value.color });
                }
                return ({});
            });
            return ({});
        });
        this.setState({
            data: FormTypeArray,
            showLoader: false,
            searchExecuted: true
        });
    };

    getRecentSearchData = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentFormTypeSearchData', config).then(res => {
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

    searchHandler = async (FormType, type, cik) => {
        await this.setState({ FormTypeQuery: FormType, showLoader: true });
        await this.getDataFromDb();
    }

    render() {
        let { recentSearches, data, numberItems, showLoader, searchExecuted } = this.state;
        var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
        if (this.props.location.searchStrings && !this.props.location.searchExecuted) {
            this.props.location.searchExecuted = true;
            let { companySearchString, cikSearchString, formTypeSearchString } = this.props.location.searchStrings;
            this.searchHandler(formTypeSearchString, formTypeSearchString, cikSearchString);
        }
        return (
            <div className="px-4 h-100 d-flex overflow-hidden flex-column">
                <div className="py-3 d-flex flex-row">
                    <h1 className="mr-auto">Form Type Search</h1>
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
                <FormTypeSearchForm props={this.props} searchHandler={(FormType) => this.searchHandler(FormType)} />
                {(recentSearches.length) ? (<Card className="mt-2">
                    <CardHeader>Recent Form Type Searches</CardHeader>
                    <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                        <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
                            {recentSearches.map(({ FormTypeSearchString, dateSearched }, index) => {
                                return (<SmallRecentSearchCard key={index} linkto="/companysearch" formTypeSearchString={FormTypeSearchString} dateSearched={dateSearched} />);
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
                    ) : (data.map((Form, index) => {
                        if (numberItems === "All" || index < numberItems) {
                            return (
                                <Col key={index} xl={3} lg={4} md={6} sm={8} xs={12} className="mb-3">
                                    <FormTypeCard BadgeColor={Form.BadgeColor} FormType={Form.FormType} />
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

export default FormTypeSearchPage;