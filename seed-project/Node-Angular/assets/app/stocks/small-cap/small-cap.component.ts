import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../models/stock.model";
import { StockService } from "../stock.service";


@Component({
  selector: 'app-small-cap',
  templateUrl: './small-cap.component.html',
  styleUrls: ['./small-cap.component.css'],
  providers: [ StockService ]
})

@Injectable()
export class SmallCapComponent implements OnInit {
  title = 'Small Cap';
  stocks: StockObject[];
  sliderValue:number = 20;

  filter: StockObject = new StockObject();

  constructor(private stockService: StockService) { }

  ngOnInit() {
      this.stockService.getStocks('http://localhost:3000/stocks_smallcap')
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }
}