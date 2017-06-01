import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../models/stock.model";
import { SmallCapService } from "./small-cap.service";


@Component({
  selector: 'app-small-cap',
  templateUrl: './small-cap.component.html',
  styleUrls: ['./small-cap.component.css'],
  providers: [ SmallCapService ]
})

@Injectable()
export class SmallCapComponent implements OnInit {
  title = 'Small Cap';
  stocks: StockObject[];
  sliderValue:number = 20;

  filter: StockObject = new StockObject();

  constructor(private smallCapService: SmallCapService) { }

  ngOnInit() {
      this.smallCapService.getStocks()
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }
}