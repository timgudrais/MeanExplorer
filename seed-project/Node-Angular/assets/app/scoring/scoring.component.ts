import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StockObject, StockPriceObject } from "../stocks/models/stock.model";
import { StockService } from '../stocks/stock.service';
import { GetStocksService } from '../get-stocks/get-stocks.service';
import { SearchPipe } from './search-pipe';

import 'rxjs/Rx';


@Component({
  selector: 'scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css'],
  providers: [StockService, GetStocksService],
})

@Injectable()
export class ScoringComponent implements OnInit {

  title = 'Scoring modeller';
  stocks: StockObject[];
  stockPrices: StockPriceObject;
  // TODO Fix this
  // stockPrices: StockPriceObject;
  stocksFilteredPE: StockObject[];
  stocksFilteredDebtEquity: StockObject[];
  sortedDividendsStocks: StockObject[];
  sortedPEStocks: StockObject[];
  sortedCurrentRatioStocks: StockObject[];
  sortedDebtEquityRatioStocks: StockObject[];
  sortedNetMarginStocks: StockObject[];
  sortedROCStocks: StockObject[];
  investingStocks: StockObject[];

  bankStocks: StockObject[];
  bettingOchSpelStocks: StockObject[];
  bioteknikStocks: StockObject[];
  byggnationStocks: StockObject[];
  byggprodukterStocks: StockObject[];
  elektroniskUtrustningStocks: StockObject[];
  fastigheterStocks: StockObject[];
  gruvOchMetallStocks: StockObject[];
  handelOchDistributionStocks: StockObject[];
  hotellRestaurangOchNojeStocks: StockObject[];
  investmentbolagStocks: StockObject[];
  itTjansterStocks: StockObject[];
  kladerOchTextilStocks: StockObject[];
  konsumentStocks: StockObject[];
  livsmedelStocks: StockObject[];
  lakemedelStocks: StockObject[];
  produktionStocks: StockObject[];
  sjukvardStocks: StockObject[];
  skogStocks: StockObject[];
  telekommunikationstjansterStocks: StockObject[];
  tjansterOchLeveransStocks: StockObject[];

  industries = [
    "All",
    "Bank",
    "Betting & Spel",
    "Bioteknik",
    "Byggnation",
    "Byggprodukter",
    "Elektronisk utrustning",
    "Fastigheter",
    "Gruv & Metall",
    "Handel & Distribution",
    "Hotell, restaurang & nöje",
    "Investmentbolag",
    "IT-Tjänster",
    "kläder & Textil",
    "Konsument",
    "Livsmedel",
    "Läkemedel",
    "Produktion",
    "Sjukvård",
    "Skog",
    "Telekommunikationstjänster",
    "Tjänster & Leverans"
  ]

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

  sortList() {
    this.sortByList(this.investingStocks);
    this.sortByList(this.bankStocks);
    this.sortByList(this.bettingOchSpelStocks);
    this.sortByList(this.bioteknikStocks);
    this.sortByList(this.byggnationStocks);
    this.sortByList(this.byggprodukterStocks);
    this.sortByList(this.elektroniskUtrustningStocks);
    this.sortByList(this.fastigheterStocks);
    this.sortByList(this.gruvOchMetallStocks);
    this.sortByList(this.handelOchDistributionStocks);
    this.sortByList(this.hotellRestaurangOchNojeStocks);
    this.sortByList(this.investmentbolagStocks);
    this.sortByList(this.itTjansterStocks);
    this.sortByList(this.kladerOchTextilStocks);
    this.sortByList(this.konsumentStocks);
    this.sortByList(this.livsmedelStocks);
    this.sortByList(this.lakemedelStocks);
    this.sortByList(this.produktionStocks);
    this.sortByList(this.sjukvardStocks);
    this.sortByList(this.skogStocks);
    this.sortByList(this.telekommunikationstjansterStocks);
    this.sortByList(this.tjansterOchLeveransStocks);    

    this.listAsc = !this.listAsc;
    this.columnClicked = 0
  }

  sortName() {
    // TODO FIX this    
    // alert(this.stockPrices);    
    // console.log(this.stockPrices);    
    // alert(this.stockPrices.stocks);    
    // console.log(this.stockPrices.stocks);
    // alert(this.stockPrices.stocks[0]);    
    // console.log(this.stockPrices.stocks[0]);    
    this.sortByName(this.investingStocks);
    this.sortByName(this.bankStocks);
    this.sortByName(this.bettingOchSpelStocks);
    this.sortByName(this.bioteknikStocks);
    this.sortByName(this.byggnationStocks);
    this.sortByName(this.byggprodukterStocks);
    this.sortByName(this.elektroniskUtrustningStocks);
    this.sortByName(this.fastigheterStocks);
    this.sortByName(this.gruvOchMetallStocks);
    this.sortByName(this.handelOchDistributionStocks);
    this.sortByName(this.hotellRestaurangOchNojeStocks);
    this.sortByName(this.investmentbolagStocks);
    this.sortByName(this.itTjansterStocks);
    this.sortByName(this.kladerOchTextilStocks);
    this.sortByName(this.konsumentStocks);
    this.sortByName(this.livsmedelStocks);
    this.sortByName(this.lakemedelStocks);
    this.sortByName(this.produktionStocks);
    this.sortByName(this.sjukvardStocks);
    this.sortByName(this.skogStocks);
    this.sortByName(this.telekommunikationstjansterStocks);
    this.sortByName(this.tjansterOchLeveransStocks);    

    this.nameAsc = !this.nameAsc;
    this.columnClicked = 1;
  }

