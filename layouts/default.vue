<template>
	<div class="default-layout">
		<div class="default-layout__content">
			<Sidebar class="default-layout__sidebar" />
			<Nuxt class="default-layout__page" />
		</div>
		<Icons />
	</div>
</template>

<script>
import Icons from '@/components/dynamic/Icons.vue';
import Sidebar from '@/components/partial/Sidebar.vue';

export default {
	components: {
    Icons,
		Sidebar,
  },
};
</script>

<style lang="scss">
.default-layout {
	width: 100%;
	position: relative;
	top: 0; left: 0;
	.default-layout__content {
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0; left: 0;
		display: flex;
		.default-layout__page {
			flex-grow: 1;
		}
	}
}
</style>
