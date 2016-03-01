'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
	Replace the route with a regex that will match '/', '/index', and '/home'
*/
router.get(/\/(home|index)?$/, function (req, res) {
	res.render('home');
});

module.exports = router;