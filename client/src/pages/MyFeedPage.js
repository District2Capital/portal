import React from 'react';
import FollowedFormTypeFilings from 'components/Card/FollowedFormTypeFilings';
import FollowedCompanyFilings from 'components/Card/FollowedCompanyFilings';

class MyFeedPage extends React.Component {
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

export default MyFeedPage;