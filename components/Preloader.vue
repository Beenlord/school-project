<template>
	<div :class="['Preloader', { 'Preloader_active': active }]">
		<div class="Preloader__bar"></div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			active: false,
		}
	},
	mounted() {
		this.$nuxt.$on('preloader', (value) => this.active = value);
	},
	beforeDestroy() {
		this.$nuxt.$off('preloader', (value) => this.active = false);
	},
};
</script>

<style lang="scss">
.Preloader {
	height: 100%;
	width: 100%;

	position: fixed;
	top: 0; left: 0;

	transition: 0.2s ease opacity;
	pointer-events: none;
	opacity: 0;

	&:after {
		content: "";

		width: 150%;
		height: 3px;

		position: absolute;
		top: 0; right: 100%;

		animation: ease-in-out 3s in-load infinite;
		background-color: red;
	}

	&_active {
		pointer-events: all;
		opacity: 1;
	}

	@keyframes in-load {
		0% {
			transform: translateX(0%);
		}
		50% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(200%);
		}
	}
}
</style>
