import { Component, OnInit } from '@angular/core';
import { MidCapService } from './mid-cap.service';

@Component({
  selector: 'app-mid-cap',
  templateUrl: './mid-cap.component.html',
  styleUrls: ['./mid-cap.component.css'],
  providers: [ MidCapService ]
})
export class MidCapComponent implements OnInit {
  title = 'Mid Cap';
  
  constructor() {}
  

  test() {
  const parse5 = require('parse5');
  const document = parse5.parse(
    '<html><head></head><body>Hi there!</body></html>', { 
      treeAdapter: parse5.treeAdapters.default
     }
  );

  console.log(document.childNodes[0].childNodes[1].childNodes[0].value); //> 'html'
  }

  

  ngOnInit() {
  }

}
