<template>
	<div class="Banner">
		<div class="Banner__title" v-html="title"></div>
		<div class="Banner__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss">
.Banner {
	padding: calc(var(--std-gap) * 1.5);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);
	border: 1px solid var(--clr-green);

	&__title {
		font-size: 2rem;
		font-weight: var(--fw-bold);
		margin-bottom: var(--std-gap);
		color: var(--clr-green);
	}
	&__content {}
}
</style>
