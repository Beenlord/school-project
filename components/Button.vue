<template>
	<div class="Button">
		<Icon v-if="icon" :id="icon" />
		<slot></slot>
	</div>
</template>

<script>

export default {
	props: {
		icon: {
			type: String,
			default: undefined,
		},
	},
};
</script>

<style lang="scss">
.Button {
	min-height: calc(var(--std-header) - var(--std-gap) * 2);
	min-width: calc(var(--std-header) - var(--std-gap) * 2);
	padding: var(--std-gap) calc(var(--std-gap) * 1.5);

	display: flex;
	align-items: center;
	justify-content: center;
	gap: var(--std-gap);

	border-radius: var(--border-radius);
	cursor: pointer;

	& .Icon {
		width: 3rem !important;
		height: 3rem !important;
	}

	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}
}
</style>
