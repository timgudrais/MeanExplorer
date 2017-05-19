export class Stock {
    Bolagsnamn: string;
    ISIN: string;
    Ticker: string;
    Aktiekurs: number;
    Lista: string;
    Land: string;
    Bransch: string;
    Börsvärde: number;

    constructor(Bolagsnamn: string, ISIN: string, Ticker: string, Aktiekurs: number, Lista: string, Land: string, Bransch: string, Börsvärde: number) {
        this.Bolagsnamn = Bolagsnamn;
        this.ISIN = ISIN;
        this.Ticker = Ticker;
        this.Aktiekurs = Aktiekurs;
        this.Lista = Lista;
        this.Land = Land;
        this.Bransch = Bransch;
        this.Börsvärde = Börsvärde;
    }
}