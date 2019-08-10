import React from 'react';
import { CreateListCard } from 'components/Card';
import { DeleteListCard } from 'components/Card';

const CreateDeletePage = () => {
    return (
        <React.Fragment>
            <CreateListCard />
            <DeleteListCard />
        </React.Fragment>
    );
}

export default CreateDeletePage;