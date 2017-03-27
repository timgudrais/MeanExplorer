import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-mid-cap',
  templateUrl: './mid-cap.component.html',
  styleUrls: ['./mid-cap.component.css'],
  providers: [ UserService ]
})
export class MidCapComponent implements OnInit {
  title = "Mid Cap";
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
    this.userService.getMidCapData().subscribe(data => this.dataDump = data.query.results.table);
    this.dataLoaded = true;
  }

  loadMidCap() {    
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