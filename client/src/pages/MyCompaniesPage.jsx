import React, { useState, useEffect } from 'react';
import { Row, Dropdown, Col, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { NavLink } from 'react-router-dom';
import { CompanyCard } from 'components/Card';
import LoadingSpinner from 'components/LoadingSpinner';

const MyCompaniesPage = () => {
    const [data, changeData] = useState([]);
    const [numberItems, changeNumberItems] = useState('All');
    const [numberdropdownOpen, changeNumberDropDownOpen] = useState(false);
    const [showLoader, changeShowLoader] = useState(false);
    var numberFilter = ["All", 5, 10, 25, 50, 100, 200];

    useEffect(() => {
        getDataFromDb();
        const interval = setInterval(getDataFromDb(), 10000);
        return () => clearInterval(interval);
    }, []);

    const getDataFromDb = async () => {
        changeShowLoader(true);
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/users/savedCompanies', config).then(res => {
            changeData(res.data.savedCompanies);
            changeShowLoader(false);
        });
    };

    return (
        <div className="px-3 d-flex overflow-hidden flex-column">
            <div className="py-3 d-flex flex-row">
                <h1 className="mr-auto">Followed Companies</h1>
                <div className="d-flex flex-wrap justify-content-end">
                    <Dropdown className="p-2" style={{ width: "120px" }} isOpen={numberdropdownOpen} toggle={() => changeNumberDropDownOpen(!numberdropdownOpen)}>
                        <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
                        <DropdownMenu>
                            {numberFilter.map((number, index) => {
                                if (!index) {
                                    return (<DropdownItem key={index} onClick={() => changeNumberItems(number)}>{number}</DropdownItem>);
                                }
                                return (<DropdownItem key={index} onClick={() => changeNumberItems(number)}>{"<"} {number}</DropdownItem>);
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <Row className="d-flex justify-content-center flex-grow-1">
                {(showLoader) ? (
                    <LoadingSpinner />
                ) : (data.map((company, index) => {
                    if (numberItems === "All" || index < numberItems) {
                        return (
                            <Col key={index} xl={3} lg={4} md={6} sm={8} xs={12} className="mb-3">
                                <CompanyCard company={company} />
                            </Col>
                        );
                    }
                    return (<div></div>);
                }
                ))}
                {(!data.length && !showLoader) ? (
                    <div style={{ height: "100px", marginTop: "200px" }} className="d-flex flex-row align-items-center flex-grow-1 justify-content-center">
                        <Col><div><h3 style={{ textAlign: "center" }}>No Followed Companies</h3></div>
                            <div style={{ width: "fit-content", margin: "auto" }}><NavLink to="/companysearch" className="btn m-2 btn-outline-secondary">Search For Companies</NavLink></div>
                        </Col>
                    </div>) : (<div></div>)}
            </Row>
        </div>
    );
}

export default MyCompaniesPage;