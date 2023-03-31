import defaultLayout from '@/layouts/default.vue';

function commonMixin(opt = {}) {
  opt = {
    layout: 'defaultLayout',
    ...opt,
  };
  return {
    layout: opt.layout,
    components: {
      defaultLayout,
    },
  };
}

export default commonMixin;
