import Vue from 'vue';
import Icon from '../modules/icons/index.vue';

const components = {
  Icon,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
