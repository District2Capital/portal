import React from 'react';
import { Badge, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { Filings } from '../components/Card';
import { filings } from '../config';

class XBRLFeedPage extends React.Component {

  state = {
    time: Date.now(),
    data: null,
    intervalIsSet: false,
    filter: [],
    numberItems: 200,
    availableFormTypes: [],
    formdropdownOpen: false,
    numberdropdownOpen: false
  }

  componentDidMount() {
    if (!this.state.intervalIsSet) {
      this.getDataFromDb();
      setInterval(this.getDataFromDb, 10000);
      this.setState({ intervalIsSet: true });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getDataFromDb = async () => {
    await axios.get('/api/edgar/getData').then(res => {
      if (!this.state.filter.length) {
        this.setState({
          data: res.data,
          availableFormTypes: [...new Set(res.data.items.map(a => a.formType))],
          filter: [...new Set(res.data.items.map(a => a.formType))]
        });
      }
    });
  };

  toggleFormType = () => {
    this.setState({
      formdropdownOpen: !this.state.formdropdownOpen
    });
  }

  toggleNumber = () => {
    this.setState({
      numberdropdownOpen: !this.state.numberdropdownOpen
    });
  }

  handleFilterClick(clickedFormType) {
    this.setState({ filter: clickedFormType });
  }

  handleNumberFilterClick(clickedFormType) {
    this.setState({ numberItems: clickedFormType });
  }

  render() {
    let { data, filter, availableFormTypes, numberItems } = this.state;
    if (!data) data = {};
    var numberFilter = [5, 10, 25, 50, 100, 200];
    return (
      <div className="px-3 h-100 d-flex overflow-hidden flex-column">
        <div className="py-3 d-flex flex-row">
          <h1 className="mr-auto">Edgar Filings</h1>
          <div className="d-flex flex-wrap justify-content-end">
            <Dropdown className="p-2" style={{ width: "120px" }} isOpen={this.state.numberdropdownOpen} toggle={this.toggleNumber}>
              <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
              <DropdownMenu>
                {numberFilter.map((number, index) => (<DropdownItem key={index} onClick={() => this.handleNumberFilterClick(number)}>{numberFilter[index - 1] || 0} - {number}</DropdownItem>))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="p-2" style={{ width: "120px" }} isOpen={this.state.formdropdownOpen} toggle={this.toggleFormType}>
              <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Type</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.handleFilterClick(availableFormTypes)}>All</DropdownItem>
                {availableFormTypes.map(formType => {
                  var badgeColor = "primary";
                  var values = Object.values(filings);
                  for (var key = 0; key < values.length; key++) {
                    for (var filing = 0; filing < values[key].filingArray.length; filing++) {
                      if (formType === values[key].filingArray[filing]) {
                        badgeColor = values[key].color;
                      }
                    }
                  }
                  return (<DropdownItem key={formType} onClick={() => this.handleFilterClick([formType])}>
                    {formType} <Badge color={badgeColor}>{formType}</Badge>
                  </DropdownItem>);
                })}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <Row className="d-flex justify-content-center flex-grow-1">
          <Filings data={data.items} filter={filter} number={numberItems} apiRoute={'edgar'} />
        </Row>
      </div>
    );
  }
};

export default XBRLFeedPage;
