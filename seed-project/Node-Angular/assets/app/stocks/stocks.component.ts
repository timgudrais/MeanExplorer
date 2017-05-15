import { Component, Injectable, OnInit } from '@angular/core';

import { Stock } from "./stock.model";
import { StocksService } from "./stocks.service";

@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  providers: [ StocksService ]
})

@Injectable()
export class StocksComponent implements OnInit {
  title = 'stocks';
  stocks: Stock[];

  filter: Stock = new Stock();

  constructor(private stockService: StocksService) { }

  ngOnInit() {
      this.stockService.getStocks()
        .subscribe(
          (stocks: Stock[]) => {
            this.stocks = stocks;
          }
        )
  }
}