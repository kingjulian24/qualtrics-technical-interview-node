'use strict';

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

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

module.exports = router;