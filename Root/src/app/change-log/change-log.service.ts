import { Injectable } from '@angular/core';

@Injectable()
export class ChangeLogService {
  getChangeLog() {
        return [
            {
                "Typ":"Change",
                "Andring":"Arkitektur uppdaterad enligt Angular CLI best practice",
                "Namn":"Tim",
            },
            {
                "Typ":"Change",
                "Andring":"Navbar --> egen komponent",
                "Namn":"Tim",
            },
            {
                "Typ":"New",
                "Andring":"Nya komponenter: Small cap, Mid cap, Large cap, Makroindikatorer och Teknisk analys",
                "Namn":"Tim",
            },
            {
                "Typ":"New",
                "Andring":"Fixat AngularRouting (testa!)",
                "Namn":"Tim",
            },
            {
                "Typ":"New",
                "Andring":"Change log",
                "Namn":"Tim",
            },
            {
                "Typ":"New",
                "Andring":"FormsModule + börjat på kommentarsfunktionalitet",
                "Namn":"Tim",
            },
        ]
    }

  constructor() { }

}
