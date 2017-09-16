var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');
var userRoutes = require('./routes/user');
var stockRoutes = require('./routes/stocks');
var stocksLargeCapRoutes = require('./routes/stocks_largecap');
var stocksMidCapRoutes = require('./routes/stocks_midcap');
var stocksSmallCapRoutes = require('./routes/stocks_smallcap');
var stocksFirstNorthRoutes = require('./routes/stocks_firstnorth');
var stockPricingRoutes = require('./routes/stock_pricing');

var app = express();

// MongoDB Atlas, connect and receive callback

var MeanExplorer = 'mongodb://MeanExplorer:f4rs1ght@meanexplorer-shard-00-00-vqvsb.mongodb.net:27017/MeanExplorer?ssl=true&replicaSet=MeanExplorer-shard-0&authSource=admin';
mongoose.connect(MeanExplorer);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB Atlas database successfully")
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/stock_pricing', stockPricingRoutes);
app.use('/stocks_firstnorth', stocksFirstNorthRoutes);
app.use('/stocks_smallcap', stocksSmallCapRoutes);
app.use('/stocks_midcap', stocksMidCapRoutes);
app.use('/stocks_largecap', stocksLargeCapRoutes);
app.use('/stocks', stockRoutes);
app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
