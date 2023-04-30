export const state = () => ({
	value: 0,
});

export const mutations = {
	inc(state) {
		state.value++;
	},
};
