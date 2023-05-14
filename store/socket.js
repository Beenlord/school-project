export const state = () => ({
	status: false,
});

export const mutations = {
	SET_STATUS(state, value) {
		state.status = value;
	},
};

export const getters = {
	get_status(state) {
		return state.status;
	},
};
