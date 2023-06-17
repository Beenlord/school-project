import commonMixin from '@/mixins/common.js';

function defaultMixin(title) {
	return {
		mixins: [
			commonMixin({
				title,
			}),
		],
		components: {
		},
		data() {
			return {
				pageTitle: title,
			};
		},
	};
}

export default defaultMixin;
