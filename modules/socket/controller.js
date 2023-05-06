export default function(io) {

	io
		.on('connection', (socket) => {
			console.log('Create some socket connection.');
		});

	return io;
}
