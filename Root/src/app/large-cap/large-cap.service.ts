import { Injectable } from '@angular/core';

@Injectable()
export class LargeCapService {

  constructor() { }
  getStocks() {
        return [
            {
                "Lista":"Large Cap",
                "Namn":"Industrivärden C",
                "Borsvarde":82564,
                "P/E":5.12,
                "P/E-ranking":0,
                "JEK/Aktier":189.6,
                "JEK-ranking":0,
                "Direktavk. %":2.7
            },
            {
                "Lista":"Large Cap",
                "Namn":"Investor B",
                "Borsvarde":279807,
                "P/E":8.33,
                "P/E-ranking":0,
                "JEK/Aktier":391.15,
                "JEK-ranking":0,
                "Direktavk. %":3.01
            },
        ]
  }
}
