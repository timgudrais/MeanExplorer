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
                "Andring":"Navbar flyttad till egen komponent",
                "Namn":"Tim",
            },
            {
                "Typ":"New",
                "Andring":"Nya komponenter: Small cap, Mid cap, Large cap, Makroindikatorer och Teknisk analys",
                "Namn":"Tim",
            },
            {
                "Typ":"New",
                "Andring":"Routing",
                "Namn":"Tim",
            },
            {
                "Typ":"New",
                "Andring":"Change log",
                "Namn":"Tim",
            },
        ]
    }

  constructor() { }

}
