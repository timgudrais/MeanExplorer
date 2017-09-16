import { Component, OnInit } from '@angular/core';
import { RbbhsService } from './rbbhs.service';

@Component({
  selector: 'rbbhs',
  templateUrl: './rbbhs.component.html',
  styleUrls: ['./rbbhs.component.css', '../stock-wiki.component.css'],
  providers: [
    RbbhsService
  ]

})
export class RbbhsComponent implements OnInit {

  formulas;
  constructor(stockWikiService: RbbhsService) { 
    this.formulas = stockWikiService.getFormulas();
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
