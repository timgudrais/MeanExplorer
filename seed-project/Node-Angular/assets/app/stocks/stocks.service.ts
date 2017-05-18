import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Stock } from "./stock.model";

@Injectable()
export class StocksService {
    private stocks: Stock[] = [];
    stocksIsEdit = new EventEmitter<Stock>();

    constructor(private http: Http) {
    }

    getStocks() {
        return this.http.get('http://localhost:3000/stocks')
            .map((response: Response) => {
                const stocks = response.json().obj;
                let transformedStocks: Stock[] = [];
                for (let stock of stocks) {
                    transformedStocks.push(new Stock(
                        stock.Bolagsnamn,
                        stock.ISIN,
                        stock.Ticker,
                        stock.Aktiekurs,
                        stock.Lista,
                        stock.Land,
                        stock.Bransch,
                        stock.Börsvärde)
                    );
                }
                this.stocks = transformedStocks;
                return transformedStocks;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}