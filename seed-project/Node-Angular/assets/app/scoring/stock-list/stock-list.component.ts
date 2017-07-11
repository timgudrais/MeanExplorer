import { Component, Input, Injectable, OnInit } from '@angular/core';

import { StockObject } from "../../stocks/models/stock.model";
import { StockService } from '../../stocks/stock.service';

@Component({
  selector: '[stock-list]',
  templateUrl: './stock-list.component.html',
  styleUrls: ['../scoring.component.css']
})
export class StockListComponent {
  @Input('stock-list') list: StockObject[];
}