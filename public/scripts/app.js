'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _knucklebone = require('knucklebone');

var _knucklebone2 = _interopRequireDefault(_knucklebone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ajax lib

var cartoonsCont = document.getElementById('cartoons-container'); // functional utilities lib


_knucklebone2.default.getJson('/api/cartoons').success(function (cartoonsArr) {

	/*
 	What is a 'DocumentFragment'? Purpose? 
 */
	var frag = document.createDocumentFragment();

	_.each(cartoonsArr, function (cartoonObj) {
		var cartoonElm = document.createElement('div');

		/*
  	ADD css class "entry" to the `cartoonElm` element;
  */

		/*
  	Make it so when you click on `cartoonElm` element:
  		The list of characters, `cartoonObj.characters`, is alerted to the user
  */

		cartoonElm.textContent = cartoonObj.title;
		frag.appendChild(cartoonElm);
	});

	cartoonsCont.appendChild(frag);
}).error(function (res) {
	return console.error(res);
});