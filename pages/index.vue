<template>
  <div class="page IndexPage">
		<Header />
	</div>
</template>


<script>
import commonMixin from '@/mixins/common.js';
import Header from '@/components/Header.vue';

export default {
  mixins: [
    commonMixin(),
  ],
	components: {
		Header,
	},
}
</script>

<style lang="scss">
.IndexPage {
}
</style>
