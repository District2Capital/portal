import React, { Component } from 'react';
import { Row, Dropdown, Col, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { getJwt } from 'services/auth';
import FormTypeCard from 'components/Card/FormTypeCard';

class MyFormTypesPage extends Component {

    state = {
        time: Date.now(),
        data: [],
        numberItems: "All",
        numberdropdownOpen: false,
        showLoader: false
    }

    async componentDidMount() {
        await this.getDataFromDb();
        setInterval(await this.getDataFromDb, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getDataFromDb = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        await axios.get('/api/users/savedFormTypes', config).then(res => {
            this.setState({
                data: res.data.savedFormTypes
            });
        });
    };

    toggleNumber = () => {
        this.setState({
            numberdropdownOpen: !this.state.numberdropdownOpen
        });
    }

    handleNumberFilterClick(clickedNumber) {
        this.setState({ numberItems: clickedNumber });
    }

    render() {
        let { data, numberItems, showLoader } = this.state;
        var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
        return (
            <div className="px-3 h-100 d-flex overflow-hidden flex-column">
                <div className="py-3 d-flex flex-row">
                    <h1 className="mr-auto">Followed FormTypes</h1>
                    <div className="d-flex flex-wrap justify-content-end">
                        <Dropdown className="p-2" style={{ width: "120px" }} isOpen={this.state.numberdropdownOpen} toggle={this.toggleNumber}>
                            <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
                            <DropdownMenu>
                                {numberFilter.map((number, index) => {
                                    if (!index) {
                                        return (<DropdownItem key={index} onClick={() => this.handleNumberFilterClick(number)}>{number}</DropdownItem>);
                                    }
                                    return (<DropdownItem key={index} onClick={() => this.handleNumberFilterClick(number)}>{"<"} {number}</DropdownItem>);
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <Row className="d-flex justify-content-center flex-grow-1">
                    {(showLoader) ? (
                        <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                            <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (data.map((Form, index) => {
                        if (numberItems === "All" || index < numberItems) {
                            return (
                                <Col key={index} xl={3} lg={4} md={6} sm={8} xs={12} className="mb-3">
                                    <FormTypeCard BadgeColor={Form.BadgeColor} FormType={Form.FormType} />
                                </Col>
                            );
                        }
                        return (<div></div>);
                    }
                    ))}
                </Row>
            </div>
        );
    }
}

export default MyFormTypesPage;