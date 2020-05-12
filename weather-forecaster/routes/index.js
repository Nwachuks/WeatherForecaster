var express = require('express');
var router = express.Router();
var request = require('request');

let url = 'https://api.climacell.co/v3/weather/realtime';
let appId = 'appid=0Y7tmnNKkocvtoOO74Km8v52IqEmdM5p';
let units = '&units=metric';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { body: '', forecast: ''});
});

router.post('/weather', function(req, res, next) {
  let city = req.body.city;
  url = url+city+"&"+appId;
  request(url, function(error, response, body) {
    body = JSON.parse(body);
    if (error && response.statusCode != 200) {
      throw error;
    }
    let country = (body.sys.country) ? body.sys.country : '';
    let forecast = "For " + city + ", " + country;
    res.render('index', { body: body, forecast: forecast });
  });
});

module.exports = router;
