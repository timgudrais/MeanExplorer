var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
	var file = __dirname + '\\..\\public\\stocks\\stocks.json';
	console.log(file);
	var data;
	fs.readFile(file, 'utf8', function (err, data) {
		if (err) {
			console.log('Error: ' + err);
			return;
		}
		data = JSON.parse(data);
		console.log(data);
		
		res.status(200).json({
			message: 'Success',
			obj: data
		});
  });

  // res.render('stock_pricing', { title: data });
  // console.log(data);
});

module.exports = router;