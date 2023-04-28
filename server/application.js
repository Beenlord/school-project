const bodyParser = require('body-parser')
const app = require('express')();

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send({
    data: 'data',
  });
	open({
		filename: 'static/database.db',
		driver: sqlite3.Database
	}).then( async (db) =>  {
		console.log(await db.get('SELECT * FROM users WHERE id=1'));
		// do your thing
	})
	res.end();
});

module.exports = app;