  sortTicker() {
    this.sortByTicker(this.investingStocks);
    this.sortByTicker(this.bankStocks);
    this.sortByTicker(this.bettingOchSpelStocks);
    this.sortByTicker(this.bioteknikStocks);
    this.sortByTicker(this.byggnationStocks);
    this.sortByTicker(this.byggprodukterStocks);
    this.sortByTicker(this.elektroniskUtrustningStocks);
    this.sortByTicker(this.fastigheterStocks);
    this.sortByTicker(this.gruvOchMetallStocks);
    this.sortByTicker(this.handelOchDistributionStocks);
    this.sortByTicker(this.hotellRestaurangOchNojeStocks);
    this.sortByTicker(this.investmentbolagStocks);
    this.sortByTicker(this.itTjansterStocks);
    this.sortByTicker(this.kladerOchTextilStocks);
    this.sortByTicker(this.konsumentStocks);
    this.sortByTicker(this.livsmedelStocks);
    this.sortByTicker(this.lakemedelStocks);
    this.sortByTicker(this.produktionStocks);
    this.sortByTicker(this.sjukvardStocks);
    this.sortByTicker(this.skogStocks);
    this.sortByTicker(this.telekommunikationstjansterStocks);
    this.sortByTicker(this.tjansterOchLeveransStocks);    
       
    this.tickerAsc = !this.tickerAsc;
    this.columnClicked = 2;
  }

  sortIndustry() {
    this.sortByIndustry(this.investingStocks);
    this.sortByIndustry(this.bankStocks);
    this.sortByIndustry(this.bettingOchSpelStocks);
    this.sortByIndustry(this.bioteknikStocks);
    this.sortByIndustry(this.byggnationStocks);
    this.sortByIndustry(this.byggprodukterStocks);
    this.sortByIndustry(this.elektroniskUtrustningStocks);
    this.sortByIndustry(this.fastigheterStocks);
    this.sortByIndustry(this.gruvOchMetallStocks);
    this.sortByIndustry(this.handelOchDistributionStocks);
    this.sortByIndustry(this.hotellRestaurangOchNojeStocks);
    this.sortByIndustry(this.investmentbolagStocks);
    this.sortByIndustry(this.itTjansterStocks);
    this.sortByIndustry(this.kladerOchTextilStocks);
    this.sortByIndustry(this.konsumentStocks);
    this.sortByIndustry(this.livsmedelStocks);
    this.sortByIndustry(this.lakemedelStocks);
    this.sortByIndustry(this.produktionStocks);
    this.sortByIndustry(this.sjukvardStocks);
    this.sortByIndustry(this.skogStocks);
    this.sortByIndustry(this.telekommunikationstjansterStocks);
    this.sortByIndustry(this.tjansterOchLeveransStocks);   

    this.industryAsc = !this.industryAsc;
    this.columnClicked = 3; 
  }

  sortMarketCap() {
    this.sortByMarketCap(this.investingStocks);
    this.sortByMarketCap(this.bankStocks);
    this.sortByMarketCap(this.bettingOchSpelStocks);
    this.sortByMarketCap(this.bioteknikStocks);
    this.sortByMarketCap(this.byggnationStocks);
    this.sortByMarketCap(this.byggprodukterStocks);
    this.sortByMarketCap(this.elektroniskUtrustningStocks);
    this.sortByMarketCap(this.fastigheterStocks);
    this.sortByMarketCap(this.gruvOchMetallStocks);
    this.sortByMarketCap(this.handelOchDistributionStocks);
    this.sortByMarketCap(this.hotellRestaurangOchNojeStocks);
    this.sortByMarketCap(this.investmentbolagStocks);
    this.sortByMarketCap(this.itTjansterStocks);
    this.sortByMarketCap(this.kladerOchTextilStocks);
    this.sortByMarketCap(this.konsumentStocks);
    this.sortByMarketCap(this.livsmedelStocks);
    this.sortByMarketCap(this.lakemedelStocks);
    this.sortByMarketCap(this.produktionStocks);
    this.sortByMarketCap(this.sjukvardStocks);
    this.sortByMarketCap(this.skogStocks);
    this.sortByMarketCap(this.telekommunikationstjansterStocks);
    this.sortByMarketCap(this.tjansterOchLeveransStocks);    

    this.marketCapAsc = !this.marketCapAsc;
    this.columnClicked = 4;    
  }

