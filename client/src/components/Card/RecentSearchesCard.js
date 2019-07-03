import React, { Component } from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';

class RecentSearchesCard extends Component {
    state = {
        data: [],
        SearchesCount: 5,
        defaultData: true
    }

    componentDidMount() {
        this.getRecentSearches();
    }

    getRecentSearches = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/stats/getRecentSearchData', config).then(res => {
            let searches = res.data;
            if (searches && searches.data.length) {
                this.setState({
                    data: searches.data.splice(0, this.state.filingCount),
                    defaultData: false
                });
            }
        })
            .catch(error => {
                console.log('ERROR. Could not get recent searches.');
            });
    };

    render() {
        const { data, defaultData } = this.state;
        if (defaultData) {
            return (
                <Card className="m-2" style={{ width: 350 }}>
                    <CardHeader>Recent Searches</CardHeader>
                    <div className="d-flex m-3 align-items-center flex-grow-1 justify-content-center">
                        <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Card>);
        }
        return (
            <Card className="m-2" style={{ maxWidth: 350 }}>
                <CardHeader>Recent Searches</CardHeader>
                <Col className="justify-content-center">
                    {/*data.map(({ title, formType, filingDate, htmlLink, badgeColor }) => (<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />))
                    */}
                </Col>
            </Card>
        );
    }
}

export default RecentSearchesCard;