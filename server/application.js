const bodyParser = require('body-parser')
const app = require('express')();

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
	// Получим общую информацию о приложении
	res.send({
		testInfo: 000,
	});

	res.end();
});

app.get('/get-user', async (req, res) => {

	const db = await open({
		filename: './database/main.db',
		driver: sqlite3.Database
	});

	// const data = await db.all('SELECT * FROM users');
	res.send({
	});

	res.end();
});

module.exports = app;
