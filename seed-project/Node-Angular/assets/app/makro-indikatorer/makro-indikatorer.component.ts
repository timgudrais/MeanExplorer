import { Component, OnInit } from '@angular/core';

import { MacroIndicatorModel } from "./makro-indikatorer.model";
import { MacroIndicatorService } from "./makro-indikatorer.service";


@Component({
  selector: 'app-makro-indikatorer',
  templateUrl: './makro-indikatorer.component.html',
  styleUrls: ['./makro-indikatorer.component.css'],
  providers: [ MacroIndicatorService ]
})
export class MakroIndikatorerComponent implements OnInit {
  title = 'Makroindikatorer';
  macroIndicators: MacroIndicatorModel[];

  constructor(private macroIndicatorService: MacroIndicatorService) { }

  ngOnInit() {
  }

}
