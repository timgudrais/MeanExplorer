import { Component, OnInit } from '@angular/core';
import { LargeCapService } from './large-cap.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-large-cap',
  templateUrl: './large-cap.component.html',
  styleUrls: ['./large-cap.component.css'],
  providers: [ UserService ]
})
export class LargeCapComponent implements OnInit {
  title = "Large Cap";
  ngOnInit() {
  }

  constructor(private userService: UserService) {}
  dataDump;
  headersArray = [];
  headers = "";
  rowArray = [];
  dataLoaded = false;
  showErrorMessage = false;
  displayTable = false;

  loadData() {
    // this.userService.getData().subscribe(data => this.dataDump = data);
    this.userService.getLargeCapData().subscribe(data => this.dataDump = data.query.results.table);
    this.dataLoaded = true;
  }

  loadLargeCap() {    
    if(this.dataDump === undefined){
      this.showErrorMessage = true;      
      return;
    }
    else
    {                 
      this.showErrorMessage = false;    
                    
      for (var i = 0; i < this.dataDump.thead.tr.th.length; i++) { 
        var tempString = this.dataDump.thead.tr.th[i].content;
        // this.headers = tempString.replace(/['"]+/g, '');  
        this.headersArray.push(tempString);       
      }

      for (var i = 0; i < this.dataDump.tbody.tr.length; i++) { 
        var row = [];
        for (var x = 0; x < this.dataDump.tbody.tr[i].td.length; x++) {
          var temp = this.dataDump.tbody.tr[i].td[x];
          // temp[0].a.nhref = "http://www.nasdaqomxnordic.com" + temp[0].a.href;
          row.push(temp);      
        }
        this.rowArray.push(row);  
      }      
      this.displayTable = true;
    }    
  }
}

export class LargeCapComponentRBBHS {
  title = 'Large Cap'  

  // Hämtar en lista av aktier
  lgStocks;
  peRankStocks;
  jekRankStocks;
  daRankStocks;
  rbbRankStocks;
  rbbhsRankStocks;
  constructor(largeCapService: LargeCapService) { 
    this.lgStocks = largeCapService.getStocks();

    // PE-Ranking
    this.peRankStocks = this.lgStocks.sort(function (a, b) {
      return a.Pe - b.Pe; // Lågt PE-tal är bra
    });
    for(var i = 0; i < this.peRankStocks.length; i++){
      this.peRankStocks[i].PeRanking = i + 1;      
    };

    // JEK-Ranking
    this.jekRankStocks = this.lgStocks.sort(function (a, b) {
      return b.JekAktie - a.JekAktie; // Högt Justerat Eget kapital per Aktie är bra
    });
    for(var i = 0; i < this.jekRankStocks.length; i++){
      this.jekRankStocks[i].JekRanking = i + 1
    };   

    // Direktavkastning
    this.daRankStocks = this.lgStocks.sort(function (a, b) {
      return a.DirektAvkastning - b.DirektAvkastning; // Hög direktavkastning ger högre säkerhet
    });
    for(var i = 0; i < this.daRankStocks.length; i++){
      this.daRankStocks[i].DaRanking = i + 1
    };    

    // RBB-Ranking && RBBHS-Ranking
    for(var i = 0; i < this.lgStocks.length; i++){
      this.lgStocks[i].RbbRanking = this.lgStocks[i].JekRanking + this.lgStocks[i].PeRanking;
      this.lgStocks[i].RbbhsRanking = this.lgStocks[i].JekRanking + this.lgStocks[i].PeRanking + this.daRankStocks[i].DaRanking;
    };

    // RBBHS-Ranking
    this.rbbhsRankStocks = this.lgStocks.sort(function (a, b) {
      return a.RbbhsRanking - b.RbbhsRanking;
    });
    
  }
}