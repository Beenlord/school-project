<template>
	<div class="DefaultLayout">
		<Sidebar class="DefaultLayout__sidebar" />
		<div class="DefaultLayout__main">
			<Nuxt />
		</div>
		<Icons />
	</div>
</template>

<script>
import Icons from '@/components/dynamic/Icons.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
		Sidebar,
    Icons,
  },
	mounted() {

	},
};
</script>

<style lang="scss">
.DefaultLayout {
	display: flex;

	&__sidebar,
	&__main {
		height: 100vh;
		height: 100dvh;
	}

	&__main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
}
</style>
