import { Injectable } from '@angular/core';

@Injectable()
export class StockWikiService {
  constructor() { }
  getFormulas() {
    return [
            {
              "ShortKey":"E/P",
              "KeyFigure":"Earnings to Price",
              "KeyFigureSvenska":"Procentuell vinst mot pris",
              "Formula":"Current Assets / Current Liabilities",
              "FormulaSvenska":"Vinst Per Aktie / Aktiekurs",
            },
            {
              "ShortKey":"JEK/Aktie",
              "KeyFigure":"Adjusted Equity per Stock",
              "KeyFigureSvenska":"Justerat Eget Kapital per Aktie",
              "Formula":"(Equity + (1 - Corporate Tax Rate) * Untaxed Reserves / Amount of Stocks",
              "FormulaSvenska":"(Eget Kapital + 72% av Obeskattade Reserver) / Antalet aktier",
            },
            {
              "ShortKey":"Dir. Avk",
              "KeyFigure":"Yield",
              "KeyFigureSvenska":"Direktavkastning (%)",
              "Formula":"((Dividend / Amount of Stocks) / Price * 100) = Yield (%)",
              "FormulaSvenska":"((Utdelning / Antalet aktier) / Aktiepris * 100) = Direktavkastning (%)",
            },
            {
              "ShortKey":"CR",
              "KeyFigure":"Current Ratio",
              "KeyFigureSvenska":"Balanslikviditet",
              "Formula":"Current Assets / Current Liabilities",
              "FormulaSvenska":"Omsättningstillgångar / Kortfristiga Skulder",
            },
            {
              "ShortKey":"D/E",
              "KeyFigure":"Debt to Equity",
              "KeyFigureSvenska":"Avkastning på Eget Kapital",
              "Formula":"Net Income / Equity",
              "FormulaSvenska":"Resultat / Eget Kapital"
            },
            {
              "ShortKey":"ROE",
              "KeyFigure":"Return On Equity",
              "KeyFigureSvenska":"Avkastning på Eget Kapital",
              "Formula":"Net Income / Equity",
              "FormulaSvenska":"Resultat / Eget Kapital"
            }
          ]
      }
}
