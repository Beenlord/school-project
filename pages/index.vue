<template>
  <div class="page IndexPage">
		<Header :title="$store.state.users.counter">
			<template #right-content>
				<Button icon="bell" @click.native="$store.commit('counter/inc')" >
					<span>{{ $store.state.counter.value }}</span>
				</Button>
			</template>
		</Header>
		<div class="page__content">
			<div class="page__main">
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
