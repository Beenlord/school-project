<template>
	<div class="Sidebar">
		<NuxtLink class="Sidebar__cell" to="/account">
			<Icon id="account" />
		</NuxtLink>
		<div class="Sidebar__inner-content">
			<div class="Sidebar__cell-group">
				<NuxtLink class="Sidebar__cell" to="/search">
					<Icon id="search" />
				</NuxtLink>
				<NuxtLink class="Sidebar__cell" to="/">
					<Icon id="home" />
				</NuxtLink>
				<NuxtLink class="Sidebar__cell" to="/schedule">
					<Icon id="calendar" />
				</NuxtLink>
			</div>
			<div class="Sidebar__cell-group">
				<NuxtLink class="Sidebar__cell" to="/settings">
					<Icon id="settings" />
				</NuxtLink>
				<div class="Sidebar__cell" @click="onLogout()">
					<Icon id="logout" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	methods: {
		onLogout() {
			this.$store.dispatch('user/logout').then(() => {
				this.$router.push('/login');
			});
		},
	},
};
</script>

<style lang="scss">
@import "@/assets/styles/variables/extends.scss";

.Sidebar {
	min-width: var(--std-header);
	padding: var(--std-gap);

	@extend .d-column-flex;
	justify-content: space-between;
	gap: var(--std-gap);

	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

	&__cell {
		min-height: calc(var(--std-menu) - var(--std-gap) * 2);

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: var(--border-radius);
		cursor: pointer;

		& > .Icon {
			width: 3rem !important;
			height: 3rem !important;
		}

		&.nuxt-link-exact-active {
			background: rgba(0, 0, 0, 0.1);
		}

		&:hover {
			background: rgba(0, 0, 0, 0.2);
		}
	}

	&__cell-group {
		flex-grow: 1;
		@extend .d-column-flex;
		justify-content: flex-end;
		gap: var(--std-gap);
	}

	&__inner-content {
		flex-grow: 1;
		@extend .d-column-flex;
		gap: var(--std-gap);
	}
}
</style>
