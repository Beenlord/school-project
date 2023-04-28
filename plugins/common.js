import Vue from 'vue';
import Icon from '../modules/icons/index.vue';
import Button from '../components/Button.vue';

const components = {
  Icon,
	Button,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
