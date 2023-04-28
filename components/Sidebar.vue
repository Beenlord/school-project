<template>
	<div class="Sidebar">
		<div class="Sidebar__cell">
			<Icon id="account" />
		</div>
		<div class="Sidebar__inner-content">
			<div class="Sidebar__cell-group">
				<div class="Sidebar__cell">
					<Icon id="search" />
				</div>
				<div class="Sidebar__cell">
					<Icon id="home" />
				</div>
				<div class="Sidebar__cell">
					<Icon id="calendar" />
				</div>
			</div>
			<div class="Sidebar__cell-group">
				<div class="Sidebar__cell">
					<Icon id="settings" />
				</div>
				<div class="Sidebar__cell">
					<Icon id="logout" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables/extends.scss";

.Sidebar {
	min-width: var(--std-header);
	padding: var(--std-gap);

	@extend .d-column-flex;
	justify-content: space-between;
	gap: var(--std-gap);

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

		&:hover {
			background: rgba(0, 0, 0, 0.1);
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
