import commonMixin from '@/mixins/common.js';
import Header from '@/components/Header.vue';

function defaultMixin(title) {
	return {
		mixins: [
			commonMixin({
				title,
			}),
		],
		components: {
			Header,
		},
		data() {
			return {
				pageTitle: title,
			};
		},
	};
}

export default defaultMixin;
