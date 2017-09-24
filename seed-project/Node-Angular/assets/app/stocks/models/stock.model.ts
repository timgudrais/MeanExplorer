export class StockPriceObject {
    stocks: Array<Array<string>>
}

export class StockObject {
    Info: Info;
    Stock: Stock;
    BalanceSheet: BalanceSheet;
    IncomeStatement: IncomeStatement;
    Profitability: Profitability;
    Efficiency: Efficiency;
    Insider: Insider;
    Strategy: Strategy;
    TA: TA;
    Valuation: Valuation;
       

    constructor(
        Info: Info, 
        Stock: Stock, 
        BalanceSheet: BalanceSheet,
        IncomeStatement: IncomeStatement,
        Profitability: Profitability, 
        Efficiency: Efficiency,
        Insider: Insider,
        Strategy: Strategy, 
        TA: TA,
        Valuation: Valuation
        ) {
            this.Info = Info;
            this.Stock = Stock;
            this.BalanceSheet = BalanceSheet;
            this.IncomeStatement = IncomeStatement;
            this.Profitability = Profitability;
            this.Efficiency = Efficiency;
            this.Insider = Insider;  
            this.Strategy = Strategy;     
            this.TA = TA;   
            this.Valuation = Valuation;
        }
}

export class Average {
    Actual_1y: number;
    Actual_3y: number;

    constructor(
        Actual_1y: number,
        Actual_3y: number
    ) {
        this.Actual_1y = Actual_1y;
        this.Actual_3y = Actual_3y
    }

}

export class Growth {
    Actual_1y: number;

    constructor(
        Actual_1y: number
    ) {
        this.Actual_1y = Actual_1y;
    }
}

export class GrowthPlusQ {
    Actual_1q: number;
    Actual_1y: number;

    constructor(
        Actual_1q: number,
        Actual_1y: number
    ) {
        this.Actual_1q = Actual_1q;
        this.Actual_1y = Actual_1y;
    }
}

export class Info {
    ISIN: string;
    CompanyDescription: string;
    CompanyName: string;
    Country: string;
    Industry: string;
    List: string;
    Ticker: string;

    constructor(
        ISIN: string, 
        CompanyDescription: string,
        CompanyName: string, 
        Country: string, 
        Industry: string, 
        List: string, 
        Ticker: string, 
        ) {
            this.ISIN = ISIN;
            this.CompanyDescription = CompanyDescription;
            this.CompanyName = CompanyName;
            this.Country = Country;
            this.Industry = Industry;
            this.List = List;
            this.Ticker = Ticker;
    }
}

export class Stock {
    Price: Price;
    Return: Return;
    MarketCap: string;
    NrShares: NrShares;

    constructor(
        Price: Price, 
        Return: Return,
        MarketCap: string,
        NrShares: NrShares
        ) {
            this.Price = Price;
            this.Return = Return;
            this.MarketCap = MarketCap;
            this.NrShares = NrShares;
    }
}

export class Price {
    Latest: number;

    constructor(
        Latest: number,
    ) {
        this.Latest = Latest
    }
}

export class Return {
    Actual_3m: number;

    constructor(
        Actual_3m: number, 
        ) {
            this.Actual_3m = Actual_3m;
    }
}

export class NrShares {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class BalanceSheet {
    AssetTurnover: AssetTurnover;
    CurrentRatio: CurrentRatio;    
    DebtPerShare: DebtPerShare;
    Equity: Equity;
    EquityPerShare: EquityPerShare;
    NetDebt: NetDebt;
    TotalAssets: TotalAssets;

    constructor(
        AssetTurnover: AssetTurnover,
        CurrentRatio: CurrentRatio,  
        DebtPerShare: DebtPerShare,
        Equity: Equity,
        EquityPerShare: EquityPerShare,
        NetDebt: NetDebt,
        TotalAssets: TotalAssets,
    ) {
        this.AssetTurnover = AssetTurnover;
        this.CurrentRatio = CurrentRatio;
        this.DebtPerShare = DebtPerShare;
        this.Equity = Equity;
        this.EquityPerShare = EquityPerShare;
        this.NetDebt = NetDebt;
        this.TotalAssets = TotalAssets;
    }
}

export class AssetTurnover {
    Latest: number;

    constructor(
        Latest: number,
    ) {
        this.Latest = Latest
    }
}

export class CurrentRatio {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class DebtPerShare {
    Latest: number;

    constructor(
        Latest: number,
    ) {
        this.Latest = Latest
    }
}

export class Equity {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class EquityPerShare {
    Latest: number;

    constructor(
        Latest: number,
    ) {
        this.Latest = Latest
    }
}

export class NetDebt {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class TotalAssets {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class IncomeStatement {
    NetProfit: NetProfit;
    Revenue: Revenue;

