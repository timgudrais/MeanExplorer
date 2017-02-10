import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TableStockListFirstNorthComponent } from './table-stock-list-first-north/table-stock-list-first-north.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TableStockListFirstNorthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
