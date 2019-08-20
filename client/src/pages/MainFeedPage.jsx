import React from 'react';
import { FollowedFormTypeFilings, FollowedCompanyFilings } from 'components/Card';

const MainFeedPage = () => {
    return (
        <div className="px-3 h-100 d-flex overflow-hidden flex-column">
            <FollowedCompanyFilings />
            <FollowedFormTypeFilings />
        </div>
    );
};

export default MainFeedPage;