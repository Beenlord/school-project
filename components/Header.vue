<template>
	<div class="Header">
		<h1 class="Header__page-title" v-html="pageTitle"></h1>
		<div class="Header__middle-content">
			<slot name="middle-content"></slot>
		</div>
		<div class="Header__right-content">
			<slot name="right-content"></slot>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		pageTitle: {
			type: String,
			default: '<Название страницы>',
		},
	},
};
</script>

<style lang="scss">
@import "@/assets/styles/variables/extends.scss";

.Header {
	min-height: var(--std-header);
	padding: var(--std-gap) 3rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
