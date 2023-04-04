<template>
	<div :class="[ 'Aside', { 'Aside_show': show } ]">
	</div>
</template>

<script>

export default {
	data() {
		return {
			show: false,
		};
	},
	mounted() {
		this.$nuxt.$emit('aside-reset', () => this.show = false);
	},
};
</script>
