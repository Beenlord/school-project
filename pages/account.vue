<template>
	<div class="page AccountPage">
		<Header :title="pageTitle">
			<template #right-content>
				<Button icon="bell" @click.native="$store.commit('counter/inc')" >
					<span>{{ $store.state.counter.value }}</span>
				</Button>
				<Button icon="logout" />
			</template>
		</Header>
		<div class="page__content"></div>
	</div>
</template>

<script>
import defaultMixin from '@/mixins/default.js';

export default {
	mixins: [
		defaultMixin('Владимир Фомин'),
	],
	mounted() {
	},
}
</script>
