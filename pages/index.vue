<template>
  <div class="page IndexPage">
		<Header :page-title="pageTitle">
			<template #right-content>
				<Button icon="bell" />
			</template>
		</Header>
	</div>
</template>


<script>
import defaultMixin from '@/mixins/default.js';

export default {
	mixins: [
		defaultMixin('Главная'),
	],
	mounted() {
	},
}
</script>

<style lang="scss">
.IndexPage {
}
</style>
