import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { StockObject, Info, Stock, Return, Valuation, P_E, P_S, P_FCF, TA, Strategy, Profitability, BalanceSheet, IncomeStatement, Price, NrShares, Growth, AssetTurnover, CurrentRatio, DebtPerShare, Equity, EquityPerShare, NetDebt, Net, NetProfit, NetProfitMargin, TotalAssets, Revenue, Dividend, DividendRatio, CashFlowOperations, ROC, EBITMargin, Efficiency, ROE, Insider, Average, GrossMargin, ROAG, GrowthPlusQ} from "./models/stock.model";

@Injectable()
export class StockService {
    private stocks: StockObject[] = [];
    stocksIsEdit = new EventEmitter<StockObject>();

    constructor(private http: Http) {
    }
	getLocalStocks(url: string) {
		return this.http.get(url)
			.map((response: Response) => {                
				return response.json().obj;				 
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}
	
    getStocks(url: string) {
        return this.http.get(url)
            .map((response: Response) => {
                const stocks = response.json().obj;
                let transformedStocks: StockObject[] = [];
                for (let stock of stocks) {
                    // console.log(stock)
                    transformedStocks.push(
                        new StockObject(
                            new Info(
                                stock.Info.ISIN,
                                stock.Info.CompanyDescription,
                                stock.Info.CompanyName,
                                stock.Info.Country,
                                stock.Info.Industry,
                                stock.Info.List,
                                stock.Info.Ticker
                            ),
                            new Stock(
                                new Price(
                                    stock.Stock.Price.Latest
                                ),
                                new Return(
                                    stock.Stock.Return.Actual_3m
                                ),
                                stock.Stock.MarketCap,
                                new NrShares(
                                    stock.Stock.NrShares.Latest,
                                    new Growth(
                                        stock.Stock.NrShares.Growth.Actual_1y
                                    )
                                )
                            ),
                            new BalanceSheet(
                                new AssetTurnover(
                                    stock.BalanceSheet.AssetTurnover.Latest
                                ),
                                new CurrentRatio(
                                    stock.BalanceSheet.CurrentRatio.Latest,
                                    new Growth(
                                        stock.BalanceSheet.CurrentRatio.Growth.Actual_1y
                                    )
                                ),
                                new DebtPerShare(
                                    stock.BalanceSheet.DebtPerShare.Latest
                                ),
                                new Equity(
                                    stock.BalanceSheet.Equity.Latest,
                                    new Growth(
                                        stock.BalanceSheet.Equity.Growth.Actual_1y
                                    )
                                ),
                                new EquityPerShare(
                                    stock.BalanceSheet.EquityPerShare.Latest
                                ),
                                new NetDebt(
                                    stock.BalanceSheet.NetDebt.Latest,
                                    new Growth(
                                        stock.BalanceSheet.NetDebt.Growth.Actual_1y
                                    )
                                ),
                                new TotalAssets(
                                    stock.BalanceSheet.TotalAssets.Latest,
                                    new Growth(
                                        stock.BalanceSheet.TotalAssets.Growth.Actual_1y
                                    )
                                )
                            ),
                            new IncomeStatement(
                                new NetProfit(
                                    new GrowthPlusQ(
                                        stock.IncomeStatement.NetProfit.Growth.Actual_1q,
                                        stock.IncomeStatement.NetProfit.Growth.Actual_1y
                                    )
                                ),
                                new Revenue(
                                    new GrowthPlusQ(
                                        stock.IncomeStatement.Revenue.Growth.Actual_1q,
                                        stock.IncomeStatement.Revenue.Growth.Actual_1y
                                    )
                                )
                            ),
                            new Profitability (
                                new CashFlowOperations(
                                        stock.Profitability.CashFlowOperatons.Latest,
                                        new Growth(
                                            stock.Profitability.CashFlowOperatons.Growth.Actual_1y
                                        )
                                ),
                                new Dividend(
                                        stock.Profitability.Dividend.Latest,
                                        new Growth(
                                            stock.Profitability.Dividend.Growth.Actual_1y
                                        )
                                ),
                                new DividendRatio(
                                        stock.Profitability.DividendRatio.Latest
                                ),
                                new ROAG(
                                        stock.Profitability.ROAG.Latest,
                                        new Growth(
                                            stock.Profitability.ROAG.Growth.Actual_1y
                                        )
                                ),
                                new ROC(
                                        stock.Profitability.ROC.Latest,
                                        new Growth(
                                            stock.Profitability.ROC.Growth.Actual_1y
                                        )
                                ),
                                new ROE(
                                        stock.Profitability.ROE.Latest
                                ),
                            ),
                            new Efficiency(
                                new EBITMargin(
                                    stock.Efficiency.EBITMargin.Latest,
                                    new Growth(
                                        stock.Efficiency.EBITMargin.Growth.Actual_1y
                                    )
                                ),
                                new GrossMargin(
                                    stock.Efficiency.GrossMargin.Latest,
                                    new Growth(
                                        stock.Efficiency.GrossMargin.Growth.Actual_1y
                                    )
                                ),
                                new NetProfitMargin(
                                    stock.Efficiency.NetProfitMargin.Latest,
                                    new Growth(
                                        stock.Efficiency.NetProfitMargin.Growth.Actual_1y
                                    )
                                )
                            ),
                            new Insider(
                                new Net(
                                    stock.Insider.Net.Actual_1w,
                                    stock.Insider.Net.Actual_1m,
                                    stock.Insider.Net.Actual_3m,
                                    stock.Insider.Net.Actual_12m
                                )
                            ),
                            new Strategy (
                                stock.Strategy.GrahamScore
                            ),
                            new TA (
                                stock.TA.MA5_MA20,
                                stock.TA.MA20_MA70,
                                stock.TA.MA50_MA200
                            ),
                            new Valuation(
                                new P_E (
                                    stock.Valuation.P_E.Latest,
                                    new Average(
                                        stock.Valuation.P_E.Average.Actual_1y,
                                        stock.Valuation.P_E.Average.Actual_3y
                                    )
                                ),
                                new P_S (
                                    stock.Valuation.P_S.Latest,
                                    new Average(
                                        stock.Valuation.P_S.Average.Actual_1y,
                                        stock.Valuation.P_S.Average.Actual_3y
                                    )
                                ),
                                new P_FCF (
                                    stock.Valuation.P_FCF.Latest,
                                    new Average(
                                        stock.Valuation.P_FCF.Average.Actual_1y,
                                        stock.Valuation.P_FCF.Average.Actual_3y
                                    )
                                ),
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