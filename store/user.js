import axios from 'axios';

export const state = () => ({
	token: null,
	name: null,
	email: null,
});

export const actions = {
	login: async (ctx, auth = {}) => {
		let requestValues = {
			token: localStorage?.hex,
		};

		try {
			if (auth.login && auth.password) {
				requestValues = auth;
			}

			const { data } = await axios.post('/frontend-api/login', requestValues);;

			if ( data?.status ) {
				localStorage.hex = data.token;
				ctx.commit('setUser', data);
			}
		} catch (err) {
			console.error('Ошибка авторизации.');
		}
	},
	logout: async (ctx) => {
		try {
			const { data } = await axios.post('/frontend-api/logout', {
				token: ctx.state.token,
			});
			if ( data?.status ) {
				localStorage.removeItem('hex');
				ctx.commit('resetToken');
			}
		} catch (err) {
			console.log('Ошибка диавторизации:', err);
		}
	},
};

export const mutations = {
	setUser(state, userInfo) {
		state.token = userInfo.token;
		state.name = userInfo.name;
		state.email = userInfo.email;
		state.post = userInfo.post;
	},
	resetToken(state) {
		state.token = null;
	},
};

export const getters = {
	getToken(state) {
		return state.token;
	},
	hasToken(state) {
		return !!state.token;
	},
};
