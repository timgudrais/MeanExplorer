import { Component, OnInit } from '@angular/core';
import { FundamentalInvestingService } from './fundamentalInvesting.service';

@Component({
  selector: 'fundamentalInvesting',
  templateUrl: './fundamentalInvesting.component.html',
  styleUrls: ['./fundamentalInvesting.component.css'],
  providers: [
    FundamentalInvestingService
  ]

})
export class MagicFormulaComponent implements OnInit {

  formulas;
  constructor(fundamentalInvestingService: FundamentalInvestingService) { 
    // this.formulas = stockWikiService.getFormulas();
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
