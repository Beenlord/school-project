<template>
  <div class="page IndexPage">
		<Header :page-title="pageTitle">
			<template #right-content>
				<Button icon="bell" />
			</template>
		</Header>
		<div class="page__content"></div>
	</div>
</template>


<script>
import defaultMixin from '@/mixins/default.js';

export default {
	mixins: [
		defaultMixin('Главная страница'),
	],
	mounted() {
	},
}
</script>

<style lang="scss">
.IndexPage {
}
</style>
