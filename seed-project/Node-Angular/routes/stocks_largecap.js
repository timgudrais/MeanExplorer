var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Stock = require('../models/stock');

router.get('/', function (req, res, next) {
    Stock.find({'Info.Country': 'Sverige', 'Info.List': 'Large Cap'})
        .exec(function (err, stocks) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: stocks
            });
        });
});

module.exports = router;