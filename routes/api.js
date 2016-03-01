'use strict';

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var jsonDir = _path2.default.join(__dirname, '../json');

router.get('/cartoons', function (req, res) {
	_fsExtra2.default.readJson(jsonDir + '/cartoons.json', function (err, data) {
		if (err) return res.status(500).send('Error:' + err);
		res.json(data);
	});
});

/*
	Bonus: add another route (/cartoons/titles) that just returns an array of titles
*/

router.get('/cartoons/titles', function (req, res) {
	_fsExtra2.default.readJson(jsonDir + '/cartoons.json', function (err, data) {
		if (err) return res.status(500).send('Error:' + err);
		var titles = [];
		_lodash2.default.each(data, function (d) {
			titles.push(d.title);
		});
		res.json(titles);
	});
});

module.exports = router;