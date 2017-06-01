import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../models/stock.model";
import { FirstNorthService } from "./first-north.service";


@Component({
  selector: 'app-first-north',
  templateUrl: './first-north.component.html',
  styleUrls: ['./first-north.component.css'],
  providers: [ FirstNorthService ]
})

@Injectable()
export class FirstNorthComponent implements OnInit {
  title = 'First North';
  stocks: StockObject[];
  sliderValue:number = 20;

  filter: StockObject = new StockObject();

  constructor(private firstNorthService: FirstNorthService) { }

  ngOnInit() {
      this.firstNorthService.getStocks()
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }
}