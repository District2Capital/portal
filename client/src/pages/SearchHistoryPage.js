import React, { Component } from 'react';
import { Badge, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { filings } from '../config';

class SearchHistoryPage extends Component {
    state = {
        time: Date.now(),
        data: null,
        filter: [],
        numberItems: 200,
        availableFormTypes: [],
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
                this.setState({
                    data: searches.data,
                    availableFormTypes: [...new Set(res.data.items.map(a => a.formType))],
                    filter: [...new Set(res.data.items.map(a => a.formType))],
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
        let { data, filter, availableFormTypes, numberItems } = this.state;
        if (!data) data = {};
        var numberFilter = [5, 10, 25, 50, 100];
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
                <Row className="d-flex justify-content-center flex-grow-1">
                    <h1>Search Card Goes Here </h1>
                </Row>
            </div>
        );
    }
}

export default SearchHistoryPage;