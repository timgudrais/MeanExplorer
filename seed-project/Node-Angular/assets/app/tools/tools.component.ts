import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  title = 'Finansiella Verktyg';

  constructor() { }

  ngOnInit() {
  }

  // Begin Tabs
  tab = 0;    
  changeTab(number) {
    this.tab = number;
  }
  // End Tabs
}
