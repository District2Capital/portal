import React, { useContext } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import GlobalContext from '../context/global-context';
import ListFilingsCard from 'components/Card/ListFilingsCard';
import { NavLink } from 'react-router-dom';

const ListsFeedPage = () => {
    const value = useContext(GlobalContext);
    let content = '';

    if (!value.lists.lists.length) {
        content = (
            <Card className="m-2">
                <CardBody className="text-center">
                    <h4>No lists to fetch filings. <NavLink to="/createDeleteList" className="btn m-2 btn-outline-secondary">Create List</NavLink></h4>
                </CardBody>
            </Card>
        );
    }
    else {
        content = (
            <React.Fragment>
                {value.lists.lists.map((listName, i) => {
                    return (<ListFilingsCard listName={listName} />);
                })}
            </React.Fragment>
        );
    }

    return content;
}

export default ListsFeedPage;