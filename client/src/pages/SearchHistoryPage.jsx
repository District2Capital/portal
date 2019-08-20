import React, { useState, useEffect } from 'react';
import { Row, Col, Dropdown, Button, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { NavLink } from 'react-router-dom';
import { SmallRecentSearchCard } from 'components/Card';
import LoadingSpinner from 'components/LoadingSpinner';

const SearchHistoryPage = () => {
    const [data, changeData] = useState([]);
    const [filters, changeFilters] = useState([]);
    const [numberFilter, changeNumberFilter] = useState('All');
    const [typeFilter, changeTypeFilter] = useState([]);
    const [formdropdownOpen, changeFormDropDownOpen] = useState(false);
    const [numberdropdownOpen, changeNumberDropDownOpen] = useState(false);
    const [showLoader, changeShowLoader] = useState(false);
    let numberFilters = ["All", 5, 10, 25, 50, 100, 200];

    useEffect(() => {
        getDataFromDb();
        const interval = setInterval(getDataFromDb, 10000);
        return () => clearInterval(interval);
    }, []);

    const getDataFromDb = async () => {
        changeShowLoader(true);
        let config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentSearchData', config).then(res => {
            let searches = res.data.data;
            changeShowLoader(false);
            changeData(searches);
            if ((searches && searches.length) && !filters.length) {
                // Sort data by company
                let newfilters = [];
                searches.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }) => {
                    if (companySearchString && !newfilters.includes("company")) {
                        newfilters.push("company");
                    }
                    if (cikSearchString && !newfilters.includes("cik")) {
                        newfilters.push("cik");
                    }
                    if (formTypeSearchString && !newfilters.includes("formType")) {
                        newfilters.push("formType");
                    }
                });
                changeFilters([...filters, ...newfilters]);
                changeTypeFilter([...filters, ...newfilters]);
            }
        })
    };

    const clearSearchHistory = async () => {
        var params = {
            "x-auth-token": getJwt()
        };
        await axios.post(`api/users/clearSearchHistory`, params);
    }

    return (
        <div className="px-3 d-flex overflow-hidden flex-column">
            <div className="py-3 d-flex flex-row">
                <h1 className="mr-auto">Search History</h1>
                <div className="d-flex flex-wrap justify-content-end">
                    <Button style={{ padding: "10px" }} className="m-2" onClick={() => clearSearchHistory()} outline color="secondary">Clear Search History</Button>
                    <Dropdown className="p-2" style={{ width: "120px" }} isOpen={numberdropdownOpen} toggle={() => changeNumberDropDownOpen(!numberdropdownOpen)}>
                        <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
                        <DropdownMenu>
                            {numberFilters.map((number, index) => {
                                if (!index) {
                                    return (<DropdownItem key={index} onClick={() => changeNumberFilter(number)}>{number}</DropdownItem>);
                                }
                                return (<DropdownItem key={index} onClick={() => changeNumberFilter(number)}>{"<"} {number}</DropdownItem>);
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="p-2" style={{ width: "120px" }} isOpen={formdropdownOpen} toggle={() => changeFormDropDownOpen(!formdropdownOpen)}>
                        <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Type</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => changeTypeFilter(filters)}>All</DropdownItem>
                            {filters.map(searchString => (<DropdownItem key={searchString} onClick={() => changeTypeFilter([searchString])}>{searchString}</DropdownItem>))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <Row className="d-flex justify-content-center flex-grow-1">
                {data.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }, index) => {
                    if ((typeFilter.includes("company") && companySearchString) || (typeFilter.includes("cik") && cikSearchString) || (typeFilter.includes("formType") && formTypeSearchString)) {
                        if (numberFilter === 'All' || index < numberFilter) {
                            return (<SmallRecentSearchCard key={index} companySearchString={companySearchString} cikSearchString={cikSearchString} formTypeSearchString={formTypeSearchString} dateSearched={dateSearched} />);
                        }
                    }
                    return ("");
                    //<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />
                })}
                {(!data.length && showLoader) ? (<LoadingSpinner />) : ('')}
                {(!data.length && !showLoader) ? (
                    <div style={{ height: "100px", marginTop: "200px" }} className="d-flex flex-row align-items-center flex-grow-1 justify-content-center">
                        <Col><div><h3 style={{ textAlign: "center" }}>No Recent Searches</h3></div>
                            <div style={{ width: "fit-content", margin: "auto" }}><NavLink to="/search" className="btn m-2 btn-outline-secondary">Search For Filings</NavLink></div>
                        </Col>
                    </div>) : ('')}
            </Row>
        </div>
    );
}

export default SearchHistoryPage;