   sortDividend() {
    this.sortByDividend(this.investingStocks);
    this.sortByDividend(this.bankStocks);
    this.sortByDividend(this.bettingOchSpelStocks);
    this.sortByDividend(this.bioteknikStocks);
    this.sortByDividend(this.byggnationStocks);
    this.sortByDividend(this.byggprodukterStocks);
    this.sortByDividend(this.elektroniskUtrustningStocks);
    this.sortByDividend(this.fastigheterStocks);
    this.sortByDividend(this.gruvOchMetallStocks);
    this.sortByDividend(this.handelOchDistributionStocks);
    this.sortByDividend(this.hotellRestaurangOchNojeStocks);
    this.sortByDividend(this.investmentbolagStocks);
    this.sortByDividend(this.itTjansterStocks);
    this.sortByDividend(this.kladerOchTextilStocks);
    this.sortByDividend(this.konsumentStocks);
    this.sortByDividend(this.livsmedelStocks);
    this.sortByDividend(this.lakemedelStocks);
    this.sortByDividend(this.produktionStocks);
    this.sortByDividend(this.sjukvardStocks);
    this.sortByDividend(this.skogStocks);
    this.sortByDividend(this.telekommunikationstjansterStocks);
    this.sortByDividend(this.tjansterOchLeveransStocks); 

    this.dividendAsc = !this.dividendAsc;
    this.columnClicked = 5;  
  }

  sortROC() {
    this.sortByROC(this.investingStocks);
    this.sortByROC(this.bankStocks);
    this.sortByROC(this.bettingOchSpelStocks);
    this.sortByROC(this.bioteknikStocks);
    this.sortByROC(this.byggnationStocks);
    this.sortByROC(this.byggprodukterStocks);
    this.sortByROC(this.elektroniskUtrustningStocks);
    this.sortByROC(this.fastigheterStocks);
    this.sortByROC(this.gruvOchMetallStocks);
    this.sortByROC(this.handelOchDistributionStocks);
    this.sortByROC(this.hotellRestaurangOchNojeStocks);
    this.sortByROC(this.investmentbolagStocks);
    this.sortByROC(this.itTjansterStocks);
    this.sortByROC(this.kladerOchTextilStocks);
    this.sortByROC(this.konsumentStocks);
    this.sortByROC(this.livsmedelStocks);
    this.sortByROC(this.lakemedelStocks);
    this.sortByROC(this.produktionStocks);
    this.sortByROC(this.sjukvardStocks);
    this.sortByROC(this.skogStocks);
    this.sortByROC(this.telekommunikationstjansterStocks);
    this.sortByROC(this.tjansterOchLeveransStocks);    

    this.rocAsc = !this.rocAsc;
    this.columnClicked = 6;
  }

  sortROE() {
    this.sortByROE(this.investingStocks);
    this.sortByROE(this.bankStocks);
    this.sortByROE(this.bettingOchSpelStocks);
    this.sortByROE(this.bioteknikStocks);
    this.sortByROE(this.byggnationStocks);
    this.sortByROE(this.byggprodukterStocks);
    this.sortByROE(this.elektroniskUtrustningStocks);
    this.sortByROE(this.fastigheterStocks);
    this.sortByROE(this.gruvOchMetallStocks);
    this.sortByROE(this.handelOchDistributionStocks);
    this.sortByROE(this.hotellRestaurangOchNojeStocks);
    this.sortByROE(this.investmentbolagStocks);
    this.sortByROE(this.itTjansterStocks);
    this.sortByROE(this.kladerOchTextilStocks);
    this.sortByROE(this.konsumentStocks);
    this.sortByROE(this.livsmedelStocks);
    this.sortByROE(this.lakemedelStocks);
    this.sortByROE(this.produktionStocks);
    this.sortByROE(this.sjukvardStocks);
    this.sortByROE(this.skogStocks);
    this.sortByROE(this.telekommunikationstjansterStocks);
    this.sortByROE(this.tjansterOchLeveransStocks);    

    this.roeAsc = !this.roeAsc;
    this.columnClicked = 7;
  }

  sortNetMargin() {
    this.sortByNetMargin(this.investingStocks);
    this.sortByNetMargin(this.bankStocks);
    this.sortByNetMargin(this.bettingOchSpelStocks);
    this.sortByNetMargin(this.bioteknikStocks);
    this.sortByNetMargin(this.byggnationStocks);
    this.sortByNetMargin(this.byggprodukterStocks);
    this.sortByNetMargin(this.elektroniskUtrustningStocks);
    this.sortByNetMargin(this.fastigheterStocks);
    this.sortByNetMargin(this.gruvOchMetallStocks);
    this.sortByNetMargin(this.handelOchDistributionStocks);
    this.sortByNetMargin(this.hotellRestaurangOchNojeStocks);
    this.sortByNetMargin(this.investmentbolagStocks);
    this.sortByNetMargin(this.itTjansterStocks);
    this.sortByNetMargin(this.kladerOchTextilStocks);
    this.sortByNetMargin(this.konsumentStocks);
    this.sortByNetMargin(this.livsmedelStocks);
    this.sortByNetMargin(this.lakemedelStocks);
    this.sortByNetMargin(this.produktionStocks);
    this.sortByNetMargin(this.sjukvardStocks);
    this.sortByNetMargin(this.skogStocks);
    this.sortByNetMargin(this.telekommunikationstjansterStocks);
    this.sortByNetMargin(this.tjansterOchLeveransStocks);    

    this.netMarginAsc = !this.netMarginAsc;
    this.columnClicked = 8;
  }

