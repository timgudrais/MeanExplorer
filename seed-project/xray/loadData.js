const fs = require('fs');

var stockNamesRaw = require('./stockNamesRaw.json');
var stockNames = stockNamesRaw.tbody.split('Kp');
stockNames.shift();
var stockInfoRaw = require('./stockInfoRaw.json');
var stockInfo = stockInfoRaw.tbody.split('Stockholm');

var stockArray = [];
for(var x = 0; x < stockNames.length; x++) {
    var stockSplit = stockInfo[x].split('-');
    var stockSplit2 = stockInfo[x].split(',');
    var tempArray = [];
    tempArray.push(stockNames[x]);
    if(stockSplit2[0]) {
        tempArray.push(stockSplit2[0]);
    }
    else {
        tempArray.push(stockSplit[0]);
    }
    stockArray.push(tempArray);
}

var stocks = {
    'stocks': stockArray
}

fs.writeFile('stocks.json', JSON.stringify(stocks), function (err) {
    if(err) { return console.log(err) };
    console.log(stocks.stocks + ' > stocks.json');
});
