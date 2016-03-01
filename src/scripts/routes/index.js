import express from 'express';
const router = express.Router();

/*
	Replace the route with a regex that will match '/', '/index', and '/home'
*/
router.get('/' /* replace route with regex */, (req, res) => {
	res.render('home');
});

module.exports = router;
