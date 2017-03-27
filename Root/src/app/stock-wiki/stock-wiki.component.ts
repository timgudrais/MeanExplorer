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

  ngOnInit() {
  }

}
