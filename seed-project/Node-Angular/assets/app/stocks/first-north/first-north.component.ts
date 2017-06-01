import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../models/stock.model";
import { StockService } from "../stock.service";


@Component({
  selector: 'app-first-north',
  templateUrl: './first-north.component.html',
  styleUrls: ['./first-north.component.css'],
  providers: [ StockService ]
})

@Injectable()
export class FirstNorthComponent implements OnInit {
  title = 'First North';
  stocks: StockObject[];
  sliderValue:number = 20;

  filter: StockObject = new StockObject();

  constructor(private stockService: StockService) { }

  ngOnInit() {
      this.stockService.getStocks('http://localhost:3000/stocks_firstnorth')
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }
}