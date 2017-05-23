import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { StockObject, Info, ReportDate, Stock, Return } from "./stock.model";

@Injectable()
export class StocksService {
    private stocks: StockObject[] = [];
    stocksIsEdit = new EventEmitter<StockObject>();

    constructor(private http: Http) {
    }

    getStocks() {
        return this.http.get('http://localhost:3000/stocks')
            .map((response: Response) => {
                const stocks = response.json().obj;
                let transformedStocks: StockObject[] = [];
                for (let stock of stocks) {
                    console.log(stock.Info.ReportDate)
                    transformedStocks.push(new StockObject(
                            new Info(
                                stock.Info.ISIN,
                                stock.Info.CompanyName,
                                stock.Info.Ticker,
                                stock.Info.Country,
                                stock.Info.List,
                                stock.Info.Industry,
                                new ReportDate(
                                    stock.Info.ReportDate.Next
                                )
                            ),
                            new Stock(
                                stock.Stock.LatestPrice,
                                new Return(
                                    stock.Stock.Return.Act_1d,
                                    stock.Stock.Return.Act_1w,
                                    stock.Stock.Return.Act_1m,
                                    stock.Stock.Return.Act_3m,
                                    stock.Stock.Return.Act_6m,
                                    stock.Stock.Return.Act_1y,
                                    stock.Stock.Return.Act_3y,
                                    stock.Stock.Return.Act_5y
                                )
                            )
                        )
                    );
                }
                this.stocks = transformedStocks;
                return transformedStocks;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}

// var schema = new Schema({
//     Info: {
//         ISIN: {type: String, required: true},
//         CompanyName: {type: String, required: true},
//         Ticker: {type: String, required: true},
//         Country: {type: String, required: true},
//         List: {type: String, required: true},
//         Industry: {type: String, required: true},
//         ReportDate: {
//             Next: {type: String, required: true}
//         }
//     }