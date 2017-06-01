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

  filter: StockObject = new StockObject();

  constructor(private stockService: StockService) { }

  ngOnInit() {
      this.stockService.getStocks('http://localhost:3000/stocks_largecap')
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }

}
