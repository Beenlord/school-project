<template>
	<div class="DefaultLayout">
		<Nuxt />
		<Icons />
		<Preloader />
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
.DefaultLayout {
}
</style>
