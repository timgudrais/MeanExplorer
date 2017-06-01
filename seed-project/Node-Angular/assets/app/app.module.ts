// Angular Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

// General Components
import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { HeaderComponent } from "./header.component";
import 'hammerjs';

// Content Components
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

// Wiki Components
import { StockWikiComponent } from './stock-wiki/stock-wiki.component';
import { RbbhsComponent } from './stock-wiki/rbbhs/rbbhs.component';
import { RdpdComponent } from './stock-wiki/rdpd/rdpd.component';
import { MagicFormulaComponent } from './stock-wiki/magicFormula/magicFormula.component';
import { FundamentalInvestingComponent } from './stock-wiki/fundamentalInvesting/fundamentalInvesting.component';

// Calculator Components
import { RealEstateComponent } from './tools/realEstate/realEstate.component';
import { CsvJSONComponent } from './tools/csvJSON/csvJSON.component';

// Not used Components
import { ParserComponent } from './parser/parser.component';
import { StocksComponent } from './stocks/stocks.component';
import { FlyingHeroesComponent } from './stocks/heroes/flying-heroes.component';
import { AgeComponent } from './stocks/age/age.component';

// Tools and Materials
import { ToolsComponent } from './tools/tools.component';
import { RoiComponent } from './tools/roi/roi.component';
import { FinancialTermsComponent } from './tools/financialTerms/financialTerms.component';

// Pipes & Services
import { StockFilterPipe } from './stocks/stocks-filter.pipe';
import { StockTypePipe } from './stocks/stockType.pipe';
import { StockValuePipe } from './stocks/stocksValue-filter.pipe';

// Not used Services
import { ExponentialStrengthPipe } from './stocks/age/age.pipe';
import { FlyingHeroesPipe } from './stocks/heroes/flying-heroes.pipe';


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
        RdpdComponent,
		ParserComponent,
        ToolsComponent,
        RoiComponent,
        FinancialTermsComponent,
        RealEstateComponent,
        MagicFormulaComponent,
        FundamentalInvestingComponent,
        CsvJSONComponent,
        StocksComponent,
        StockFilterPipe,
        StockValuePipe,
        StockTypePipe,
        ExponentialStrengthPipe,
        AgeComponent,
        FlyingHeroesComponent,
        FlyingHeroesPipe
	],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/users',
            pathMatch: 'full'
        },
        {
            path: 'users',
            component: HeaderComponent
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
        },        
        {
            path: 'tools',
            component: ToolsComponent
        }       
    ])
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
