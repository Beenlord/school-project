<template>
	<div class="page SettingsPage">
		<Header :title="pageTitle"></Header>
		<div class="page__content"></div>
	</div>
</template>

<script>
import defaultMixin from '@/mixins/default.js';

export default {
	mixins: [
		defaultMixin('Настройки аккаунта'),
	],
}
</script>
