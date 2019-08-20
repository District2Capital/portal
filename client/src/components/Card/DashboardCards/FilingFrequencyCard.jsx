import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Row } from 'reactstrap';
import { Chart } from '@bit/primefaces.primereact.chart';
import axios from 'axios';
import LoadingSpinner from 'components/LoadingSpinner';

const FilingFrequencyCard = () => {
    const [data, changeData] = useState({
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']
            }
        ]
    });
    const [filingCount, changeFilingCount] = useState(5);
    const [defaultFilings, changeDefaultFilings] = useState(true);

    useEffect(() => {
        getFilingFrequency();
        const interval = setInterval(getFilingFrequency(), 10000);
        return () => clearInterval(interval);
    }, []);

    const getFilingFrequency = async () => {
        await axios.get(`/api/stats/getFilingFrequencyData/?count=${filingCount}`).then(res => {
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
                changeData({
                    labels: distinctItems,
                    datasets: [
                        {
                            data: itemFrequency,
                            backgroundColor: data.datasets[0].backgroundColor,
                            hoverBackgroundColor: data.datasets[0].hoverBackgroundColor,
                        }
                    ]
                });
                changeDefaultFilings(false);
            }
        })
            .catch(error => {
                console.log('ERROR::Could not get form frequencies.');
            });
    };

    if (defaultFilings) {
        return (
            <Card className="m-2" style={{ width: 300 }}>
                <CardHeader>Top Filings</CardHeader>
                <LoadingSpinner />
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

export default FilingFrequencyCard;