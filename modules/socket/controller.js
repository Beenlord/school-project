const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cola = require('consola');

const getHexCode = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
const userException = function (message) {
	this.message = message;
}

export default async function(io, socket) {
	cola.start('Client connection.');

	const db = await open({
		filename: './database/main.db',
		driver: sqlite3.Database
	});

	socket
		.on('user_auth_request', async ({ login, password, token }) => {
			let status = false;
			let data = {};

			cola.info('Start auth script.');

			try {
				let user;

				if (login && password) {
					user = await db.get(`SELECT * FROM users WHERE email = "${login}" AND password = "${password}"`);

					if (user?.hex === null) {
						const hexCode = user.hex = getHexCode(24);
						await db.run(`UPDATE users SET hex = ? WHERE email = ?`, hexCode, login);
					}

				} else
				if (token) {
					user = await db.get(`SELECT * FROM users WHERE hex = "${token}"`);
				} else {
					throw new userException('Не удалось авторизовать пользователя.');
				}

				if (user?.name) {
					data = {
						token: user.hex,
						userName: user.name,
						userSurname: user.name,
					};
					status = true;
				} else {
					throw new userException('Пользователь не найден.');
				}
			} catch (err) {
				data = {
					error: err.message,
				};
			}

			cola.log(status, data);

			socket.emit('user_login', {
				status, ...data,
			});
		});

	return {
		disconnect() {
			db.close();
		},
	};
}
