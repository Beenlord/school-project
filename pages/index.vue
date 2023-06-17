<template>
  <div class="default-page index-default-page">
		<Header class="default-page__header" />
		<div class="default-page__content">
		</div>
	</div>
</template>

<script>
import defaultMixin from '@/mixins/default.js';
import Header from '@/components/partial/Header.vue';

export default {
	mixins: [
		defaultMixin('Главная'),
	],
	components: {
		Header,
	},
}
</script>

<style lang="scss">
.index-default-page {
}
</style>
