import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csvJSON',
  templateUrl: './csvJSON.component.html',
  styleUrls: ['./csvJSON.component.css']
})
export class CsvJSONComponent implements OnInit {
  title = 'CSV To JSON';

  constructor() { }

  ngOnInit() {
  }

  insertCSV = function() {
    
  }

   //var csv is the CSV file with headers
  csvToJSON = function csvJSON(csv){    
    alert(csv);
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(";");

    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }
}
