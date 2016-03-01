'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());

// routes for views
var routes = require('./routes');
app.use('/', routes);

// routes for json api
var api = require('./routes/api');
app.use('/api', api);

app.use(function (req, res, next) {
	res.set('Content-Type', 'text/plain');
	res.status(404).send('Not Found');
});

app.listen(port, function () {
	console.log('app listening at http://localhost:' + port);
});