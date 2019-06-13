import React from 'react';
import { Row } from 'reactstrap';
import axios from 'axios';
import { EdgarFiling } from '../components/Card';

class EdgarFeed extends React.Component {

  state = {
    time: Date.now(),
    data: null,
    intervalIsSet: false,
    filter: null
  }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 10000);
      this.setState({ intervalIsSet: interval });
    }
  }

  getDataFromDb = () => {
    axios.get('/api/edgar/getData').then(res => {
      this.setState({ data: res.data });
    });
    //console.log(this.state.data);
  };

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  render() {
    const { data, filter } = this.state;
    var availableFormTypes = [];
    if (data != null) availableFormTypes = [...new Set(data.items.map(a => a.formType))];
    console.log(availableFormTypes);
    return (
      <div className="px-3">
        <div className="py-3 d-flex flex-row">
          <h1>Edgar XBRL Filings</h1>
          <div className="dropdown ml-auto p-2">
            <button className="btn float-right btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Form Type</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {availableFormTypes.map(formType => (<a key={formType} className="dropdown-item" href="/">{formType}</a>))}
            </div>
          </div>
        </div>
        <Row className="d-flex justify-content-center">
          <EdgarFiling data={data} filter={filter} />
        </Row>
      </div>
    );
  }
};

export default EdgarFeed;
