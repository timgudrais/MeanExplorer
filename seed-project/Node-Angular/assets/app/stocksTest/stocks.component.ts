import { Component, Injectable, OnInit } from '@angular/core';

import { StockObject, Info, ReportDate, Stock, Return } from "./stock.model";
import { StocksService } from "./stocks.service";
import { StockValuePipe } from './stocksValue-filter.pipe';
import { StockTypePipe } from './stockType.pipe';

@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],  
  providers: [ StocksService ]
})

@Injectable()
export class StocksComponent implements OnInit {
  title = 'stocks';
  stocks: StockObject[];
  sliderValue:number = 20;

//   filter: StockObject = new StockObject(
//       new Info(
//           "",
//           "",
//           "",
//           "",
//           "",
//           "",
//           new ReportDate(
//               ""
//           )
//       ),
//       new Stock(
//           0,
//           new Return(
//               0,
//               0,
//               0,
//               0,
//               0,
//               0,
//               0,
//               0
//           )
//       )
//   );

  constructor(private stockService: StocksService) { }

  ngOnInit() {
      this.stockService.getStocks()
        .subscribe(
          (stocks: StockObject[]) => {
            this.stocks = stocks;
          }
        )
  }
}