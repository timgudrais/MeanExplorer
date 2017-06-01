// Angular Components
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// General Components
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthService } from "./auth/auth.service";
import { HeaderComponent } from "./header.component";
import { LogoutComponent } from "./auth/logout.component";
import { MessageComponent } from "./messages/message.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { routing } from "./app.routing";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import 'hammerjs';

// Content Components
import { ChangeLogComponent } from './change-log/change-log.component';
import { FirstNorthComponent } from './stocks/first-north/first-north.component';
import { LargeCapComponent } from './stocks/large-cap/large-cap.component';
import { MakroIndikatorerComponent } from './makro-indikatorer/makro-indikatorer.component';
import { MidCapComponent } from './stocks/mid-cap/mid-cap.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SmallCapComponent } from './stocks/small-cap/small-cap.component';
import { TekniskAnalysComponent } from './teknisk-analys/teknisk-analys.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

// Wiki Components
import { FundamentalInvestingComponent } from './stock-wiki/fundamentalInvesting/fundamentalInvesting.component';
import { MagicFormulaComponent } from './stock-wiki/magicFormula/magicFormula.component';
import { RbbhsComponent } from './stock-wiki/rbbhs/rbbhs.component';
import { RdpdComponent } from './stock-wiki/rdpd/rdpd.component';
import { StockWikiComponent } from './stock-wiki/stock-wiki.component';

// Tools and Materials
import { CsvJSONComponent } from './tools/csvJSON/csvJSON.component';
import { FinancialTermsComponent } from './tools/financialTerms/financialTerms.component';
import { InlineEditComponent } from './shared/inline-edit/inline-edit.component';
import { Score } from './tools/score/score.component';
import { Star } from './tools/score/star.component';
import { ToolsComponent } from './tools/tools.component';

// Calculator Components
import { RealEstateComponent } from './tools/realEstate/realEstate.component';
import { RoiComponent } from './tools/roi/roi.component';

// =======================================================================================
// Not used Components
import { AgeComponent } from './stocksTest/age/age.component';
import { FlyingHeroesComponent } from './stocksTest/heroes/flying-heroes.component';
import { ParserComponent } from './parser/parser.component';
import { StocksComponent } from './stocksTest/stocks.component';

// Not used Pipes & Services
import { ExponentialStrengthPipe } from './stocksTest/age/age.pipe';
import { FlyingHeroesPipe } from './stocksTest/heroes/flying-heroes.pipe';
import { StockFilterPipe } from './stocksTest/stocks-filter.pipe';
import { StockTypePipe } from './stocksTest/stockType.pipe';
import { StockValuePipe } from './stocksTest/stocksValue-filter.pipe';
// =======================================================================================

@NgModule({
    declarations: [
        // General Components
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        MessageComponent,
        MessageInputComponent,
        MessageListComponent,
        MessagesComponent,
        SigninComponent,
        SignupComponent,
        // Content Components
		ChangeLogComponent,
		FirstNorthComponent,
		LargeCapComponent,
		MakroIndikatorerComponent,
		MidCapComponent,
		NavbarComponent,
		SmallCapComponent,
		TekniskAnalysComponent,
		ToDoListComponent,
        // Wiki Components
        FundamentalInvestingComponent,
        MagicFormulaComponent,
		RbbhsComponent,
        RdpdComponent,
		StockWikiComponent,
        // Tools and Materials Components
        CsvJSONComponent,
        FinancialTermsComponent,
		InlineEditComponent,
        Score,
        Star,
        ToolsComponent,
        // Calculator Components
        RealEstateComponent,
        RoiComponent,
        // Not Used Components
        AgeComponent,
        FlyingHeroesComponent,
        FlyingHeroesPipe,
		ParserComponent,
        StocksComponent,
        // Not Used Pipes & Services
        StockFilterPipe,
        StockValuePipe,
        StockTypePipe,
        ExponentialStrengthPipe,
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
