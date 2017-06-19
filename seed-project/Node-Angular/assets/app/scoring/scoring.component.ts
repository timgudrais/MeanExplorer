import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../stocks/models/stock.model";
import { StockService } from '../stocks/stock.service';

@Component({
  selector: 'scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css'],
  providers: [StockService]
})

@Injectable()
export class ScoringComponent implements OnInit {
  title = 'Scoring modeller';
  stocks: StockObject[];
  stocksFilteredPE: StockObject[];
  stocksFilteredDebtEquity: StockObject[];
  sortedDividendsStocks: StockObject[];
  sortedPEStocks: StockObject[];
  sortedCurrentRatioStocks: StockObject[];
  sortedDebtEquityRatioStocks: StockObject[];
  sortedNetMarginStocks: StockObject[];
  sortedROCStocks: StockObject[];
  sortedInvestingStocks: StockObject[];

  filter: StockObject = new StockObject();

  expandedActuals = false;
  expandedScore = false;
  expandedRank = false;
  choosenIndustry = 'All';

  toggleActuals() {
    if (this.expandedActuals) {
      this.expandedActuals = false;
    }
    else {
      this.expandedActuals = true;
    }
  }

  toggleScore() {
    if (this.expandedScore) {
      this.expandedScore = false;
    }
    else {
      this.expandedScore = true;
    }
  }

  toggleRank() {
    if (this.expandedRank) {
      this.expandedRank = false;
    }
    else {
      this.expandedRank = true;
    }
  }

