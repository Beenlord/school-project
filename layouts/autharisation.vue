<template>
	<div class="AuthLayout">
		<div class="AuthLayout__content">
			<div class="AuthLayout__title">
				<Icon id="school" />
				<h1>SCH Project</h1>
			</div>
			<Nuxt />
		</div>
		<Icons />
	</div>
</template>

<script>
import Icons from '@/components/dynamic/Icons.vue';

export default {
	components: {
		Icons,
	},
	data() {
		return {
			projectName: null,
		};
	},
};
</script>

<style lang="scss">
.AuthLayout {
	height : 100vh;
	position: relative;
	background: var(--clr-light-gray);

	&__content {
		width: 100vw;
		position: absolute;
		top: 50%; left: 0;
		transform: translateY(-50%);
		gap: calc(var(--std-gap) * 3);
	}

	&__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content : center;

		& > .Icon {
			width: 8rem !important;
			height: 8rem !important;
		}
		& > h1 {
			font-weight: var(--fw-bold);
		}
	}
}
</style>
