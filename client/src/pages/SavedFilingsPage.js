import React, { Component } from 'react';
import { Badge, Col, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { Filings } from 'components/Card';
import { NavLink } from 'react-router-dom';
import { filings } from 'config/index';
import { getJwt } from 'services/auth';

class SavedFilingsPage extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
    }

    state = {
        time: Date.now(),
        data: [],
        filter: [],
        numberItems: "All",
        availableFormTypes: [],
        formdropdownOpen: false,
        numberdropdownOpen: false
    }

    async componentDidMount() {
        this._isMounted = true;
        await this.getDataFromDb();
        setInterval(await this.getDataFromDb, 10000);
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.interval);
    }

    getDataFromDb = async () => {
        if (this._isMounted) {
            var config = {
                params: { "x-auth-token": getJwt() }
            };
            await axios.get('/api/users/savedFilings', config).then(res => {
                if (!this.state.filter.length) {
                    this.setState({
                        data: res.data.savedFilings,
                        availableFormTypes: [...new Set(res.data.savedFilings.map(a => a.formType))],
                        filter: [...new Set(res.data.savedFilings.map(a => a.formType))]
                    });
                }
            });
        }
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
        var numberFilter = ["All", 5, 10, 25, 50, 100];
        return (
            <div className="px-3 h-100 d-flex overflow-hidden flex-column">
                <div className="py-3 d-flex flex-row">
                    <h1 className="mr-auto">Saved Filings</h1>
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
                <Row className="d-flex flex-grow-1">
                    <Filings data={data} filter={filter} number={numberItems} apiRoute={'sec'} />
                    {(!data.length) ? (
                        <div style={{ height: "100px", marginTop: "200px" }} className="d-flex flex-row align-items-center flex-grow-1 justify-content-center">
                            <Col><div><h3 style={{ textAlign: "center" }}>No Saved Filings</h3></div>
                                <div style={{ width: "fit-content", margin: "auto" }}><NavLink to="/search" className="btn m-2 btn-outline-secondary">Search For Filings</NavLink></div>
                            </Col>
                        </div>) : (<div></div>)}
                </Row>
            </div>
        );
    }
}

export default SavedFilingsPage;