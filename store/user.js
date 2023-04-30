import axios from 'axios';

export const state = () => ({
	token: null,
	name: null,
	email: null,
	post: null,
});

export const actions = {
	login: async (ctx, auth) => {
		try {
			const { data } = await axios.post('/frontend-api/login', {
				login: auth.login,
				password: auth.password,
			});
			if ( data?.status ) ctx.commit('user/setUser', data);

			console.log(data);
		} catch (err) {
			console.log('Ошибка авторизации:', err);
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
