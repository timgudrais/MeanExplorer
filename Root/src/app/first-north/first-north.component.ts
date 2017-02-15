import { Component, OnInit, EventEmitter } from '@angular/core';
import { FirstNorthService } from './first-north.service';
import { InlineEditComponent } from '../shared/inline-edit/inline-edit.component';

@Component({
  selector: 'app-first-north',
  templateUrl: './first-north.component.html',
  styleUrls: ['./first-north.component.css'],
  providers: [ FirstNorthService ]
})
export class FirstNorthComponent implements OnInit {
  title = "First North";

  // Get list of stocks 
  stocks;
  constructor(firstNorthService: FirstNorthService) { 
    this.stocks = firstNorthService.getStocks();
  }

  ngOnInit() {
  }

}
