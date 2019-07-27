import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import FormTypeCard from './FormTypeCard';
import CompanyCard from './CompanyCard';
import FilingCard from './FilingCard';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { NavLink } from 'react-router-dom';

const ListContentsCard = ({ listName, ...props }) => {
    const [fetchedContent, updateContent] = useState([]);
    const [isLoading, changeLoading] = useState(false);

    const fetchListContents = async () => {
        // Fetch filings array from database
        var config = {
            params: { "x-auth-token": getJwt(), "listName": listName }
        };
        await axios.get('/api/lists/getListContents', config).then(res => {
            updateContent(res.data);
            changeLoading(false);
        }).catch(err => {
            changeLoading(false);
            console.log(err);
        });
    };

    useEffect(() => {
        changeLoading(true);
        fetchListContents();
    }, []);

    let FormTypesContent;
    let CompaniesContent;
    let SingleFilingsContent;
    let LoadingSpinner;
    let NoContent;
    if (fetchedContent.length) {
        FormTypesContent = (
            <Card className="col-lg m-2 p-0">
                <CardHeader>FormTypes</CardHeader>
                <Row style={{ overflowX: "scroll" }} className="flex-row m-2 d-flex flex-nowrap flex-grow-1">
                    {fetchedContent[0].map(({ FormType, BadgeColor }, index) => <FormTypeCard key={FormType} BadgeColor={BadgeColor} FormType={FormType} />)}
                    {!fetchedContent[0].length ? (<h4 style={{ padding: "0.75rem" }}>No FormTypes in {listName} list. Search for FormTypes: <NavLink to="/formtypesearch" className="btn m-2 btn-outline-secondary">Search Form Types</NavLink></h4>) : ''}
                </Row>
            </Card>
        );
        CompaniesContent = (
            <Card className="col-lg m-2 p-0">
                <CardHeader>Companies</CardHeader>
                <Row style={{ overflowX: "scroll" }} className="flex-row m-2 d-flex flex-nowrap flex-grow-1">
                    {fetchedContent[1].map((company, index) => <CompanyCard key={index} company={company} />)}
                    {!fetchedContent[1].length ? (<h4 style={{ padding: "0.75rem" }}>No Companies in {listName} list. Search for Companies: <NavLink to="/companysearch" className="btn m-2 btn-outline-secondary">Search Companies</NavLink></h4>) : ''}
                </Row>
            </Card>
        );
        SingleFilingsContent = (
            <Card className="col-lg m-2 p-0">
                <CardHeader>Individual Filings</CardHeader>
                <Row style={{ overflowX: "scroll" }} className="flex-row m-2 d-flex flex-nowrap flex-grow-1">
                    {fetchedContent[2].map(({ badgeColor, fileLink, formType, title, filingDate }, index) => <FilingCard badgeColor={badgeColor} fileLink={fileLink} formType={formType} title={title} filingDate={filingDate} />)}
                    {!fetchedContent[2].length ? (
                        <h4 style={{ padding: "0.75rem" }}>No individual filings in {listName} list. Search for individual filings: <NavLink to="/search" className="btn m-2 btn-outline-secondary">Search Filings</NavLink></h4>
                    ) : ''}
                </Row>
            </Card>
        );
        if ((!fetchedContent[0].length && !fetchedContent[1].length) && !fetchedContent[2].length) {
            [FormTypesContent, CompaniesContent, SingleFilingsContent] = ['', '', ''];
            NoContent = (
                <div className="m-4">
                    <h4 style={{ width: "fit-content", margin: "1rem auto" }}>No companies or filings in this list. Search and add to this list below.</h4>
                    <Row style={{ width: "fit-content", margin: "1rem auto" }}>
                        <NavLink to="/search" className="btn m-2 btn-outline-secondary">Search Filings</NavLink>
                        <NavLink to="/companysearch" className="btn m-2 btn-outline-secondary">Search Companies</NavLink>
                        <NavLink to="/formtypesearch" className="btn m-2 btn-outline-secondary">Search Form Types</NavLink>
                    </Row>
                </div>
            );
        }

    }
    else if (isLoading) {
        LoadingSpinner = (
            <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
    else {
        NoContent = (
            <div className="m-4">
                <h4 style={{ width: "fit-content", margin: "1rem auto" }}>No companies, formtypes, or filings in this list. Search and add to this list below.</h4>
                <Row style={{ width: "fit-content", margin: "1rem auto" }}>
                    <NavLink to="/search" className="btn m-2 btn-outline-secondary">Search Filings</NavLink>
                    <NavLink to="/companysearch" className="btn m-2 btn-outline-secondary">Search Companies</NavLink>
                    <NavLink to="/formtypesearch" className="btn m-2 btn-outline-secondary">Search Form Types</NavLink>
                </Row>
            </div>
        );
    }
    return (
        <Card className="m-2">
            <CardHeader>List Contents</CardHeader>
            <CardBody style={{ margin: "0.5rem", padding: "0px" }}>
                {FormTypesContent}
                {CompaniesContent}
                {SingleFilingsContent}
                {LoadingSpinner}
                {NoContent}
            </CardBody>
        </Card>
    );
}

export default ListContentsCard;