import { Component, OnInit, EventEmitter } from '@angular/core';
import { FirstNorthService } from './first-north.service';

@Component({
  selector: 'app-first-north',
  templateUrl: './first-north.component.html',
  styleUrls: ['./first-north.component.css'],
  providers: [ FirstNorthService ]
})
export class FirstNorthComponent implements OnInit {
  title = "First North";

  // Get list of stocks 
  stocks;
  constructor(firstNorthService: FirstNorthService) { 
    this.stocks = firstNorthService.getStocks();
  }

  // Edit "Kommentar"
  private isDisplay = true;

  beginEdit(el: HTMLElement): void {
      this.isDisplay = false;

      setTimeout(() => {
          el.focus();
      }, 100);
  }

  editDone(newComment: string): void {
      this.isDisplay = true;
  }

  ngOnInit() {
  }

}
