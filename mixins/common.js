function commonMixin(opt = {}) {
  opt = {
    layout: 'default',
		title: 'Страница без заголовка.',
    ...opt,
  };
  return {
		async asyncData({ $axios }) {
			try {
				const userInfo = await $axios.get('/');

				return {
					userInfo,
				};
			} catch (err) {
				return {
					userInfo: {},
					err,
				};
			}
		},
		layout: opt.layout,
		head() {
			return {
				title: `${opt.title} - ${process.env.PROJECTNAME}`,
			};
		},
  };
}

export default commonMixin;
