<template>
	<div class="AuthLayout">
		<Nuxt />
		<Icons />
	</div>
</template>

<script>
import Icons from '@/components/dynamic/Icons.vue';

export default {
	components: {
		Icons,
	},
	data: () => {
		return {
		};
	}
};
</script>

<style lang="scss">
.AuthLayout {
}
</style>
