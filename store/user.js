export const state = () => ({
	auth: {
		status: false,
		token: undefined,
	},
	user: {
		name: undefined,
	},
});

export const actions = {
	socket_user_login: (ctx, message) => {
		if (message.status) {
			ctx.commit('SET_USER', message);
		}
	},

	user_token_login: (ctx, token) => {
	}
};

export const mutations = {
	SET_USER(state, {
		token,
		userName,
		userSurname,
	}) {
		state.auth.status = true;
		state.auth.token = token;
		state.name = `${userName} ${userSurname}`;
	},
	RESET_USER(state) {
	},
};

export const getters = {
	getUserInfo(state) {
		return {
			...state.user,
		};
	},
};