  sortDebtEquity() {
    this.sortByDebtEquity(this.investingStocks);
    this.sortByDebtEquity(this.bankStocks);
    this.sortByDebtEquity(this.bettingOchSpelStocks);
    this.sortByDebtEquity(this.bioteknikStocks);
    this.sortByDebtEquity(this.byggnationStocks);
    this.sortByDebtEquity(this.byggprodukterStocks);
    this.sortByDebtEquity(this.elektroniskUtrustningStocks);
    this.sortByDebtEquity(this.fastigheterStocks);
    this.sortByDebtEquity(this.gruvOchMetallStocks);
    this.sortByDebtEquity(this.handelOchDistributionStocks);
    this.sortByDebtEquity(this.hotellRestaurangOchNojeStocks);
    this.sortByDebtEquity(this.investmentbolagStocks);
    this.sortByDebtEquity(this.itTjansterStocks);
    this.sortByDebtEquity(this.kladerOchTextilStocks);
    this.sortByDebtEquity(this.konsumentStocks);
    this.sortByDebtEquity(this.livsmedelStocks);
    this.sortByDebtEquity(this.lakemedelStocks);
    this.sortByDebtEquity(this.produktionStocks);
    this.sortByDebtEquity(this.sjukvardStocks);
    this.sortByDebtEquity(this.skogStocks);
    this.sortByDebtEquity(this.telekommunikationstjansterStocks);
    this.sortByDebtEquity(this.tjansterOchLeveransStocks);    

    this.debtEquityAsc = !this.debtEquityAsc;
    this.columnClicked = 9;
  }

  sortCurrentRatio() {
    this.sortByCurrentRatio(this.investingStocks);
    this.sortByCurrentRatio(this.bankStocks);
    this.sortByCurrentRatio(this.bettingOchSpelStocks);
    this.sortByCurrentRatio(this.bioteknikStocks);
    this.sortByCurrentRatio(this.byggnationStocks);
    this.sortByCurrentRatio(this.byggprodukterStocks);
    this.sortByCurrentRatio(this.elektroniskUtrustningStocks);
    this.sortByCurrentRatio(this.fastigheterStocks);
    this.sortByCurrentRatio(this.gruvOchMetallStocks);
    this.sortByCurrentRatio(this.handelOchDistributionStocks);
    this.sortByCurrentRatio(this.hotellRestaurangOchNojeStocks);
    this.sortByCurrentRatio(this.investmentbolagStocks);
    this.sortByCurrentRatio(this.itTjansterStocks);
    this.sortByCurrentRatio(this.kladerOchTextilStocks);
    this.sortByCurrentRatio(this.konsumentStocks);
    this.sortByCurrentRatio(this.livsmedelStocks);
    this.sortByCurrentRatio(this.lakemedelStocks);
    this.sortByCurrentRatio(this.produktionStocks);
    this.sortByCurrentRatio(this.sjukvardStocks);
    this.sortByCurrentRatio(this.skogStocks);
    this.sortByCurrentRatio(this.telekommunikationstjansterStocks);
    this.sortByCurrentRatio(this.tjansterOchLeveransStocks);    

    this.currentRatioAsc = !this.currentRatioAsc;
    this.columnClicked = 10;
  }

  sortPE() {
    this.sortByPE(this.investingStocks);
    this.sortByPE(this.bankStocks);
    this.sortByPE(this.bettingOchSpelStocks);
    this.sortByPE(this.bioteknikStocks);
    this.sortByPE(this.byggnationStocks);
    this.sortByPE(this.byggprodukterStocks);
    this.sortByPE(this.elektroniskUtrustningStocks);
    this.sortByPE(this.fastigheterStocks);
    this.sortByPE(this.gruvOchMetallStocks);
    this.sortByPE(this.handelOchDistributionStocks);
    this.sortByPE(this.hotellRestaurangOchNojeStocks);
    this.sortByPE(this.investmentbolagStocks);
    this.sortByPE(this.itTjansterStocks);
    this.sortByPE(this.kladerOchTextilStocks);
    this.sortByPE(this.konsumentStocks);
    this.sortByPE(this.livsmedelStocks);
    this.sortByPE(this.lakemedelStocks);
    this.sortByPE(this.produktionStocks);
    this.sortByPE(this.sjukvardStocks);
    this.sortByPE(this.skogStocks);
    this.sortByPE(this.telekommunikationstjansterStocks);
    this.sortByPE(this.tjansterOchLeveransStocks);    

    this.peAsc = !this.peAsc;
    this.columnClicked = 11;    
  }

  sortPS() {
    this.sortByPS(this.investingStocks);
    this.sortByPS(this.bankStocks);
    this.sortByPS(this.bettingOchSpelStocks);
    this.sortByPS(this.bioteknikStocks);
    this.sortByPS(this.byggnationStocks);
    this.sortByPS(this.byggprodukterStocks);
    this.sortByPS(this.elektroniskUtrustningStocks);
    this.sortByPS(this.fastigheterStocks);
    this.sortByPS(this.gruvOchMetallStocks);
    this.sortByPS(this.handelOchDistributionStocks);
    this.sortByPS(this.hotellRestaurangOchNojeStocks);
    this.sortByPS(this.investmentbolagStocks);
    this.sortByPS(this.itTjansterStocks);
    this.sortByPS(this.kladerOchTextilStocks);
    this.sortByPS(this.konsumentStocks);
    this.sortByPS(this.livsmedelStocks);
    this.sortByPS(this.lakemedelStocks);
    this.sortByPS(this.produktionStocks);
    this.sortByPS(this.sjukvardStocks);
    this.sortByPS(this.skogStocks);
    this.sortByPS(this.telekommunikationstjansterStocks);
    this.sortByPS(this.tjansterOchLeveransStocks);    

    this.psAsc = !this.psAsc;
    this.columnClicked = 12;    
  }

