import React from 'react';
import ListFilingsCard from '../components/Card/ListFilingsCard';
import ListContentsCard from '../components/Card/ListContentsCard';

const ListPage = ({ listName, ...props }) => {
    // List Filings Card
    // List Contents

    console.log([].length);
    return (
        <div>
            <h1 className="m-2">{listName} List</h1>
            <ListFilingsCard listName={listName} />
            <ListContentsCard listName={listName} />
        </div>
    );
}

export default ListPage;