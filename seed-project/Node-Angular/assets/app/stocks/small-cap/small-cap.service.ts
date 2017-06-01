import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { StockObject, Info, ReportDate, Stock, Return, Valuation, P_E, P_S, P_FCF, TA, Strat, Profitability } from "../models/stock.model";

@Injectable()
export class SmallCapService {
    private stocks: StockObject[] = [];
    stocksIsEdit = new EventEmitter<StockObject>();

    constructor(private http: Http) {
    }

    getStocks() {
        return this.http.get('http://localhost:3000/stocks_smallcap')
            .map((response: Response) => {
                const stocks = response.json().obj;
                let transformedStocks: StockObject[] = [];
                for (let stock of stocks) {
                    console.log(stock)
                    transformedStocks.push(
                        new StockObject(
                            new Info(
                                stock.Info.ISIN,
                                stock.Info.CompanyDescription,
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
                            ),
                            new Valuation(
                                stock.Valuation.MarketCap,
                                new P_E (
                                    stock.Valuation.P_E.Latest,
                                    stock.Valuation.P_E.Avg_1y,
                                    stock.Valuation.P_E.Avg_3y
                                ),
                                new P_S (
                                    stock.Valuation.P_S.Latest,
                                    stock.Valuation.P_S.Avg_1y,
                                    stock.Valuation.P_S.Avg_3y
                                ),
                                new P_FCF (
                                    stock.Valuation.P_FCF.Latest,
                                    stock.Valuation.P_FCF.Avg_1y,
                                    stock.Valuation.P_FCF.Avg_3y
                                )
                            ),
                            new TA (
                                stock.TA.MA5_MA20,
                                stock.TA.MA20_MA70,
                                stock.TA.MA50_MA200
                            ),
                            new Strat (
                                stock.Strat.Graham
                            ),
                            new Profitability (
                                stock.Profitability.ROC
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