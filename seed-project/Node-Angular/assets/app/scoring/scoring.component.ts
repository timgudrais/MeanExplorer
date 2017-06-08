import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../stocks/models/stock.model";
import { StockService } from '../stocks/stock.service';

@Component({
  selector: 'scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css'],
  providers: [ StockService ]
})

@Injectable()
export class ScoringComponent implements OnInit {
  title = 'Scoring modeller';
  stocks: StockObject[];
  stocksFilteredPE: StockObject[];
  sortedDividendsStocks: StockObject[];
  sortedPSStocks: StockObject[];
  sortedCurrentRatioStocks: StockObject[];
  sortedDeptEquityRatioStocks: StockObject[];
  sortedROCStocks: StockObject[];
  sortedInvestingStocks: StockObject[];

  filter: StockObject = new StockObject();

  constructor(private stockService: StockService) { }

  ngOnInit() {
      this.stockService.getStocks('http://localhost:3000/stocks_largecap')
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
            this.stocksFilteredPE = this.stocks.filter(x => x.Valuation.P_E.Latest > 0);

            this.sortedDividendsStocks = this.stocksFilteredPE.sort((s1, s2) => s2.Profitability.DividendRatio - s1.Profitability.DividendRatio);
            for(var i = 0; i < this.sortedDividendsStocks.length; i++){
              this.sortedDividendsStocks[i].Strat.DividendScore = i + 1;
            }

            this.sortedPSStocks = this.sortedDividendsStocks.sort((s1, s2) => s1.Valuation.P_E.Latest - s2.Valuation.P_E.Latest);
            for(var i = 0; i < this.sortedPSStocks.length; i++){
              this.sortedPSStocks[i].Strat.PEScore = i + 1;
            }

            this.sortedCurrentRatioStocks = this.sortedPSStocks.sort((s1, s2) => s2.Profitability.CurrentRatio - s1.Profitability.CurrentRatio);
            for(var i = 0; i < this.sortedCurrentRatioStocks.length; i++){
              this.sortedCurrentRatioStocks[i].Strat.CurrentRatioScore = i + 1;
              this.sortedCurrentRatioStocks[i].Profitability.DebtEquity = this.sortedCurrentRatioStocks[i].BalanceSheet.DebtPerShare / this.sortedCurrentRatioStocks[i].BalanceSheet.EquityPerShare;
            }

            this.sortedDeptEquityRatioStocks = this.sortedCurrentRatioStocks.sort((s1, s2) => s1.Profitability.DebtEquity - s2.Profitability.DebtEquity);
            for(var i = 0; i < this.sortedDeptEquityRatioStocks.length; i++){
              this.sortedDeptEquityRatioStocks[i].Strat.DebtEquityScore = i + 1;
            }

            this.sortedROCStocks = this.sortedDeptEquityRatioStocks.sort((s1, s2) => s2.Profitability.ROC - s1.Profitability.ROC);
            for(var i = 0; i < this.sortedROCStocks.length; i++){
              this.sortedROCStocks[i].Strat.ROCScore = i + 1;
              this.sortedROCStocks[i].Strat.InvestingScore = this.sortedROCStocks[i].Strat.DebtEquityScore + this.sortedROCStocks[i].Strat.ROCScore + this.sortedROCStocks[i].Strat.CurrentRatioScore + this.sortedROCStocks[i].Strat.PEScore + this.sortedROCStocks[i].Strat.DividendScore;
            }

            this.sortedInvestingStocks = this.sortedPSStocks.sort((s1, s2) => s1.Strat.InvestingScore - s2.Strat.InvestingScore);
          }
        )
  }

}
