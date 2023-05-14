import Vue from 'vue';
import VueSocketIo from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

export default function({ store }) {
	Vue.use(VueSocketIo, io('http://localhost:3000'), {
		store,
	});
}
