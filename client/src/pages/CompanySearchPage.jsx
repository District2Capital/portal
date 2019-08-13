import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Row, Dropdown, Col, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { CompanySearchForm } from 'components/Search';
import { CompanyCard, SmallRecentSearchCard } from 'components/Card';
import { withRouter } from 'react-router-dom';

const CompanySearchPage = ({ ...props }) => {
    const [recentSearches, changeRecentSearches] = useState([]);
    const [data, changeData] = useState([]);
    const [numberItems, changeNumberItems] = useState("All");
    const [numberdropdownOpen, changeNumberDropDownOpen] = useState(false);
    const [companyQuery, changeCompanyQuery] = useState("");
    const [showLoader, changeShowLoader] = useState(false);
    const [searchExecuted, changeSearchExecuted] = useState(false);
    var numberFilter = ["All", 5, 10, 25, 50, 100, 200];

    useEffect(() => {
        getRecentSearchData();
    }, []);

    const getDataFromDb = async (company, type, cik) => {
        // * Save company query as recent Company search in DB
        var companySearch = company ? company : companyQuery;
        var params = {
            "x-auth-token": getJwt(),
            companySearchString: companyQuery
        };
        await axios.post(`api/users/updateCompanySearches`, params);
        await getRecentSearchData();
        // * Fetch list of companies from DB
        await axios.get(`/api/sec/getCompanies/?company=${companySearch}`).then(res => {
            changeData(res.data.companies);
            changeShowLoader(false);
            changeSearchExecuted(true);
            updateRecentSearches();
        });
    };

    const getRecentSearchData = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentCompanySearchData', config).then(res => {
            let searches = res.data;
            if (searches && searches.data.length) {
                changeRecentSearches(searches.data);
            }
        })
            .catch(error => {
                console.log('ERROR. Could not get recent searches.');
            });
    }

    const updateRecentSearches = async () => {
        // Save queried filing as a recent search
        var params = {
            "x-auth-token": getJwt(),
            companySearchString: companyQuery
        };
        await axios.post('api/users/updateFormTypeSearches', params);
    }

    const toggleNumber = () => {
        changeNumberDropDownOpen(!numberdropdownOpen);
    }

    const handleNumberFilterClick = (clickedNumber) => {
        changeNumberItems(clickedNumber);
    }

    const searchHandler = async (company, type, cik) => {
        changeCompanyQuery(company);
        changeShowLoader(true);
        getDataFromDb(company, type, cik);
    }

    if (props.location.searchStrings && !props.location.searchExecuted) {
        props.location.searchExecuted = true;
        let { companySearchString, cikSearchString, formTypeSearchString } = props.location.searchStrings;
        searchHandler(companySearchString, formTypeSearchString, cikSearchString);
    }
    return (
        <div className="px-4 h-100 d-flex overflow-hidden flex-column">
            <div className="py-3 d-flex flex-row">
                <h1 className="mr-auto">Company Search</h1>
                <div className="d-flex flex-wrap justify-content-end">
                    <Dropdown className="p-2" style={{ width: "120px" }} isOpen={numberdropdownOpen} toggle={toggleNumber}>
                        <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
                        <DropdownMenu>
                            {numberFilter.map((number, index) => {
                                if (!index) {
                                    return (<DropdownItem key={index} onClick={() => handleNumberFilterClick(number)}>{number}</DropdownItem>);
                                }
                                return (<DropdownItem key={index} onClick={() => handleNumberFilterClick(number)}>{"<"} {number}</DropdownItem>);
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <CompanySearchForm props={props} searchHandler={(company) => searchHandler(company)} />
            {(recentSearches.length) ? (<Card className="my-2">
                <CardHeader>Recent Searches</CardHeader>
                <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                    <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
                        {recentSearches.map(({ companySearchString, dateSearched }, index) => {
                            return (<SmallRecentSearchCard key={index} linkto="/companysearch" companySearchString={companySearchString} dateSearched={dateSearched} />);
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

export default withRouter(CompanySearchPage);