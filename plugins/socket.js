import Vue from 'vue';
import VueIo from 'vue-socket.io-extended';
import SocketClient from 'socket.io-client';

export default function({ store }) {
	Vue.use(VueIo, SocketClient('http://localhost:3000'), { store });
}
