import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject } from "./mid-cap-stock.model";
import { MidCapService } from "./mid-cap.service";


@Component({
  selector: 'app-mid-cap',
  templateUrl: './mid-cap.component.html',
  styleUrls: ['./mid-cap.component.css'],
  providers: [ MidCapService ]
})

@Injectable()
export class MidCapComponent implements OnInit {
  title = 'Mid Cap';
  stocks: StockObject[];
  sliderValue:number = 20;

  filter: StockObject = new StockObject();

  constructor(private midCapService: MidCapService) { }

  ngOnInit() {
      this.midCapService.getStocks()
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }
}