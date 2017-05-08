import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roi',
  templateUrl: './roi.component.html',
  styleUrls: ['./roi.component.css']
})
export class RoiComponent implements OnInit {
  title = 'Return on investment - calculator';

  public capital = 0;

  constructor() { }

  ngOnInit() {
  }

}
