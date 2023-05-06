const { Server } = require('socket.io');
import ioController from './controller';

export default function() {
	this.nuxt.hook('render:before', (render) => {
		this.nuxt.hook('listen', (server) => {
			const io = ioController(new Server(server));

			this.nuxt.hook('close', () => {
				io.close();
			});
		});
	});
}
