// const http = require('http');
const { Server } = require('socket.io');

export default function() {
	this.nuxt.hook('render:before', (render) => {
		this.nuxt.hook('listen', (server) => {
			const io = new Server(server);

			io
				.on('connection', (socket) => {
					console.log('Create some socket connection.');
				});

			setInterval(() => {
				io.emit('customEmit', 'test');
			}, 2000);

			this.nuxt.hook('close', () => {
				io.close();
			});
		});
	});
}
