import { Injectable } from '@angular/core';

@Injectable()
export class ToDoListService {
  getToDos() {
        return [
            {
                "Amne":"Ny komponentstruktur",
                "Beskrivning":"Uppdatera hela sidan med ny komponentstruktur + app.module bootstrap",
                "Prioritet":10,
                "Status": "Done"
            },
            {
                "Amne":"HTML templates (komponenter)",
                "Beskrivning":"Flytta template HTML till templateUrl för alla komponenter",
                "Prioritet":10,
                "Status": "Done"
            },
            {
                "Amne":"CSS templates (komponenter)",
                "Beskrivning":"Flytta template CSS till templateUrl för alla komponenter",
                "Prioritet":10,
                "Status": "Done"
            },
            {
                "Amne":"Anuglar CLI",
                "Beskrivning":"Bygg om hela sidan med Angular CLI genererade komponenter/services",
                "Prioritet":9,
                "Status": "Done"
            },
            {
                "Amne":"Navbar komponent + Routing",
                "Beskrivning":"Skapa navbar komponent och bygg in AngularRouting",
                "Prioritet":9,
                "Status": "Done"
            },
            {
                "Amne":"Kommentars funktionalitet",
                "Beskrivning":"Lägg till forms module, fixa kommentarsfunktionalitet. https://angular.io/docs/ts/latest/tutorial/toh-pt1.html",
                "Prioritet":9,
                "Status": "Ej påbörjad"
            },
            {
                "Amne":"First north lista",
                "Beskrivning":"Automatisk parsing av alla bolag på First North",
                "Prioritet":9,
                "Status": "Ej påbörjad"
            },
            {
                "Amne":"Tooltips",
                "Beskrivning":"Lägg till funktionalitet för tooltips",
                "Prioritet":8,
                "Status": "Ej påbörjad"
            },
            {
                "Amne":"Small cap lista",
                "Beskrivning":"Small cap lista, efter First North",
                "Prioritet":7,
                "Status": "Ej påbörjad"
            },
            {
                "Amne":"Makroindikatorer",
                "Beskrivning":"Makroindikatorer, efter first north + small cap",
                "Prioritet":6,
                "Status": "Ej påbörjad"
            },
            {
                "Amne":'Lägg till "kommande noteringar"',
                "Beskrivning":'Lägg till flik för "kommande noteringar"',
                "Prioritet":6,
                "Status": "Ej påbörjad"
            },
            {
                "Amne":"Teknisk analys",
                "Beskrivning":"Teknisk analys, kanske efter sommaren",
                "Prioritet":5,
                "Status": "Ej påbörjad"
            }
        ]
    }
    
  constructor() { }

}
