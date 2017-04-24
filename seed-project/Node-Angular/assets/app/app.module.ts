import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";

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
import { RbbhsComponent } from './stock-wiki/rbbhs/rbbhs.component';
import { ParserComponent } from './parser/parser.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
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
		StockWikiComponent,
		RbbhsComponent,
		ParserComponent		
	],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
