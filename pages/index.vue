<template>
  <div class="page IndexPage">
		<Header :title="$store.state.user.name">
			<template #right-content>
				<Input icon="login" @click.native="$store.dispatch('user/login')"></Input>
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
import Input from "~/components/Input.vue";

export default {
	mixins: [
		defaultMixin('Главная'),
	],
	components: {
		Input,
		Banner,
	},
}
</script>

<style lang="scss">
.IndexPage {
}
</style>
