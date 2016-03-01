import express from 'express';
const router = express.Router();

/*
	Replace the route with a regex that will match '/', '/index', and '/home'
*/
router.get(/\/(home|index)?$/, (req, res) => {
	res.render('home');
});

module.exports = router;
