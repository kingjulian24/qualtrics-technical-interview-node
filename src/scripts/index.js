import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(bodyParser.json());

// routes for views
const routes = require('./routes');
app.use('/', routes);

// routes for json api
const api = require('./routes/api');
app.use('/api', api);

app.use(function(req, res, next) {
	res.set('Content-Type', 'text/plain');
	res.status(404).send('Not Found');
});

app.listen(port, () => {
	console.log('app listening at http://localhost:' + port);
});
