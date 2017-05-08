{
	"Stocks": [
		{
			"StockName": "ABB",
			"StockObject": {
				"Price": 100
				"Some underlyig object": {
					"A list in that object": [
						{
							"This list": [
								
							]
						}
					]
				}
			}
			
		},
		{
			"StockName": "ABB",
			"Price": 100
		},
		{
			"StockName": "ABB",
			"Price": 100
		}
	]
}

{
	""
}


Stocks[0].StockName = "ABB"
Stocks[0].StockObject.Price = 100

List filteredStocks = new List<Stocks>();

foreach(var stock in stocks){
	if (stock.StockName === "ABB")
	{
		filteredStocks.Add(stock);
	}
}


mongoimport -d node-angular -c stocks --type csv --file C:\Users\sun\Dropbox\Aktier\MeanExplorer\Borsdata_2017-05-08.csv --headerline

db.getCollection('messages').find()

.\mongoimport.exe --help
.\mongoimport.exe /host:localhost /port:27017 /db:node-angular -c stocks --type csv /file:C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular\CSV\Borsdata_2017-05-08.csv --headerline


.\mongoimport.exe -d node-angular -c stocks --type csv --file C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular\CSV\Borsdata_2017-05-08.csv --headerline