  chooseIndustry(industry) {
    this.choosenIndustry = industry;
  }

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.getStocks('http://localhost:3000/stocks_largecap')
      .subscribe((stocks: StockObject[]) => {
        this.stocks = stocks;
        this.stocksFilteredPE = this.stocks.filter(x => x.Valuation.P_E.Latest > 0);

        this.sortedDividendsStocks = this.stocksFilteredPE.sort((s1, s2) => s2.Profitability.DividendRatio - s1.Profitability.DividendRatio);
        for (var i = 0; i < this.sortedDividendsStocks.length; i++) {
          this.sortedDividendsStocks[i].Strat.DividendRank = i + 1;

          if (this.sortedDividendsStocks[i].Profitability.DividendRatio <= 0.0000001) {
            this.sortedDividendsStocks[i].Strat.DividendScore = 0;
          }
          if (this.sortedDividendsStocks[i].Profitability.DividendRatio > 0.0000001 && this.sortedDividendsStocks[i].Profitability.DividendRatio <= 0.04) {
            this.sortedDividendsStocks[i].Strat.DividendScore = 1;
          }
          if (this.sortedDividendsStocks[i].Profitability.DividendRatio > 0.04) {
            this.sortedDividendsStocks[i].Strat.DividendScore = 2;
          }
        }

        this.sortedPEStocks = this.sortedDividendsStocks.sort((s1, s2) => s1.Valuation.P_E.Latest - s2.Valuation.P_E.Latest);
        for (var i = 0; i < this.sortedPEStocks.length; i++) {
          this.sortedPEStocks[i].Strat.PERank = i + 1;

          if (this.sortedPEStocks[i].Valuation.P_E.Latest <= 0.0000001 || this.sortedPEStocks[i].Valuation.P_E.Latest > 24) {
            this.sortedPEStocks[i].Strat.PEScore = 0;
          }
          if (this.sortedPEStocks[i].Valuation.P_E.Latest > 0.0000001 && this.sortedPEStocks[i].Valuation.P_E.Latest <= 18) {
            this.sortedPEStocks[i].Strat.PEScore = 2;
          }
          if (this.sortedPEStocks[i].Valuation.P_E.Latest > 18 && this.sortedPEStocks[i].Valuation.P_E.Latest <= 24) {
            this.sortedPEStocks[i].Strat.PEScore = 1;
          }
        }

        this.sortedCurrentRatioStocks = this.sortedPEStocks.sort((s1, s2) => s2.Profitability.CurrentRatio - s1.Profitability.CurrentRatio);
        for (var i = 0; i < this.sortedCurrentRatioStocks.length; i++) {
          this.sortedCurrentRatioStocks[i].Strat.CurrentRatioRank = i + 1;
          this.sortedCurrentRatioStocks[i].Profitability.DebtEquity = this.sortedCurrentRatioStocks[i].BalanceSheet.DebtPerShare / this.sortedCurrentRatioStocks[i].BalanceSheet.EquityPerShare;

          if (this.sortedCurrentRatioStocks[i].Profitability.CurrentRatio <= 1) {
            this.sortedCurrentRatioStocks[i].Strat.CurrentRatioScore = 0;
          }
          if (this.sortedCurrentRatioStocks[i].Profitability.CurrentRatio > 1 && this.sortedCurrentRatioStocks[i].Profitability.CurrentRatio <= 2) {
            this.sortedCurrentRatioStocks[i].Strat.CurrentRatioScore = 1;
          }
          if (this.sortedCurrentRatioStocks[i].Profitability.CurrentRatio > 2) {
            this.sortedCurrentRatioStocks[i].Strat.CurrentRatioScore = 2;
          }
        }

        this.stocksFilteredDebtEquity = this.sortedCurrentRatioStocks.filter(x => x.Profitability.DebtEquity > 0);

        this.sortedDebtEquityRatioStocks = this.stocksFilteredDebtEquity.sort((s1, s2) => s1.Profitability.DebtEquity - s2.Profitability.DebtEquity);
        for (var i = 0; i < this.sortedDebtEquityRatioStocks.length; i++) {
          this.sortedDebtEquityRatioStocks[i].Strat.DebtEquityRank = i + 1;

          if (this.sortedDebtEquityRatioStocks[i].Profitability.DebtEquity <= 0.0000001 || this.sortedDebtEquityRatioStocks[i].Profitability.DebtEquity > 1.5) {
            this.sortedDebtEquityRatioStocks[i].Strat.DebtEquityScore = 0;
          }
          if (this.sortedDebtEquityRatioStocks[i].Profitability.DebtEquity > 0.0000001 && this.sortedDebtEquityRatioStocks[i].Profitability.DebtEquity <= 0.8) {
            this.sortedDebtEquityRatioStocks[i].Strat.DebtEquityScore = 2;
          }
          if (this.sortedDebtEquityRatioStocks[i].Profitability.DebtEquity > 0.8 && this.sortedDebtEquityRatioStocks[i].Profitability.DebtEquity <= 1.5) {
            this.sortedDebtEquityRatioStocks[i].Strat.DebtEquityScore = 1;
          }
        }

        this.sortedNetMarginStocks = this.sortedDebtEquityRatioStocks.sort((s1, s2) => s2.Profitability.NetMargin - s1.Profitability.NetMargin);
        for (var i = 0; i < this.sortedNetMarginStocks.length; i++) {
          this.sortedNetMarginStocks[i].Strat.NetMarginRank = i + 1;

          if (this.sortedNetMarginStocks[i].Profitability.NetMargin <= 0.05) {
            this.sortedNetMarginStocks[i].Strat.NetMarginScore = 0;
          }
          if (this.sortedNetMarginStocks[i].Profitability.NetMargin > 0.05 && this.sortedNetMarginStocks[i].Profitability.NetMargin <= 0.2) {
            this.sortedNetMarginStocks[i].Strat.NetMarginScore = 1;
          }
          if (this.sortedNetMarginStocks[i].Profitability.NetMargin > 0.2) {
            this.sortedNetMarginStocks[i].Strat.NetMarginScore = 2;
          }
        }

        this.sortedROCStocks = this.sortedNetMarginStocks.sort((s1, s2) => s2.Profitability.ROC - s1.Profitability.ROC);
        for (var i = 0; i < this.sortedROCStocks.length; i++) {
          this.sortedROCStocks[i].Strat.ROCRank = i + 1;
          this.sortedROCStocks[i].Strat.InvestingRank =
            this.sortedROCStocks[i].Strat.DividendRank
            + this.sortedROCStocks[i].Strat.PERank
            + this.sortedROCStocks[i].Strat.CurrentRatioRank
            + this.sortedROCStocks[i].Strat.DebtEquityRank
            + this.sortedROCStocks[i].Strat.NetMarginRank
            + this.sortedROCStocks[i].Strat.ROCRank;

          if (this.sortedROCStocks[i].Profitability.ROC <= 0.1) {
            this.sortedROCStocks[i].Strat.ROCScore = 0;
          }
          if (this.sortedROCStocks[i].Profitability.ROC > 0.1 && this.sortedROCStocks[i].Profitability.ROC <= 0.2) {
            this.sortedROCStocks[i].Strat.ROCScore = 1;
          }
          if (this.sortedROCStocks[i].Profitability.ROC > 0.2) {
            this.sortedROCStocks[i].Strat.ROCScore = 2;
          }

          this.sortedROCStocks[i].Strat.InvestingScore =
            this.sortedROCStocks[i].Strat.DividendScore
            + this.sortedROCStocks[i].Strat.PEScore
            + this.sortedROCStocks[i].Strat.CurrentRatioScore
            + this.sortedROCStocks[i].Strat.DebtEquityScore
            + this.sortedROCStocks[i].Strat.NetMarginScore
            + this.sortedROCStocks[i].Strat.ROCScore;
        }

        this.sortedInvestingStocks = this.sortedROCStocks.sort((s1, s2) => s2.Strat.InvestingScore - s1.Strat.InvestingScore);
      })
  }

}