  sortPFCF() {
    this.sortByPFCF(this.investingStocks);
    this.sortByPFCF(this.bankStocks);
    this.sortByPFCF(this.bettingOchSpelStocks);
    this.sortByPFCF(this.bioteknikStocks);
    this.sortByPFCF(this.byggnationStocks);
    this.sortByPFCF(this.byggprodukterStocks);
    this.sortByPFCF(this.elektroniskUtrustningStocks);
    this.sortByPFCF(this.fastigheterStocks);
    this.sortByPFCF(this.gruvOchMetallStocks);
    this.sortByPFCF(this.handelOchDistributionStocks);
    this.sortByPFCF(this.hotellRestaurangOchNojeStocks);
    this.sortByPFCF(this.investmentbolagStocks);
    this.sortByPFCF(this.itTjansterStocks);
    this.sortByPFCF(this.kladerOchTextilStocks);
    this.sortByPFCF(this.konsumentStocks);
    this.sortByPFCF(this.livsmedelStocks);
    this.sortByPFCF(this.lakemedelStocks);
    this.sortByPFCF(this.produktionStocks);
    this.sortByPFCF(this.sjukvardStocks);
    this.sortByPFCF(this.skogStocks);
    this.sortByPFCF(this.telekommunikationstjansterStocks);
    this.sortByPFCF(this.tjansterOchLeveransStocks);    

    this.pfcfAsc = !this.pfcfAsc;
    this.columnClicked = 13;    
  }

  sortInvestingScore() {
    this.sortByInvestingScore(this.investingStocks);
    this.sortByInvestingScore(this.bankStocks);
    this.sortByInvestingScore(this.bettingOchSpelStocks);
    this.sortByInvestingScore(this.bioteknikStocks);
    this.sortByInvestingScore(this.byggnationStocks);
    this.sortByInvestingScore(this.byggprodukterStocks);
    this.sortByInvestingScore(this.elektroniskUtrustningStocks);
    this.sortByInvestingScore(this.fastigheterStocks);
    this.sortByInvestingScore(this.gruvOchMetallStocks);
    this.sortByInvestingScore(this.handelOchDistributionStocks);
    this.sortByInvestingScore(this.hotellRestaurangOchNojeStocks);
    this.sortByInvestingScore(this.investmentbolagStocks);
    this.sortByInvestingScore(this.itTjansterStocks);
    this.sortByInvestingScore(this.kladerOchTextilStocks);
    this.sortByInvestingScore(this.konsumentStocks);
    this.sortByInvestingScore(this.livsmedelStocks);
    this.sortByInvestingScore(this.lakemedelStocks);
    this.sortByInvestingScore(this.produktionStocks);
    this.sortByInvestingScore(this.sjukvardStocks);
    this.sortByInvestingScore(this.skogStocks);
    this.sortByInvestingScore(this.telekommunikationstjansterStocks);
    this.sortByInvestingScore(this.tjansterOchLeveransStocks);  

    this.investingScoreAsc = !this.investingScoreAsc;
    this.columnClicked = 14;     
  }
  
  sortInvestingRank() {
    this.sortByInvestingRank(this.investingStocks);
    this.sortByInvestingRank(this.bankStocks);
    this.sortByInvestingRank(this.bettingOchSpelStocks);
    this.sortByInvestingRank(this.bioteknikStocks);
    this.sortByInvestingRank(this.byggnationStocks);
    this.sortByInvestingRank(this.byggprodukterStocks);
    this.sortByInvestingRank(this.elektroniskUtrustningStocks);
    this.sortByInvestingRank(this.fastigheterStocks);
    this.sortByInvestingRank(this.gruvOchMetallStocks);
    this.sortByInvestingRank(this.handelOchDistributionStocks);
    this.sortByInvestingRank(this.hotellRestaurangOchNojeStocks);
    this.sortByInvestingRank(this.investmentbolagStocks);
    this.sortByInvestingRank(this.itTjansterStocks);
    this.sortByInvestingRank(this.kladerOchTextilStocks);
    this.sortByInvestingRank(this.konsumentStocks);
    this.sortByInvestingRank(this.livsmedelStocks);
    this.sortByInvestingRank(this.lakemedelStocks);
    this.sortByInvestingRank(this.produktionStocks);
    this.sortByInvestingRank(this.sjukvardStocks);
    this.sortByInvestingRank(this.skogStocks);
    this.sortByInvestingRank(this.telekommunikationstjansterStocks);
    this.sortByInvestingRank(this.tjansterOchLeveransStocks);   
     
    this.investingRankAsc = !this.investingRankAsc;
    this.columnClicked = 15; 
  }

  columnClicked = 14;
  listAsc = false;
  nameAsc = false;
  tickerAsc = false;
  industryAsc = false;
  marketCapAsc = false;
  dividendAsc = false;
  peAsc = false;
  psAsc = false;
  pfcfAsc = false;
  currentRatioAsc = false;
  debtEquityAsc = false;
  netMarginAsc = false;
  rocAsc = false;
  roeAsc = false;
  investingScoreAsc = false;
  investingRankAsc = false;

