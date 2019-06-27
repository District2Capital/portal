import React from 'react';
import axios from 'axios';
import { Card, CardBody, Button, CardHeader, Col, Row, Table } from 'reactstrap';

class FilingSpreadsheet extends React.Component {
    state = {
        data: null
    }

    async componentDidMount() {
        await this.getDataFromGoogleSheets();
        setInterval(await this.getDataFromGoogleSheets, 10000);
    }

    getDataFromGoogleSheets = async () => {
        console.log('Spreadsheet data updated.');
        await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1RV46luph_aEURrcXLLFC5C3NksRTM6uF_P2m6uoDR78/values:batchGet?dateTimeRenderOption=SERIAL_NUMBER&majorDimension=ROWS&ranges=B%3AE&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDRzWoZ_fXKy5xqE2qDitRcxHeYI_-_npM').then((res) => {
            this.setState({ data: res });
        });
    }

    render() {
        let header = this.state.data ? this.state.data.data.valueRanges[0].values[1] : [];
        let rows = this.state.data ? this.state.data.data.valueRanges[0].values.splice(2) : [];
        if (!rows) {
            return (
                <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                    <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
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
}

export default FilingSpreadsheet;