import { Component, OnInit } from '@angular/core';
import { FirstNorthService } from './first-north.service';

@Component({
  selector: 'app-first-north',
  templateUrl: './first-north.component.html',
  styleUrls: ['./first-north.component.css'],
  providers: [ FirstNorthService ]
})
export class FirstNorthComponent implements OnInit {
  title = "First North";

  stocks;
  constructor(firstNorthService: FirstNorthService) { 
    this.stocks = firstNorthService.getStocks();
  }

  save(): void {
    this.stocks.update(this.stocks)
  }

  ngOnInit() {
  }

}
