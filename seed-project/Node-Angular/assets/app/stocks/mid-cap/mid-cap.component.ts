import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../models/stock.model";
import { StockService } from "../stock.service";


@Component({
  selector: 'app-mid-cap',
  templateUrl: './mid-cap.component.html',
  styleUrls: ['./mid-cap.component.css'],
  providers: [ StockService ]
})

@Injectable()
export class MidCapComponent implements OnInit {
  title = 'Mid Cap';
  stocks: StockObject[];
  sliderValue:number = 20;

  // filter: StockObject = new StockObject();

  constructor(private stockService: StockService) { }

  ngOnInit() {
      this.stockService.getStocks('http://localhost:3000/stocks_midcap')
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }
}