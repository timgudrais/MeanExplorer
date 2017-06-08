export class StockObject {
    Info: Info;
    Stock: Stock;
    Valuation: Valuation;
    TA: TA;
    Strat: Strat;
    Profitability: Profitability;
    BalanceSheet: BalanceSheet;    

    constructor(
        Info: Info, 
        Stock: Stock, 
        Valuation: Valuation,
        TA: TA,
        Strat: Strat,
        Profitability: Profitability,
        BalanceSheet: BalanceSheet,        
        ) {
            this.Info = Info;
            this.Stock = Stock;
            this.Valuation = Valuation;
            this.TA = TA;
            this.Strat = Strat;
            this.Profitability = Profitability;
            this.BalanceSheet = BalanceSheet;            
        }
}

export class Info {
    ISIN: string;
    CompanyDescription: string;
    CompanyName: string;
    Ticker: string;
    Country: string;
    List: string;
    Industry: string;
    // ReportDate: ReportDate;

    constructor(
        ISIN: string, 
        CompanyDescription: string,
        CompanyName: string, 
        Ticker: string, 
        Country: string, 
        List: string, 
        Industry: string, 
        // ReportDate: ReportDate
        ) {
            this.ISIN = ISIN;
            this.CompanyDescription = CompanyDescription;
            this.CompanyName = CompanyName;
            this.Ticker = Ticker;
            this.Country = Country;
            this.List = List;
            this.Industry = Industry;
            // this.ReportDate = ReportDate;
    }
}

// export class ReportDate {
//     Next: string;

//     constructor(
//         Next: string
//         ) {
//             this.Next = Next;
//     }
// }

export class Stock {
    LatestPrice: number;
    Return: Return;

    constructor(
        LatestPrice: number, 
        Return: Return
        ) {
            this.LatestPrice = LatestPrice;
            this.Return = Return;
    }
}

export class Return {
    // Act_1d: number;
    // Act_1w: number;
    // Act_1m: number;
    Act_3m: number;
    // Act_6m: number;
    // Act_1y: number;
    // Act_3y: number;
    // Act_5y: number;

    constructor(
        // Act_1d: number, 
        // Act_1w: number, 
        // Act_1m: number, 
        Act_3m: number, 
        // Act_6m: number, 
        // Act_1y: number,
        // Act_3y: number,
        // Act_5y: number
        ) {
            // this.Act_1d = Act_1d;
            // this.Act_1w = Act_1w;
            // this.Act_1m = Act_1m;
            this.Act_3m = Act_3m;
            // this.Act_6m = Act_6m;
            // this.Act_1y = Act_1y;
            // this.Act_3y = Act_3y;
            // this.Act_5y = Act_5y;
    }
}

export class Valuation {
    MarketCap: number;
    P_E: P_E;
    P_S: P_S;
    P_FCF: P_FCF;

    constructor(
        MarketCap: number, 
        P_E: P_E, 
        P_S: P_S, 
        P_FCF: P_FCF
        ) {
            this.MarketCap = MarketCap;
            this.P_E = P_E;
            this.P_S = P_S;
            this.P_FCF = P_FCF;
    }
}

export class P_E {
    Latest: number;
    Avg_1y: number;
    Avg_3y: number;

    constructor(Latest: number, Avg_1y: number, Avg_3y: number) {
        this.Latest = Latest;
        this.Avg_1y = Avg_1y;
        this.Avg_3y = Avg_3y;
    }
}

export class P_S {
    Latest: number;
    Avg_1y: number;
    Avg_3y: number;

    constructor(Latest: number, Avg_1y: number, Avg_3y: number) {
        this.Latest = Latest;
        this.Avg_1y = Avg_1y;
        this.Avg_3y = Avg_3y;
    }
}

export class P_FCF {
    Latest: number;
    Avg_1y: number;
    Avg_3y: number;

    constructor(Latest: number, Avg_1y: number, Avg_3y: number) {
        this.Latest = Latest;
        this.Avg_1y = Avg_1y;
        this.Avg_3y = Avg_3y;
    }
}

export class TA {
    MA5_MA20: number;
    MA20_MA70: number;
    MA50_MA200: number;

    constructor(
        MA5_MA20: number, 
        MA20_MA70: number, 
        MA50_MA200: number
        ) {
            this.MA5_MA20 = MA5_MA20;
            this.MA20_MA70 = MA20_MA70;
            this.MA50_MA200 = MA50_MA200;
    }
}

export class Strat {
    Graham: number;
    DividendScore: number;  
    PEScore: number;
    CurrentRatioScore: number;
    DebtEquityScore: number;
    ROCScore: number;  
    InvestingScore: number;  

    constructor(
        Graham: number        
        ) {
            this.Graham = Graham;
            this.DividendScore = 0;
            this.PEScore = 0;
            this.CurrentRatioScore = 0;
            this.DebtEquityScore = 0;
            this.ROCScore = 0;
            this.InvestingScore = 0;
        }
}

export class Profitability {
    ROC: number;
    GrossMargin: number;
    EBITMargin: number;
    NetMargin: number;
    ROE: number;
    CurrentRatio: number;
    DividendRatio: number;
    DebtEquity: number;

    constructor(
        ROC: number,
        GrossMargin: number,
        EBITMargin: number,
        NetMargin: number,
        ROE: number,
        CurrentRatio: number,
        DividendRatio: number     
    ) {
        this.ROC = ROC;
        this.GrossMargin = GrossMargin;
        this.EBITMargin = EBITMargin;
        this.NetMargin = NetMargin;
        this.ROE = ROE;
        this.CurrentRatio = CurrentRatio;
        this.DividendRatio = DividendRatio;
        this.DebtEquity = 0;        
    }
}

export class BalanceSheet {
    DebtPerShare: number;
    EquityPerShare: number;

    constructor(
        DebtPerShare: number,
        EquityPerShare: number
    ) {
        this.DebtPerShare = DebtPerShare;
        this.EquityPerShare = EquityPerShare;
    }
}