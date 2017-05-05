import { Component, OnInit } from '@angular/core';
import { StockWikiService } from './stock-wiki.service';

@Component({
  selector: 'app-stock-wiki',
  templateUrl: './stock-wiki.component.html',
  styleUrls: ['./stock-wiki.component.css'],
  providers: [
    StockWikiService
  ]
})
export class StockWikiComponent implements OnInit {    
  
  constructor() {   
  }  

  // Begin Tabs
  tab = 0;    
  changeTab(number) {
    this.tab = number;
  }
  // End Tabs

  ngOnInit() {
  }

}
