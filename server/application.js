const bodyParser = require('body-parser')
const app = require('express')();

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
	// Auth user
	.post('/login', async (req, res) => {
		const db = await open({
			filename: './database/main.db',
			driver: sqlite3.Database
		});

		const login = req.body.login,
			password = req.body.password;

		const result = await db.get(`SELECT * FROM users WHERE email = "${login}" AND password = "${password}"`);

		if (result) {
			// Ответ в случае удачного запроса на сервер;
			res.send({
				status: true,
				token: '',
				name: result.name,
				email: result.email,
				post: result.post_id || 0,
			});
		} else {
			// Ответ в случае ошибки;
			res.send({
				status: false,
				err_text: 'User has undefined!',
			});
		}

		res.end();
	})
	.get('/get-user', async (req, res) => {

		// const data = await db.all('SELECT * FROM users');
		res.send({
		});

		res.end();
	});

module.exports = app;
