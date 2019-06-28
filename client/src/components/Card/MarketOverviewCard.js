import React from 'react';
import {
    Card,
    Row,
    CardBody,
    CardHeader,
} from 'reactstrap';
import StockCard from './StockCard';

const usMarkets = [".DJI", ".SPX", "NASDAQ:^RUT", "NASDAQ:^IXIC"];

const MarketOverviewCard = () => {
    return (
        <Card className="m-2">
            <CardHeader>US Market Overview</CardHeader>
            <CardBody>
                <Row className="d-flex flex-wrap justify-content-center">
                    <Row className="d-flex m-0 justify-content-center">
                        <StockCard ticker={usMarkets[0]} />
                        <StockCard ticker={usMarkets[1]} />
                    </Row>
                    <Row className="d-flex m-0 justify-content-center">
                        <StockCard ticker={usMarkets[2]} />
                        <StockCard ticker={usMarkets[3]} />
                    </Row>
                </Row>
            </CardBody>
        </Card>
    );
}

export default MarketOverviewCard;