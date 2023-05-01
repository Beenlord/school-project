const bodyParser = require('body-parser')
const app = require('express')();

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const getHexCode = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
	// Auth user
	.post('/login', async (req, res) => {
		const db = await open({
			filename: './database/main.db',
			driver: sqlite3.Database
		});

		let user;

		if (req.body?.token) {
			const token = req.body.token;

			const result = await db.get(`SELECT * FROM users WHERE hex = "${token}"`);

			if ( result?.hex ) user = result;
		}
		else {
			const login = req.body.login,
				password = req.body.password;

			const result = await db.get(`SELECT * FROM users WHERE email = "${login}" AND password = "${password}"`);

			let token = result.hex;

			if ( token === null ) {
				token = getHexCode(24);
				await db.run(`UPDATE users SET hex = ? WHERE email = ?`, token, login);
			}

			if ( token ) user = result;
		}

		if (user?.hex) {

			// Ответ в случае удачного запроса на сервер;
			res.send({
				status: true,
				name: user.name,
				email: user.email,
				token: user.hex,
			});
		}
		else {

			// Ответ в случае ошибки;
			res.send({
				status: false,
				err_text: 'Authorization error: User is not defined.',
			});
		}

		res.end();
	})
	.post('/logout', async (req, res) => {
		const db = await open({
			filename: './database/main.db',
			driver: sqlite3.Database
		});

		if (req.body?.token) {

			await db.run(`UPDATE users SET hex = ? WHERE hex = ?`, null, req.body.token);

			// Ответ в случае ошибки;
			res.send({
				status: true,
			});

			res.send({});
		} else {

			// Ответ в случае ошибки;
			res.send({
				status: false,
				err_text: 'Authorization error: User is not defined.',
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
