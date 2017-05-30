import { Component, OnInit } from '@angular/core';
import { RdpdService } from './rdpd.service';

@Component({
  selector: 'rdpd',
  templateUrl: './rdpd.component.html',
  styleUrls: ['./rdpd.component.css'],
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
  // End Tabs

  // Begin REA-Metoden
  // showBilligaBolagHogEp = false;
  // toggleShowBilligaBolagHogEp() {
    // this.showBilligaBolagHogEp = !this.showBilligaBolagHogEp;
  // }

  // showBraBolagHogtJEK = false;
  // toggleShowBraBolagHogtJEK() {
    // this.showBraBolagHogtJEK = !this.showBraBolagHogtJEK;
  // }

  // showHogSakerhetHogDirAvk = false;
  // toggleShowHogSakerhetHogDirAvk() {
    // this.showHogSakerhetHogDirAvk = !this.showHogSakerhetHogDirAvk;
  // }
  // End REA-Metoden

  ngOnInit() {
  }

}
