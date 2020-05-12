var express = require('express');
var router = express.Router();
var request = require('request');

let url = 'https://api.climacell.co/v3/weather/realtime';
let appId = 'appid=0Y7tmnNKkocvtoOO74Km8v52IqEmdM5p';
let units = '&units=metric';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
