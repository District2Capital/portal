import React, { Component } from 'react';
import { Card, CardHeader, Row } from 'reactstrap';
import { Chart } from '@bit/primefaces.primereact.chart';
import axios from 'axios';

class FilingFrequencyCard extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
    }

    state = {
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [
                {
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']
                }
            ]
        },
        filingCount: 5,
        defaultFilings: true
    }

    async componentDidMount() {
        this._isMounted = true;
        await this.getFilingFrequency();
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.interval);
    }

    getFilingFrequency = async () => {
        if (this._isMounted) {
            await axios.get(`/api/stats/getFilingFrequencyData/?count=${this.state.filingCount}`).then(res => {
                // Return array of arrays in format: ['formType', frequency]
                let sorted = res.data;
                var itemFrequency = [];
                var distinctItems = [];
                var total = 0;
                if (sorted) {
                    for (var each = 0; each < sorted.length; each++) {
                        total += sorted[each][1][1];
                    }
                    for (each = 0; each < sorted.length; each++) {
                        itemFrequency.push(Math.round(sorted[each][1][1] / total * 100) / 100);
                        distinctItems.push(sorted[each][1][0]);
                    }
                    this.setState({
                        data: {
                            labels: distinctItems,
                            datasets: [
                                {
                                    data: itemFrequency,
                                    backgroundColor: this.state.data.datasets[0].backgroundColor,
                                    hoverBackgroundColor: this.state.data.datasets[0].hoverBackgroundColor,
                                }
                            ]
                        },
                        filingCount: this.state.filingCount,
                        defaultFilings: false
                    });
                }
            })
                .catch(error => {
                    console.log('ERROR::Could not get form frequencies.');
                });
        }
    };

    render() {
        const { data, defaultFilings } = this.state;
        if (defaultFilings) {
            return (
                <Card className="m-2" style={{ width: 300 }}>
                    <CardHeader>Top Filings</CardHeader>
                    <div className="d-flex m-3 align-items-center flex-grow-1 justify-content-center">
                        <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Card>
            );
        }
        return (
            <Card className="m-2" style={{ width: 300 }}>
                <CardHeader>Top Filings</CardHeader>
                <Row className="d-flex m-3 justify-content-center">
                    <Chart type='pie' data={data} />
                </Row>
            </Card>
        );
    }
}

export default FilingFrequencyCard;