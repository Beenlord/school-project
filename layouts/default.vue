<template>
	<div class="DefaultLayout">
		<Navbar>
			<Nuxt />
		</Navbar>
		<Icons />
	</div>
</template>

<script>
import Icons from '@/components/dynamic/Icons.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
		Navbar,
    Icons,
  },
  data: () => {
    return {
    };
  }
};
</script>

<style lang="scss">
.DefaultLayout {
	height: 100dvh;
	height: 100vh;
}
</style>
