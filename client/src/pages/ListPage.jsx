import React, { useContext } from 'react';
import { ListFilingsCard, SECFilingsCard, ListContentsCard } from 'components/Card';
import { GlobalContext } from 'context';

const ListPage = ({ listName, ...props }) => {
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