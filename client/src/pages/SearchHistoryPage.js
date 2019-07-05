import React, { Component } from 'react';
import { Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import SmallRecentSearchCard from 'components/Card/SmallRecentSearchCard';

class SearchHistoryPage extends Component {
    state = {
        time: Date.now(),
        data: null,
        filter: [],
        numberItems: 200,
        availableFilters: ["company", "cik", "formType"],
        formdropdownOpen: false,
        numberdropdownOpen: false
    }

    async componentDidMount() {
        await this.getDataFromDb();
        setInterval(await this.getDataFromDb, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getDataFromDb = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentSearchData', config).then(res => {
            let searches = res.data;
            if (searches && searches.data.length && !this.state.filter.length) {
                // Sort data by company
                var newfilters = [];
                searches.data.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }) => {
                    if (companySearchString && !this.state.filter.includes("company")) {
                        newfilters.push("company");
                    }
                    if (cikSearchString && !this.state.filter.includes("cik")) {
                        newfilters.push("cik");
                    }
                    if (formTypeSearchString && !this.state.filter.includes("formType")) {
                        newfilters.push("formType");
                    }
                    return ("");
                });
                this.setState({
                    data: searches.data,
                    filter: [...this.state.filter, ...newfilters],
                    defaultData: false
                });
            }
        })
            .catch(error => {
                console.log('ERROR. Could not get recent searches.');
            });
    };

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


    render() {
        let { data, filter, availableFilters } = this.state;
        if (!data) data = [];
        var numberFilter = [5, 10, 25, 50, 100];
        var counter;
        return (
            <div className="px-3 h-100 d-flex overflow-hidden flex-column">
                <div className="py-3 d-flex flex-row">
                    <h1 className="mr-auto">Search History</h1>
                    <div className="d-flex flex-wrap justify-content-end">
                        <Dropdown className="p-2" style={{ width: "120px" }} isOpen={this.state.numberdropdownOpen} toggle={this.toggleNumber}>
                            <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
                            <DropdownMenu>
                                {numberFilter.map((number, index) => (<DropdownItem key={index} onClick={() => this.handleNumberFilterClick(number)}>{numberFilter[index - 1] || 0} - {number}</DropdownItem>))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown className="p-2" style={{ width: "120px" }} isOpen={this.state.formdropdownOpen} toggle={this.toggleFormType}>
                            <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Type</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => this.handleFilterClick(availableFilters)}>All</DropdownItem>
                                {availableFilters.map(searchString => (<DropdownItem key={searchString} onClick={() => this.handleFilterClick([searchString])}>{searchString}</DropdownItem>))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <Row className="d-flex justify-content-center flex-grow-1">
                    {data.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }) => {
                        if ((filter.includes("company") && companySearchString) || (filter.includes("cik") && cikSearchString) || (filter.includes("formType") && formTypeSearchString)) {
                            return (<SmallRecentSearchCard key={counter++} companySearchString={companySearchString} cikSearchString={cikSearchString} formTypeSearchString={formTypeSearchString} dateSearched={dateSearched} />);
                        }
                        return ("");
                        //<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />
                    })}
                </Row>
            </div>
        );
    }
}

export default SearchHistoryPage;