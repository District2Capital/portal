import React, { useState, useEffect } from 'react';
import { Badge, Col, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { Filings } from 'components/Card';
import { NavLink } from 'react-router-dom';
import { filings } from 'config/index';
import { getJwt } from 'services/auth';

const SavedFilingsPage = () => {
    const [data, changeData] = useState([]);
    const [filter, changeFilter] = useState([]);
    const [numberItems, changeNumberItems] = useState('All');
    const [availableFormTypes, changeAvailableFormTypes] = useState([]);
    const [formdropdownOpen, changeFormDropDownOpen] = useState(false);
    const [numberdropdownOpen, changeNumberDropDownOpen] = useState(false);
    const [showLoader, changeShowLoader] = useState(false);
    var numberFilter = ["All", 5, 10, 25, 50, 100, 200];

    useEffect(() => {
        getDataFromDb();
        const interval = setInterval(getDataFromDb(), 10000);
        return () => clearInterval(interval);
    }, []);

    const getDataFromDb = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/users/savedFilings', config).then(res => {
            if (!filter.length) {
                changeData(res.data.savedFilings);
                changeAvailableFormTypes([...new Set(res.data.savedFilings.map(a => a.formType))]);
                changeFilter([...new Set(res.data.savedFilings.map(a => a.formType))]);
            }
        });
    };

    return (
        <div className="px-3 h-100 d-flex overflow-hidden flex-column">
            <div className="py-3 d-flex flex-row">
                <h1 className="mr-auto">Saved Filings</h1>
                <div className="d-flex flex-wrap justify-content-end">
                    <Dropdown className="p-2" style={{ width: "120px" }} isOpen={numberdropdownOpen} toggle={() => changeNumberDropDownOpen(!numberdropdownOpen)}>
                        <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
                        <DropdownMenu>
                            {numberFilter.map((number, index) => {
                                if (!index) {
                                    return (<DropdownItem key={index} onClick={() => changeFilter(number)}>{number}</DropdownItem>);
                                }
                                return (<DropdownItem key={index} onClick={() => changeFilter(number)}>{"<"} {number}</DropdownItem>);
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="p-2" style={{ width: "120px" }} isOpen={formdropdownOpen} toggle={() => changeFormDropDownOpen(!formdropdownOpen)}>
                        <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Type</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => changeFilter(availableFormTypes)}>All</DropdownItem>
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
                                return (<DropdownItem key={formType} onClick={() => changeFilter([formType])}>
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

export default SavedFilingsPage;