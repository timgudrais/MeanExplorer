import { Injectable } from '@angular/core';

@Injectable()
export class ChangeLogService {
  getChangeLog() {
        return [
            {
                "Typ":"Change",
                "Andring":"Arkitektur uppdaterad enligt Angular CLI best practice",
                "Namn":"Tim",
                "Datum":"26 Feb 2017"
            },
            {
                "Typ":"Change",
                "Andring":"Navbar --> egen komponent",
                "Namn":"Tim",
                "Datum":"26 Feb 2017"
            },
            {
                "Typ":"New",
                "Andring":"Nya komponenter: Small cap, Mid cap, Large cap, Makroindikatorer och Teknisk analys",
                "Namn":"Tim",
                "Datum":"26 Feb 2017"
            },
            {
                "Typ":"New",
                "Andring":"Fixat AngularRouting (testa!)",
                "Namn":"Tim",
                "Datum":"26 Feb 2017"
            },
            {
                "Typ":"New",
                "Andring":"Change log",
                "Namn":"Tim",
                "Datum":"26 Feb 2017"
            },
            {
                "Typ":"New",
                "Andring":"FormsModule + börjat på kommentarsfunktionalitet",
                "Namn":"Tim",
                "Datum":"26 Feb 2017"
            },
            {
                "Typ":"New",
                "Andring":"Vänta... Händer något om man rör musen över headers på first north tabellen måntro? ;)",
                "Namn":"Tim",
                "Datum":"6 Mar 2017"
            },
            {
                "Typ":"New",
                "Andring":"Lade till checklista till Stocks Wiki",
                "Namn":"Sebbe",
                "Datum":"10 Mar 2017"
            },
            {
                "Typ":"New",
                "Andring":"Möjlighet att gömma/visa change log",
                "Namn":"Sebbe",
                "Datum":"12 Mar 2017"
            },
            {
                "Typ":"New",
                "Andring":"Massa smått och gott under länken Fundamental Analysis",
                "Namn":"Sebbe",
                "Datum":"14 Mar 2017"
            },
        ]
    }

  constructor() { }

}