  sortByList(list){
    list.sort(function(a, b) {
      var textA = a.Info.CompanyName.toUpperCase();
      var textB = b.Info.CompanyName.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });      
    if(this.listAsc) { list.reverse(); }
  }
  sortByName(list){
    list.sort(function(a, b) {
      var textA = a.Info.CompanyName.toUpperCase();
      var textB = b.Info.CompanyName.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    if(this.nameAsc) { list.reverse(); }   
  }
  sortByTicker(list){
    list.sort(function(a, b) {
      var textA = a.Info.Ticker.toUpperCase();
      var textB = b.Info.Ticker.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    if(this.tickerAsc) { list.reverse(); }
  }
  sortByIndustry(list){
    list.sort(function(a, b) {
      var textA = a.Info.Industry.toUpperCase();
      var textB = b.Info.Industry.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    if(this.industryAsc) { list.reverse(); }    
  } 
  sortByMarketCap(list){
    list.sort((s1, s2) => s2.Stock.MarketCap - s1.Stock.MarketCap);
    if(this.marketCapAsc) { list.reverse(); }    
  }
  sortByDividend(list){
    list.sort((s1, s2) => s1.Strategy.DividendRank - s2.Strategy.DividendRank);
    if(this.dividendAsc) { list.reverse(); }
  }
  sortByROC(list){
    list.sort((s1, s2) => s1.Strategy.ROCRank - s2.Strategy.ROCRank);
    if(this.rocAsc) { list.reverse(); }    
  }
  sortByROE(list){
    list.sort((s1, s2) => s2.Profitability.ROE - s1.Profitability.ROE);
    if(this.roeAsc) { list.reverse(); }    
  }
  sortByNetMargin(list){
    list.sort((s1, s2) => s1.Strategy.NetMarginRank - s2.Strategy.NetMarginRank);
    if(this.netMarginAsc) { list.reverse(); }    
  }
  sortByDebtEquity(list){
    list.sort((s1, s2) => s1.Strategy.DebtEquityRank - s2.Strategy.DebtEquityRank);
    if(this.debtEquityAsc) { list.reverse(); }    
  }
  sortByCurrentRatio(list){
    list.sort((s1, s2) => s1.Strategy.CurrentRatioRank - s2.Strategy.CurrentRatioRank);
    if(this.currentRatioAsc) { list.reverse(); }    
  }
    sortByPE(list){
    list.sort((s1, s2) => s1.Strategy.PERank - s2.Strategy.PERank);    
    if(this.peAsc) { list.reverse(); }    
  }
  sortByPS(list){
    list.sort((s1, s2) => s1.Valuation.P_S.Latest - s2.Valuation.P_S.Latest);
    if(this.psAsc) { list.reverse(); }    
  }
  sortByPFCF(list){
    list.sort((s1, s2) => s1.Valuation.P_FCF.Latest - s2.Valuation.P_FCF.Latest);
    if(this.pfcfAsc) { list.reverse(); }    
  }
  sortByInvestingScore(list){
    list.sort((s1, s2) => s2.Strategy.InvestingScore - s1.Strategy.InvestingScore);
    if(this.investingScoreAsc) { list.reverse(); }    
  }
  sortByInvestingRank(list){
    list.sort((s1, s2) => s1.Strategy.InvestingRank - s2.Strategy.InvestingRank);
    if(this.investingRankAsc) { list.reverse(); }    
  } 
    
  constructor(private stockService: StockService) {}
  
  ngOnInit() {      
    this.stockService.getLocalStocks('http://localhost:3000/stock_pricing')
      .subscribe((stockPrices: StockPriceObject) => {
        this.stockPrices = stockPrices;
        console.log(this.stockPrices);
      });

    this.stockService.getStocks('http://localhost:3000/stocks_largecap')
      .subscribe((stocks: StockObject[]) => {
        this.stocks = stocks;
        this.stocksFilteredPE = this.stocks.filter(x => x.Valuation.P_E.Latest > 0);
                
        if(this.stockPrices !== undefined) {
          if(this.stockPrices.stocks !== undefined) {
            for(var x = 0; x < this.stocksFilteredPE.length; x++) {
              if(this.stockPrices.stocks[x] !== undefined){
                for(var y = 0; y < this.stockPrices.stocks.length; y++) {
                  if(this.stocksFilteredPE[x].Info.Ticker == this.stockPrices.stocks[y][0] || this.stocksFilteredPE[x].Info.CompanyName == this.stockPrices.stocks[y][0]) {
                    this.stocksFilteredPE[x].Stock.Price.Latest = Number(this.stockPrices.stocks[y][1]);  
                    console.log(this.stocksFilteredPE[x].Info.Ticker + ": " + this.stockPrices.stocks[y][1] + " SEK");     
                  }
                  else {
                    console.log("Not the same: " + this.stocksFilteredPE[x].Info.Ticker + " != " + this.stockPrices.stocks[y][0]);
                  }
                }                
              }
              else {
                console.log(this.stockPrices.stocks[x] + " is undefined");
              }                  
            }
          }          
        }        

        this.sortedDividendsStocks = this.stocksFilteredPE.sort((s1, s2) => s2.Profitability.DividendRatio.Latest - s1.Profitability.DividendRatio.Latest);
        for (var i = 0; i < this.sortedDividendsStocks.length; i++) {
          this.sortedDividendsStocks[i].Strategy.DividendRank = i + 1;

          if (this.sortedDividendsStocks[i].Profitability.DividendRatio.Latest <= 0.0000001) {
            this.sortedDividendsStocks[i].Strategy.DividendScore = 0;
          }
          if (this.sortedDividendsStocks[i].Profitability.DividendRatio.Latest > 0.0000001 && this.sortedDividendsStocks[i].Profitability.DividendRatio.Latest <= 0.04) {
            this.sortedDividendsStocks[i].Strategy.DividendScore = 1;
          }
          if (this.sortedDividendsStocks[i].Profitability.DividendRatio.Latest > 0.04) {
            this.sortedDividendsStocks[i].Strategy.DividendScore = 2;
          }
        }

        this.sortedPEStocks = this.sortedDividendsStocks.sort((s1, s2) => s1.Valuation.P_E.Latest - s2.Valuation.P_E.Latest);
        for (var i = 0; i < this.sortedPEStocks.length; i++) {
          this.sortedPEStocks[i].Strategy.PERank = i + 1;

          if (this.sortedPEStocks[i].Valuation.P_E.Latest <= 0.0000001 || this.sortedPEStocks[i].Valuation.P_E.Latest > 24) {
            this.sortedPEStocks[i].Strategy.PEScore = 0;
          }
          if (this.sortedPEStocks[i].Valuation.P_E.Latest > 0.0000001 && this.sortedPEStocks[i].Valuation.P_E.Latest <= 18) {
            this.sortedPEStocks[i].Strategy.PEScore = 2;
          }
          if (this.sortedPEStocks[i].Valuation.P_E.Latest > 18 && this.sortedPEStocks[i].Valuation.P_E.Latest <= 24) {
            this.sortedPEStocks[i].Strategy.PEScore = 1;
          }
        }

        this.sortedCurrentRatioStocks = this.sortedPEStocks.sort((s1, s2) => s2.BalanceSheet.CurrentRatio.Latest - s1.BalanceSheet.CurrentRatio.Latest);
        for (var i = 0; i < this.sortedCurrentRatioStocks.length; i++) {
          this.sortedCurrentRatioStocks[i].Strategy.CurrentRatioRank = i + 1;
          this.sortedCurrentRatioStocks[i].BalanceSheet.DebtEquity = this.sortedCurrentRatioStocks[i].BalanceSheet.DebtPerShare.Latest / this.sortedCurrentRatioStocks[i].BalanceSheet.EquityPerShare.Latest;

          if (this.sortedCurrentRatioStocks[i].BalanceSheet.CurrentRatio.Latest <= 1) {
            this.sortedCurrentRatioStocks[i].Strategy.CurrentRatioScore = 0;
          }
          if (this.sortedCurrentRatioStocks[i].BalanceSheet.CurrentRatio.Latest > 1 && this.sortedCurrentRatioStocks[i].BalanceSheet.CurrentRatio.Latest <= 2) {
            this.sortedCurrentRatioStocks[i].Strategy.CurrentRatioScore = 1;
          }
          if (this.sortedCurrentRatioStocks[i].BalanceSheet.CurrentRatio.Latest > 2) {
            this.sortedCurrentRatioStocks[i].Strategy.CurrentRatioScore = 2;
          }
        }

        this.stocksFilteredDebtEquity = this.sortedCurrentRatioStocks.filter(x => x.BalanceSheet.DebtEquity > 0);

        this.sortedDebtEquityRatioStocks = this.stocksFilteredDebtEquity.sort((s1, s2) => s1.BalanceSheet.DebtEquity - s2.BalanceSheet.DebtEquity);
        for (var i = 0; i < this.sortedDebtEquityRatioStocks.length; i++) {
          this.sortedDebtEquityRatioStocks[i].Strategy.DebtEquityRank = i + 1;

          if (this.sortedDebtEquityRatioStocks[i].BalanceSheet.DebtEquity <= 0.0000001 || this.sortedDebtEquityRatioStocks[i].BalanceSheet.DebtEquity > 1.5) {
            this.sortedDebtEquityRatioStocks[i].Strategy.DebtEquityScore = 0;
          }
          if (this.sortedDebtEquityRatioStocks[i].BalanceSheet.DebtEquity > 0.0000001 && this.sortedDebtEquityRatioStocks[i].BalanceSheet.DebtEquity <= 0.8) {
            this.sortedDebtEquityRatioStocks[i].Strategy.DebtEquityScore = 2;
          }
          if (this.sortedDebtEquityRatioStocks[i].BalanceSheet.DebtEquity > 0.8 && this.sortedDebtEquityRatioStocks[i].BalanceSheet.DebtEquity <= 1.5) {
            this.sortedDebtEquityRatioStocks[i].Strategy.DebtEquityScore = 1;
          }
        }

        this.sortedNetMarginStocks = this.sortedDebtEquityRatioStocks.sort((s1, s2) => s2.Efficiency.NetProfitMargin.Latest - s1.Efficiency.NetProfitMargin.Latest);
        for (var i = 0; i < this.sortedNetMarginStocks.length; i++) {
          this.sortedNetMarginStocks[i].Strategy.NetMarginRank = i + 1;

          if (this.sortedNetMarginStocks[i].Efficiency.NetProfitMargin.Latest <= 0.05) {
            this.sortedNetMarginStocks[i].Strategy.NetMarginScore = 0;
          }
          if (this.sortedNetMarginStocks[i].Efficiency.NetProfitMargin.Latest > 0.05 && this.sortedNetMarginStocks[i].Efficiency.NetProfitMargin.Latest <= 0.2) {
            this.sortedNetMarginStocks[i].Strategy.NetMarginScore = 1;
          }
          if (this.sortedNetMarginStocks[i].Efficiency.NetProfitMargin.Latest > 0.2) {
            this.sortedNetMarginStocks[i].Strategy.NetMarginScore = 2;
          }
        }

        this.sortedROCStocks = this.sortedNetMarginStocks.sort((s1, s2) => s2.Profitability.ROC.Latest - s1.Profitability.ROC.Latest);
        for (var i = 0; i < this.sortedROCStocks.length; i++) {
          this.sortedROCStocks[i].Strategy.ROCRank = i + 1;
          this.sortedROCStocks[i].Strategy.InvestingRank =
            this.sortedROCStocks[i].Strategy.DividendRank
            + this.sortedROCStocks[i].Strategy.PERank
            + this.sortedROCStocks[i].Strategy.CurrentRatioRank
            + this.sortedROCStocks[i].Strategy.DebtEquityRank
            + this.sortedROCStocks[i].Strategy.NetMarginRank
            + this.sortedROCStocks[i].Strategy.ROCRank;

          if (this.sortedROCStocks[i].Profitability.ROC.Latest <= 0.1) {
            this.sortedROCStocks[i].Strategy.ROCScore = 0;
          }
          if (this.sortedROCStocks[i].Profitability.ROC.Latest > 0.1 && this.sortedROCStocks[i].Profitability.ROC.Latest <= 0.2) {
            this.sortedROCStocks[i].Strategy.ROCScore = 1;
          }
          if (this.sortedROCStocks[i].Profitability.ROC.Latest > 0.2) {
            this.sortedROCStocks[i].Strategy.ROCScore = 2;
          }

          this.sortedROCStocks[i].Strategy.InvestingScore =
            this.sortedROCStocks[i].Strategy.DividendScore
            + this.sortedROCStocks[i].Strategy.PEScore
            + this.sortedROCStocks[i].Strategy.CurrentRatioScore
            + this.sortedROCStocks[i].Strategy.DebtEquityScore
            + this.sortedROCStocks[i].Strategy.NetMarginScore
            + this.sortedROCStocks[i].Strategy.ROCScore;
        }

        this.investingStocks = this.sortedROCStocks.sort((s1, s2) => s2.Strategy.InvestingScore - s1.Strategy.InvestingScore);
        this.bankStocks = this.investingStocks.filter(x => x.Info.Industry === 'Bank');
        this.bettingOchSpelStocks = this.investingStocks.filter(x => x.Info.Industry === 'Betting & Spel');
        this.bioteknikStocks = this.investingStocks.filter(x => x.Info.Industry === 'Bioteknik');
        this.byggnationStocks = this.investingStocks.filter(x => x.Info.Industry === 'Byggnation');
        this.byggprodukterStocks = this.investingStocks.filter(x => x.Info.Industry === 'Byggprodukter');
        this.elektroniskUtrustningStocks = this.investingStocks.filter(x => x.Info.Industry === 'Elektronisk utrustning');
        this.fastigheterStocks = this.investingStocks.filter(x => x.Info.Industry === 'Fastigheter');
        this.gruvOchMetallStocks = this.investingStocks.filter(x => x.Info.Industry === 'Gruv & Metall');
        this.handelOchDistributionStocks = this.investingStocks.filter(x => x.Info.Industry === 'Handel & Distribution');
        this.hotellRestaurangOchNojeStocks = this.investingStocks.filter(x => x.Info.Industry === 'Hotell, restaurang & nöje');
        this.investmentbolagStocks = this.investingStocks.filter(x => x.Info.Industry === 'Investmentbolag');
        this.itTjansterStocks = this.investingStocks.filter(x => x.Info.Industry === 'IT-Tjänster');
        this.kladerOchTextilStocks = this.investingStocks.filter(x => x.Info.Industry === 'kläder & Textil');
        this.konsumentStocks = this.investingStocks.filter(x => x.Info.Industry === 'Konsument');
        this.livsmedelStocks = this.investingStocks.filter(x => x.Info.Industry === 'Livsmedel');
        this.lakemedelStocks = this.investingStocks.filter(x => x.Info.Industry === 'Läkemedel');
        this.produktionStocks = this.investingStocks.filter(x => x.Info.Industry === 'Produktion');
        this.sjukvardStocks = this.investingStocks.filter(x => x.Info.Industry === 'Sjukvård');
        this.skogStocks = this.investingStocks.filter(x => x.Info.Industry === 'Skog');
        this.telekommunikationstjansterStocks = this.investingStocks.filter(x => x.Info.Industry === 'Telekommunikationstjänster');
        this.tjansterOchLeveransStocks = this.investingStocks.filter(x => x.Info.Industry === 'Tjänster & Leverans');
      })
  }
}
