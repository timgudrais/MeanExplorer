import { Component, OnInit } from '@angular/core';
import { RdpdService } from './rdpd.service';

@Component({
  selector: 'rdpd',
  templateUrl: './rdpd.component.html',
  styleUrls: ['./rdpd.component.css', '../stock-wiki.component.css'],
  providers: [
    RdpdService
  ]

})
export class RdpdComponent implements OnInit {

  formulas;
  constructor(stockWikiService: RdpdService) { 
    // this.formulas = stockWikiService.getFormulas();
  }  

  // Begin Tabs
  tab = 0;    
  changeTab(number) {
    this.tab = number;
  }

  info = 0;
  displayInfo(number) {
    this.info = number;
  }
  // End Tabs

  ngOnInit() {
  }

}
