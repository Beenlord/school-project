<template>
  <div class="page IndexPage">
		<Header :title="pageTitle">
			<template #right-content>
				<Button icon="bell" />
			</template>
		</Header>
		<div class="page__content">
			<div class="page__main">
				<Banner title="Вводная информация">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus dolorem, eius ipsa ipsum maiores quos totam. Debitis dignissimos dolorem ea eum libero, mollitia optio quae quas soluta temporibus velit voluptates? Dignissimos.</p>
				</Banner>
			</div>
			<div class="page__aside">
			</div>
		</div>
	</div>
</template>

<script>
import defaultMixin from '@/mixins/default.js';
import Banner from '@/components/Banner.vue';

export default {
	mixins: [
		defaultMixin('Главная'),
	],
	components: {
		Banner,
	},
}
</script>

<style lang="scss">
.IndexPage {
}
</style>
