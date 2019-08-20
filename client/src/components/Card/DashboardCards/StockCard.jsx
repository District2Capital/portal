import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

const StockCard = ({ ticker, ...props }) => {
    const [Symbol, changeSymbol] = useState("");
    // const [Open, changeOpen] = useState("");
    // const [High, changeHigh] = useState("");
    // const [Low, changeLow] = useState("");
    const [Price, changePrice] = useState("");
    // const [Volume, changeVolume] = useState("");
    // const [PrevTradingDay, changePrevTradingDay] = useState("");
    // const [PrevClose, changePrevClose] = useState("");
    const [Change, changeChange] = useState("");
    const [Color, changeColor] = useState("");
    const [ChangePercent, changeChangePercent] = useState("");

    useEffect(() => {
        getDataFromAV();
    }, []);

    const getDataFromAV = async () => {
        await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.ALPHAVANTAGEAPIKEY}`).then(res => {
            let stockInfo = res.data["Global Quote"];
            if (stockInfo) {
                changeSymbol(stockInfo["01. symbol"]);
                // changeOpen(stockInfo["02. open"]);
                // changeHigh(stockInfo["03. high"].slice(0, -2));
                // changeLow(stockInfo["04. low"].slice(0, -2));
                changePrice("$" + stockInfo["05. price"].slice(0, -2));
                // changeVolume(stockInfo["06. volumne"]);
                // changePrevTradingDay(stockInfo["07. latest trading day"]);
                // changePrevClose(stockInfo["08. previous close"]);
                changeChangePercent(stockInfo["10. change percent"].slice(0, -3) + "%");
                changeChange(stockInfo["09. change"].slice(0, -2));
                if (Change === "" || Change === 0) {
                    changeColor('secondary');
                } else if (Change > 0) {
                    changeColor('green');
                }
                else {
                    changeColor('red');
                }
            }
        });
    };

    return (
        <Card className="m-2" style={{ width: "140px" }} color={Color}>
            <CardBody>
                <CardTitle>{Symbol}</CardTitle>
                <CardSubtitle>{Price}</CardSubtitle>
                <CardSubtitle>{Change}</CardSubtitle>
                <CardSubtitle>{ChangePercent}</CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default StockCard;