    constructor(
        NetProfit: NetProfit,
        Revenue: Revenue
    ) {
        this.NetProfit = NetProfit;
        this.Revenue = Revenue
    }
}

export class NetProfit {
    Growth: Growth;

    constructor(
        Growth: Growth,
    ) {
        this.Growth = Growth
    }
}

export class Revenue {
    Growth: Growth;

    constructor(
        Growth: Growth,
    ) {
        this.Growth = Growth
    }
}

export class Profitability {
    CashFlowOperations: CashFlowOperations;
    Dividend: Dividend;
    DividendRatio: DividendRatio;
    ROAG: ROAG;
    ROC: ROC;
    ROE: ROE;

    constructor(
        CashFlowOperations: CashFlowOperations,
        Dividend: Dividend,
        DividendRatio: DividendRatio,
        ROAG: ROAG,
        ROC: ROC,
        ROE: ROE
    ) {
        this.CashFlowOperations = CashFlowOperations;
        this.Dividend = Dividend;
        this.DividendRatio = DividendRatio;
        this.ROAG = ROAG;
        this.ROC = ROC;
        this.ROE = ROE
    }
}

export class CashFlowOperations {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class Dividend {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class DividendRatio {
    Latest: number;

    constructor(
        Latest: number,
    ) {
        this.Latest = Latest
    }
}

export class ROAG {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class ROC {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class ROE {
    Latest: number;

    constructor(
        Latest: number,
    ) {
        this.Latest = Latest
    }
}

export class Efficiency {
    EBITMargin: EBITMargin;
    GrossMargin: GrossMargin;
    NetProfitMargin: NetProfitMargin;

    constructor(
        EBITMargin: EBITMargin,
        GrossMargin: GrossMargin,
        NetProfitMargin: NetProfitMargin,
    ) {
        this.EBITMargin = EBITMargin;
        this.GrossMargin = GrossMargin;
        this.NetProfitMargin = NetProfitMargin
    }
}

export class EBITMargin {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class GrossMargin {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class NetProfitMargin {
    Latest: number;
    Growth: Growth;

    constructor(
        Latest: number,
        Growth: Growth
    ) {
        this.Latest = Latest;
        this.Growth = Growth
    }
}

export class Insider {
    Net: Net;

    constructor (
        Net: Net
    ) {
        this.Net = Net
    }
}

export class Net {
    Actual_1w: number;
    Actual_1m: number;
    Actual_3m: number;
    Actual_1y: number;

    constructor (
        Actual_1w: number,
        Actual_1m: number,
        Actual_3m: number,
        Actual_1y: number
    ) {
        this.Actual_1w = Actual_1w;
        this.Actual_1m = Actual_1m;
        this.Actual_3m = Actual_3m;
        this.Actual_1y = Actual_1y
    }
}

export class Strategy {
    GrahamScore: number;

    DividendRank: number;  
    PERank: number;
    CurrentRatioRank: number;
    DebtEquityRank: number;
    NetMarginRank: number;
    ROCRank: number;  
    InvestingRank: number;  

    DividendScore: number;  
    PEScore: number;
    CurrentRatioScore: number;
    DebtEquityScore: number;
    NetMarginScore: number;
    ROCScore: number;  
    InvestingScore: number;  

    constructor(
        GrahamScore: number        
        ) {
            this.GrahamScore = GrahamScore;
            
            this.DividendRank = 0;
            this.PERank = 0;
            this.CurrentRatioRank = 0;
            this.DebtEquityRank = 0;
            this.NetMarginRank = 0;
            this.ROCRank = 0;
            this.InvestingRank = 0;

            this.DividendScore = 0;
            this.PEScore = 0;
            this.CurrentRatioScore = 0;
            this.DebtEquityScore = 0;
            this.NetMarginScore = 0;
            this.ROCScore = 0;
            this.InvestingScore = 0;
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

export class Valuation {
    P_E: P_E;
    P_S: P_S;
    P_FCF: P_FCF;

    constructor(
        P_E: P_E, 
        P_S: P_S, 
        P_FCF: P_FCF
        ) {
            this.P_E = P_E;
            this.P_S = P_S;
            this.P_FCF = P_FCF;
    }
}

export class P_E {
    Latest: number;
    Average: Average;

    constructor(
        Latest: number,
        Average: Average
        ) {
            this.Latest = Latest;
            this.Average = Average;
    }
}

export class P_S {
    Latest: number;
    Average: Average;

    constructor(
        Latest: number,
        Average: Average
        ) {
            this.Latest = Latest;
            this.Average = Average;
    }
}

export class P_FCF {
    Latest: number;
    Average: Average;

    constructor(
        Latest: number,
        Average: Average
        ) {
            this.Latest = Latest;
            this.Average = Average;
    }
}