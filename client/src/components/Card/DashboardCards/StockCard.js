import React, { Component } from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

class StockCard extends Component {
    state = {
        symbol: "",
        open: "",
        high: "",
        low: "",
        price: "",
        volume: "",
        prevTradingDay: "",
        prevClose: "",
        change: "",
        changePercent: ""
    }

    componentDidMount() {
        this.getDataFromAV();
    }

    getDataFromAV = async () => {
        await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.props.ticker}&apikey=${process.env.ALPHAVANTAGEAPIKEY}`).then(res => {
            let stockInfo = res.data["Global Quote"];
            if (stockInfo) {
                this.setState({
                    symbol: stockInfo["01. symbol"],
                    open: stockInfo["02. open"],
                    high: stockInfo["03. high"].slice(0, -2),
                    low: stockInfo["04. low"].slice(0, -2),
                    price: "$" + stockInfo["05. price"].slice(0, -2),
                    volume: stockInfo["06. volumne"],
                    prevTradingDay: stockInfo["07. latest trading day"],
                    prevClose: stockInfo["08. previous close"],
                    change: stockInfo["09. change"].slice(0, -2),
                    changePercent: stockInfo["10. change percent"].slice(0, -3) + "%"
                });
            }
        });
    };

    handleCardColor = () => {
        let { change } = this.state;
        if (change === "" || change === 0) {
            return 'secondary';
        }
        else if (change > 0) {
            return 'green';
        }
        return 'red';
    }

    render() {
        let { symbol, price, change, changePercent } = this.state;
        return (
            <Card className="m-2" style={{ width: "140px" }} color={this.handleCardColor()}>
                <CardBody>
                    <CardTitle>{symbol}</CardTitle>
                    <CardSubtitle>{price}</CardSubtitle>
                    <CardSubtitle>{change}</CardSubtitle>
                    <CardSubtitle>{changePercent}</CardSubtitle>
                </CardBody>
            </Card>
        );
    }
}

export default StockCard;