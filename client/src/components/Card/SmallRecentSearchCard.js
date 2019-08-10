import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { MdAccountBalance, MdFingerprint, MdLabelOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
class SmallRecentSearchCard extends Component {
    state = {}
    render() {
        // { dateSearched } = this.props
        const { companySearchString, cikSearchString, formTypeSearchString, linkto } = this.props;
        return (
            <Card className="m-2 flex-row" style={{ minWidth: "150px" }}>
                <CardBody className="p-2 m-auto">
                    {companySearchString ? <div className="d-flex" style={{ justifyContent: "center" }}><div style={{ margin: "10px" }}><MdAccountBalance /> {companySearchString}</div></div> : <div></div>}
                    {cikSearchString ? <div className="d-flex" style={{ justifyContent: "center" }}><div style={{ margin: "10px" }}><MdFingerprint /> {cikSearchString}</div></div> : <div></div>}
                    {formTypeSearchString ? <div className="d-flex" style={{ justifyContent: "center" }}><div style={{ margin: "10px" }}><MdLabelOutline /> {formTypeSearchString}</div></div> : <div></div>}
                    <div style={{ width: "min-content", margin: "0px auto" }}><NavLink to={{ pathname: linkto, searchExecuted: false, searchStrings: { companySearchString, cikSearchString, formTypeSearchString } }} className="btn btn-outline-info text-info bg-white">Search</NavLink></div>
                </CardBody>
            </Card>
        );
    }
}

export default SmallRecentSearchCard;