import React from 'react';
import { CreateListCard, DeleteListCard } from 'components/Card';

const CreateDeletePage = () => {
    return (
        <React.Fragment>
            <CreateListCard />
            <DeleteListCard />
        </React.Fragment>
    );
}

export default CreateDeletePage;