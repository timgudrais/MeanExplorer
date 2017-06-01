import { Component, OnInit } from '@angular/core';
import { CryptoCurrenciesService } from './crypto-currencies.service';

@Component({
  selector: 'crypto-currencies',
  templateUrl: './crypto-currencies.component.html',
  styleUrls: ['./crypto-currencies.component.css'],
  providers: [ CryptoCurrenciesService ]
})
export class CryptoCurrenciesComponent implements OnInit {
  title = 'Crypto-currencies';

  toDos;
  constructor(toDoListService: CryptoCurrenciesService) {
     
  }

  ngOnInit() {
  }

}
