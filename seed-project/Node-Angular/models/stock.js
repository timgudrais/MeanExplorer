var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Info: {
        ISIN: {type: String, required: true},
        CompanyDescription: {type: String, required: true},
        CompanyName: {type: String, required: true},
        Ticker: {type: String, required: true},
        Country: {type: String, required: true},
        List: {type: String, required: true},
        Industry: {type: String, required: true},
        ReportDate: {
            Next: {type: String, required: true}
        }
    },
    Stock: {
        LatestPrice: {type: Number, required: true},
        Return: {
            Act_1d: {type: Number, required: true},
            Act_1w: {type: Number, required: true},
            Act_1m: {type: Number, required: true},
            Act_3m: {type: Number, required: true},
            Act_6m: {type: Number, required: true},
            Act_1y: {type: Number, required: true},
            Act_3y: {type: Number, required: true},
            Act_5y: {type: Number, required: true}
        }
    },
    Valuation: {
        MarketCap: {type: Number, required: true},
        P_E: {
            Latest: {type: Number, required: true},
            Avg_1y: {type: Number, required: true},
            Avg_3y: {type: Number, required: true}
        },
        P_S: {
            Latest: {type: Number, required: true},
            Avg_1y: {type: Number, required: true},
            Avg_3y: {type: Number, required: true}
        },
        P_FCF: {
            Latest: {type: Number, required: true},
            Avg_1y: {type: Number, required: true},
            Avg_3y: {type: Number, required: true}
        },
    },
    TA: {
        MA5_MA20: {type: Number, required: true},
        MA20_MA70: {type: Number, required: true},
        MA50_MA200: {type: Number, required: true}
    },
    Strat: {
        Graham: {type: Number, required: true}
    },
    Profitabilitiy: {
        ROC: {type: Number, required: true}
    }
});

module.exports = mongoose.model('Stock', schema);

