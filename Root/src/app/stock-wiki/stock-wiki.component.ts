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
  formulas;
  constructor(stockWikiService: StockWikiService) { 
    this.formulas = stockWikiService.getFormulas();
  }

  // Begin Tabs
  tab = 0;    
  changeTab(number) {
    this.tab = number;
  }
  // End Tabs

  // Begin REA-Metoden
  showBilligaBolagHogEp = false;
  toggleShowBilligaBolagHogEp() {
    this.showBilligaBolagHogEp = !this.showBilligaBolagHogEp;
  }

  showBraBolagHogtJEK = false;
  toggleShowBraBolagHogtJEK() {
    this.showBraBolagHogtJEK = !this.showBraBolagHogtJEK;
  }

  showHogSakerhetHogDirAvk = false;
  toggleShowHogSakerhetHogDirAvk() {
    this.showHogSakerhetHogDirAvk = !this.showHogSakerhetHogDirAvk;
  }
  // End REA-Metoden

  // Begin Nyckeltal
  showNyckeltal = false;
  toggleShowNyckeltal() {
    this.showNyckeltal = !this.showNyckeltal;
  }
  // End Nyckeltal

  // Begin REA-Stegen
  showGrundUtbud = true;
  toggleShowGrundutbud() {
    this.showGrundUtbud = !this.showGrundUtbud;
  }

  showDaligaBolag = false;
  toggleShowDaligaBolag() {
    this.showDaligaBolag = !this.showDaligaBolag;
  }

  showBilligaBolag = false;
  toggleShowBilligaBolag() {
    this.showBilligaBolag = !this.showBilligaBolag;
  }

  showBraBolag = false;
  toggleShowBraBolag() {
    this.showBraBolag = !this.showBraBolag;
  }

  showSummeraBilligaBraBolag = false;
  toggleShowSummeraBilligaBraBolag() {
    this.showSummeraBilligaBraBolag = !this.showSummeraBilligaBraBolag;
  }

  showRelativtBilligaBraBolag = false;
  toggleShowRelativtBilligaBraBolag() {
    this.showRelativtBilligaBraBolag = !this.showRelativtBilligaBraBolag;
  }

  showHogSakerhet = false;
  toggleShowHogSakerhet() {
    this.showHogSakerhet = !this.showHogSakerhet;
  }

  showRelativtBraBilligaBolagMedHogSakerhet = false;
  toggleShowRelativtBraBilligaBolagMedHogSakerhet() {
    this.showRelativtBraBilligaBolagMedHogSakerhet = !this.showRelativtBraBilligaBolagMedHogSakerhet;
  }
  // End REA-Stegen

  ngOnInit() {
  }

}
