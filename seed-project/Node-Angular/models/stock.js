var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    Info: {
        ISIN: {type: String, required: true},
        CompanyDescription: {type: String, required: true},
        CompanyName: {type: String, required: true},
        Country: {type: String, required: true},
        Industry: {type: String, required: true},
        List: {type: String, required: true},
        Ticker: {type: String, required: true}
    },

    Stock: {
        Price: {
            Latest: {type: Number, required: true}
        },
        Return: {
            Actual_3m: {type: Number, required: true}
        },
        MarketCap: {type: Number, required: true},
        NrShares: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        }
    },

    BalanceSheet: {
        AssetTurnover: {
            Latest: {type: Number, required: true}
        },
        CurrentRatio: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        DebtPerShare: {
            Latest: {type: Number, required: true}
        },
        Equity: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        EquityPerShare: {
            Latest: {type: Number, required: true}
        },
        NetDebt: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        TotalAssets: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        }
    },

    IncomeStatement: {
        NetProfit: {
            Growth: {
                Actual_1q: {type: Number, required: true},
                Actual_1y: {type: Number, required: true},
            }
        },
        Revenue: {
            Growth: {
                Actual_1q: {type: Number, required: true},
                Actual_1y: {type: Number, required: true},
            }
        }
    },

    Profitability: {
        CashFlowOperations: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        Dividend: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        DividendRatio: {
            Latest: {type: Number, required: true}
        },
        ROAG: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        ROC: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        ROE: {
            Latest: {type: Number, required: true}
        }
    },

    Efficiency: {
        GrossMargin: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        EBITMargin: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        },
        NetProfitMargin: {
            Latest: {type: Number, required: true},
            Growth: {
                Actual_1y: {type: Number, required: true}
            }
        }
    },

    Insider: {
        Net: {
            Actual_1w: {type: Number, required: true},
            Actual_1m: {type: Number, required: true},
            Actual_3m: {type: Number, required: true},
            Actual_1y: {type: Number, required: true}
        }
    },

    Strategy: {
        GrahamScore: {type: Number, required: true}
    },

    TA: {
        MA5_MA20: {type: Number, required: true},
        MA20_MA70: {type: Number, required: true},
        MA50_MA200: {type: Number, required: true}
    },

    Valuation: {
        P_E: {
            Latest: {type: Number, required: true},
            Average: {
                Actual_1y: {type: Number, required: true},
                Actual_3y: {type: Number, required: true}
            }
        },
        P_S: {
            Latest: {type: Number, required: true},
            Average: {
                Actual_1y: {type: Number, required: true},
                Actual_3y: {type: Number, required: true}
            }
        },
        P_FCF: {
            Latest: {type: Number, required: true},
            Average: {
                Actual_1y: {type: Number, required: true},
                Actual_3y: {type: Number, required: true}
            }
        }
    }

});

module.exports = mongoose.model('Stock', schema);

