import React from 'react';
import CreateListCard from '../components/Card/CreateListCard';
import DeleteListCard from '../components/Card/DeleteListCard';

const CreateDeletePage = () => {
    return (
        <React.Fragment>
            <CreateListCard />
            <DeleteListCard />
        </React.Fragment>
    );
}

export default CreateDeletePage;