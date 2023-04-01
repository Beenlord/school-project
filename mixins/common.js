function commonMixin(opt = {}) {
  opt = {
    layout: 'default',
    ...opt,
  };
  return {
		layout: opt.layout,
  };
}

export default commonMixin;
