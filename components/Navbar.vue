<template>
	<div class="Navbar">
		<div class="Navbar__menu menu">
			<div class="menu__list menu__list_first">
				<div class="menu__item">
					<Icon class="menu__item-icon" id="ico-account" />
					<div class="menu__item-legend">Текст легенды</div>
				</div>
				<div class="menu__item">
					<Icon class="menu__item-icon" id="ico-add-account" />
					<div class="menu__item-legend">Текст легенды</div>
				</div>
			</div>
			<div class="menu__list menu__list_middle">
				<div class="menu__item">
					<Icon class="menu__item-icon" id="ico-paper" />
					<div class="menu__item-legend">Текст легенды</div>
				</div>
			</div>
			<div class="menu__list menu__list_last">
				<div class="menu__item">
					<Icon class="menu__item-icon" id="ico-settings" />
					<div class="menu__item-legend">Текст легенды</div>
				</div>
				<div class="menu__item">
					<Icon class="menu__item-icon" id="ico-logout" />
					<div class="menu__item-legend">Текст легенды</div>
				</div>
			</div>
		</div>
		<div class="Navbar__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss">
.Navbar {
	width: 100%;
	height: 100%;
	display: flex;

	.menu {
		padding: 1rem 0;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;

		&__list {
			flex-grow: 1;
			display: flex;
			align-items: center;
			flex-direction: column;
			grid-gap: 1rem;

			&_first {}
			&_middle {
				justify-content: center;
			}
			&_last {
				justify-content: flex-end;
			}
		}
		&__item {
			width: 3rem;
			height: 3rem;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 1rem;

			&-icon {
				width: 1.5rem !important;
				height: 1.5rem !important;
				color: #FFDDD6;
			}

			&-legend {
				position: absolute;
				top: 50%; left: calc(100% + 3rem);
				transform: translateY(-50%);
				font-size: 1rem;
				white-space: nowrap;
				pointer-events: none;
				opacity: 0;
			}

			&:hover {
				background: #FF887B;
				cursor: pointer;

				.menu__item-legend {
					opacity: 1;
				}
			}
		}
	}

	&__menu {
		width: 5rem;
		background: #FF5A49;
	}

	&__content {
		flex-grow: 1;
	}
}
</style>
