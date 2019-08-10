import React from 'react';
import { FollowedFormTypeFilings } from 'components/Card';
import { FollowedCompanyFilings } from 'components/Card';

class MainFeedPage extends React.Component {
    state = {}
    render() {
        return (
            <div className="px-3 h-100 d-flex overflow-hidden flex-column">
                <FollowedCompanyFilings />
                <FollowedFormTypeFilings />
            </div>
        );
    }
};

export default MainFeedPage;