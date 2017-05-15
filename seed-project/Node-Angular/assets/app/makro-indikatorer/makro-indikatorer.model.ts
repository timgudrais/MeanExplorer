export class MacroIndicatorModel {
    Bolagsnamn: string;
    ISIN: string;
    Ticker: string;
    Aktiekurs: number;

    constructor(Bolagsnamn: string, ISIN: string, Ticker: string, Aktiekurs: number) {
        this.Bolagsnamn = Bolagsnamn;
        this.ISIN = ISIN;
        this.Ticker = Ticker;
        this.Aktiekurs = Aktiekurs;
    }
}