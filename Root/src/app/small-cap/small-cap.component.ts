import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-small-cap',
  templateUrl: './small-cap.component.html',
  styleUrls: ['./small-cap.component.css'],
  providers: [
    UserService
  ]
})
export class SmallCapComponent implements OnInit {
  title = "Small Cap";
  ngOnInit() {
  }

  constructor(private userService: UserService) {}
  dataDump;
  headersArray = [];
  headers = "";
  rowArray = [];

  nameArray = [];

  dataLoaded = false;
  showErrorMessage = false;
  displayTable = false;

  loadData() {    
    this.userService.getSmallCapData().subscribe(data => this.dataDump = data.query.results.table);
    this.dataLoaded = true;
  }

  loadSmallCap() {    
    if(this.dataDump === undefined){
      this.showErrorMessage = true;      
      return;
    }
    else
    {                 
      this.showErrorMessage = false;    
                    
      for (var i = 0; i < this.dataDump.thead.tr.th.length; i++) { 
        var tempString = this.dataDump.thead.tr.th[i].content;         
        this.headersArray.push(tempString);       
      }
      this.headersArray.splice(0,1);

      for (var i = 0; i < this.dataDump.tbody.tr.length; i++) { 
        var row = [];
        for (var x = 0; x < this.dataDump.tbody.tr[i].td.length; x++) {
          var tempstring;
          if(this.dataDump.tbody.tr[i].td[x].a !== undefined && this.dataDump.tbody.tr[i].td[x].a.content !== undefined) {                        
            tempString = this.dataDump.tbody.tr[i].td[x].a.content;
            // this.nameArray.push(this.dataDump.tbody.tr[i].td[x].a.content);            
          }
          else if(this.dataDump.tbody.tr[i].td[x].a !== undefined && this.dataDump.tbody.tr[i].td[x].a.href !== undefined) {
            tempString = this.dataDump.tbody.tr[i].td[x].a.href; 
          }
          else{
            tempString = this.dataDump.tbody.tr[i].td[x].content;
          }
          row.push(tempString);      
        }
        this.rowArray.push(row);  
      }
      
      this.displayTable = true;
    }    
  }
}
