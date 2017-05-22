export class StockObject {
    Info: Info;
    Stock: Stock;
    // Valuation: Valuation;
    // TA: Ta;
    // Strat: Strat;
    // Profitability: Profitability;

    //Insert in Constructor: , Stock: Stock, Valuation: Valuation, TA: Ta, Strat: Strat, Profitability: Profitability

    constructor(Info: Info, Stock: Stock) {
        this.Info = Info;
        this.Stock = Stock;
        // this.Valuation = Valuation;
        // this.TA = Ta;
        // this.Strat = Strat;
        // this.Profitability = Profitability;
    }
}

export class Info {
    ISIN: string;
    CompanyName: string;
    Ticker: string;
    Country: string;
    List: string;
    Industry: string;
    ReportDate: ReportDate;

    constructor(ISIN: string, CompanyName: string, Ticker: string, Country: string, List: string, Industry: string, ReportDate: ReportDate) {
        this.ISIN = ISIN;
        this.CompanyName = CompanyName;
        this.Ticker = Ticker;
        this.Country = Country;
        this.List = List;
        this.Industry = Industry;
        this.ReportDate = ReportDate;
    }
}

export class ReportDate {
    Next: string;

    constructor(Next: string) {
        this.Next = Next;
    }
}

export class Stock {
    LatestPrice: number;
    Return: Return;

    constructor(LatestPrice: number, Return: Return) {
        this.LatestPrice = LatestPrice;
        this.Return = Return;
    }
}

export class Return {
    Act_1d: number;
    Act_1w: number;
    Act_1m: number;
    Act_3m: number;
    Act_6m: number;
    Act_1y: number;
    Act_3y: number;
    Act_5y: number;

    constructor(
        Act_1d: number, 
        Act_1w: number, 
        Act_1m: number, 
        Act_3m: number, 
        Act_6m: number, 
        Act_1y: number,
        Act_3y: number,
        Act_5y: number
        ) {
            this.Act_1d = Act_1d;
            this.Act_1w = Act_1w;
            this.Act_1m = Act_1m;
            this.Act_3m = Act_3m;
            this.Act_6m = Act_6m;
            this.Act_1y = Act_1y;
            this.Act_3y = Act_3y;
            this.Act_5y = Act_5y;
    }
}

//     Stock: {
//         LatestPrice: {type: Number, required: true},
//         Return: {
//             Act_1d: {type: Number, required: true},
//             Act_1w: {type: Number, required: true},
//             Act_1m: {type: Number, required: true},
//             Act_3m: {type: Number, required: true},
//             Act_6m: {type: Number, required: true},
//             Act_1y: {type: Number, required: true},
//             Act_3y: {type: Number, required: true},
//             Act_5y: {type: Number, required: true}
//         }
//     },
//     Valuation: {
//         MarketCap: {type: Number, required: true},
//         P_E: {
//             Latest: {type: Number, required: true},
//             Avg_1y: {type: Number, required: true},
//             Avg_3y: {type: Number, required: true}
//         },
//         P_S: {
//             Latest: {type: Number, required: true},
//             Avg_1y: {type: Number, required: true},
//             Avg_3y: {type: Number, required: true}
//         },
//         P_FCF: {
//             Latest: {type: Number, required: true},
//             Avg_1y: {type: Number, required: true},
//             Avg_3y: {type: Number, required: true}
//         },
//     },
//     TA: {
//         MA5_MA20: {type: Number, required: true},
//         MA20_MA70: {type: Number, required: true},
//         MA50_MA200: {type: Number, required: true}
//     },
//     Strat: {
//         Graham: {type: Number, required: true}
//     },
//     Profitabilitiy: {
//         ROC: {type: Number, required: true}
//     }
// });