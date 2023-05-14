const { Server } = require('socket.io');
import ioController from './controller';

export default function() {
	this.nuxt.hook('render:before', (render) => {
		this.nuxt.hook('listen', async (server) => {
			const io = new Server(server);

			io.on('connection', async (socket) => {
				const controller = await ioController(io, socket);

				socket.on('disconnect', () => {
					controller.disconnect();
				});
			});

			this.nuxt.hook('close', () => {
				io.close();
			});
		});
	});
}
