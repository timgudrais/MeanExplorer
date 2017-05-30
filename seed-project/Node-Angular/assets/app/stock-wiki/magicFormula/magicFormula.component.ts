import { Component, OnInit } from '@angular/core';
import { MagicFormulaService } from './magicFormula.service';

@Component({
  selector: 'magicFormula',
  templateUrl: './magicFormula.component.html',
  styleUrls: ['./magicFormula.component.css'],
  providers: [
    MagicFormulaService
  ]

})
export class MagicFormulaComponent implements OnInit {

  formulas;
  constructor(magicFormulaService: MagicFormulaService) { 
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
