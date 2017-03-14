import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FirstNorthComponent } from './first-north/first-north.component';
import { SmallCapComponent } from './small-cap/small-cap.component';
import { MidCapComponent } from './mid-cap/mid-cap.component';
import { LargeCapComponent } from './large-cap/large-cap.component';
import { MakroIndikatorerComponent } from './makro-indikatorer/makro-indikatorer.component';
import { TekniskAnalysComponent } from './teknisk-analys/teknisk-analys.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { InlineEditComponent } from './shared/inline-edit/inline-edit.component';
import { StockWikiComponent } from './stock-wiki/stock-wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    FirstNorthComponent,
    SmallCapComponent,
    MidCapComponent,
    LargeCapComponent,
    MakroIndikatorerComponent,
    TekniskAnalysComponent,
    NavbarComponent,
    ChangeLogComponent,
    InlineEditComponent,
    StockWikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/first-north',
        pathMatch: 'full'
      },
      {
        path: 'first-north',
        component: FirstNorthComponent
      },
      {
        path: 'small-cap',
        component: SmallCapComponent
      },
      {
        path: 'mid-cap',
        component: MidCapComponent
      },
      {
        path: 'large-cap',
        component: LargeCapComponent
      },
      {
        path: 'makro-indikatorer',
        component: MakroIndikatorerComponent
      },
      {
        path: 'teknisk-analys',
        component: TekniskAnalysComponent
      },
      {
        path: 'to-do',
        component: ToDoListComponent
      },
      {
        path: 'stock-wiki',
        component: StockWikiComponent
      }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
