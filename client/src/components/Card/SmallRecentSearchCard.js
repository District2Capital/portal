import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { MdAccountBalance, MdFingerprint, MdLabelOutline } from 'react-icons/md';

class SmallRecentSearchCard extends Component {
    state = {}
    render() {
        // { dateSearched } = this.props
        const { companySearchString, cikSearchString, formTypeSearchString } = this.props;
        return (
            <Card className="m-2 flex-row">
                <CardBody className="p-2">
                    {companySearchString ? <div className="ml-2 d-flex" style={{ height: "100%", alignItems: "center", justifyContent: "space-between" }}><div><MdAccountBalance /> {companySearchString}</div><Button outline color="secondary">Search</Button></div> : <div></div>}
                    {cikSearchString ? <div className="ml-2 d-flex" style={{ height: "100%", alignItems: "center", justifyContent: "space-between" }}><div><MdFingerprint /> {cikSearchString}</div><Button outline color="secondary">Search</Button></div> : <div></div>}
                    {formTypeSearchString ? <div className="ml-2 d-flex" style={{ height: "100%", alignItems: "center", justifyContent: "space-between" }}><div><MdLabelOutline /> {formTypeSearchString}</div><Button outline color="secondary">Search</Button></div> : <div></div>}
                </CardBody>
            </Card>
        );
    }
}

export default SmallRecentSearchCard;