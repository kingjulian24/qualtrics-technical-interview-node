import fs from 'fs-extra';
import path from 'path';
import express from 'express';

const router = express.Router();
const jsonDir = path.join(__dirname, '../json');

router.get('/cartoons', (req, res) => {
	fs.readJson(jsonDir + '/cartoons.json', (err, data) => {
		if (err) return res.status(500).send('Error:' + err);
		res.json(data);
	});
});

/*
	Bonus: add another route (/cartoons/titles) that just returns an array of titles
*/

module.exports = router;
