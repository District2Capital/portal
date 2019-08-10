import React, { useContext } from 'react';
import { ListFilingsCard } from 'components/Card';
import { ListContentsCard } from 'components/Card';
import GlobalContext from '../context/global-context';
import { SECFilingsCard } from 'components/Card';

const ListPage = ({ listName, ...props }) => {
    // List Filings Card
    // List Contents

    const value = useContext(GlobalContext);

    let content;
    if (value && value.lists.lists.includes(listName)) {
        content = (
            <SECFilingsCard listName={listName} count={15} />
        );
    }
    return (
        <div>
            <h1 className="m-2">{listName} List</h1>
            <ListFilingsCard listName={listName} />
            <ListContentsCard listName={listName} />
            {content}
        </div>
    );
}

export default ListPage;