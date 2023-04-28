function commonMixin(opt = {}) {
  opt = {
    layout: 'default',
		title: 'Страница без заголовка.',
    ...opt,
  };
  return {
		layout: opt.layout,
		head() {
			return {
				title: `${opt.title} - ${process.env.PROJECTNAME}`,
			};
		},
  };
}

export default commonMixin;
