import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, Button, CardHeader, Col, Row, Table } from 'reactstrap';
import LoadingSpinner from 'components/LoadingSpinner';

const FilingSpreadsheet = () => {
    const [data, changeData] = useState(null);

    useEffect(() => {
        getDataFromGoogleSheets();
        const interval = setInterval(getDataFromGoogleSheets(), 10000);
        return () => clearInterval(interval);
    }, []);

    const getDataFromGoogleSheets = async () => {
        await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1RV46luph_aEURrcXLLFC5C3NksRTM6uF_P2m6uoDR78/values:batchGet?dateTimeRenderOption=SERIAL_NUMBER&majorDimension=ROWS&ranges=B%3AE&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDRzWoZ_fXKy5xqE2qDitRcxHeYI_-_npM').then((res) => {
            changeData(res);
        });
    }

    let header = data ? data.data.valueRanges[0].values[1] : [];
    let rows = data ? data.data.valueRanges[0].values.splice(2) : [];
    if (!rows) {
        return (<LoadingSpinner />);
    }
    return (
        <Row className="mx-2">
            <Col>
                <Card className="mb-3">
                    <CardHeader>Aggregate SEC Filings</CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    {header.map((value, key) => {
                                        return (
                                            <th key={key}>{value}</th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((eachrow, rowkey) => {
                                    return (
                                        <tr key={rowkey}>
                                            {eachrow.map((value, valuekey) => {
                                                if (valuekey === 3) {
                                                    return (
                                                        <td key={valuekey}>
                                                            <Button href={value}>View Filing</Button>
                                                        </td>
                                                    )
                                                }
                                                return (
                                                    <td key={valuekey}>{value}</td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>

    );
}

export default FilingSpreadsheet;