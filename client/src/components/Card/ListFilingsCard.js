import React, { useState, useEffect } from 'react';
//import GlobalContext from '../../context/global-context';
import FollowedFilingCard from './FollowedFilingCard';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

const ListFilingsCard = ({ listName, ...props }) => {

    //const value = useContext(GlobalContext);
    const [fetchedFilings, updateFilings] = useState([]);
    const [isLoading, changeLoading] = useState(false);

    const fetchListFilings = async () => {
        // Fetch filings array from database
        var config = {
            params: { "x-auth-token": getJwt(), "listName": listName }
        };
        await axios.get('/api/lists/getListFilings', config).then(res => {
            updateFilings(res.data);
        }).catch(err => {
            changeLoading(false);
            console.log(err);
        });
    };

    useEffect(() => {
        changeLoading(true);
        fetchListFilings();
        const timer = setInterval(() => {
            fetchListFilings();
        }, 10000);
    }, []);


    let content;
    if (fetchedFilings.length) {
        content = fetchedFilings.map(({ badgeColor, identifier, fileLink, formType, title, filingDate, companyName }, index) => <FollowedFilingCard key={identifier} companyName={companyName} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={fileLink} apiRoute={'lists'} />);
    }
    else if (isLoading) {
        content = (
            <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
    else {
        content = (
            <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
                <h3>No Filings From List</h3>
            </div>
        );
    }
    return (
        <Card className="m-2">
            <CardHeader>List Filings</CardHeader>
            <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
                <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
                    {content}
                </Row>
            </CardBody>
        </Card>
    );

}

export default ListFilingsCard;