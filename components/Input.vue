<template>
	<div class="Input" :style="`cursor: ${cursor};`">
		<div class="Input__inner">
			<Icon v-if="icon" :id="icon" />
			<slot v-if="label">
				<div class="Input__inner-content">
					<input v-if="label" :type="type" :placeholder="label" :name="name" v-model="value">
				</div>
			</slot>
			<div v-else class="Input__inner-text">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		label: {
			type: String,
			default: undefined,
		},
		name: {
			type: String,
			default: undefined,
		},
		type: {
			type: String,
			default: 'text',
		},
		icon: {
			type: String,
			default: undefined,
		},
		cursor: {
			type: String,
			default: 'default',
		},
	},
	data() {
		return {
			value: null,
		};
	},
	watch: {
		value: {
			handler(value, oldValue) {
				if (value !== oldValue) {
					this.$emit('change', value);
				}
			},
		},
	},
};
</script>

<style lang="scss">
.Input {
	display: inline-block;

	&__inner {

		$padding: calc(var(--std-gap) * 1.5);
		min-width: calc(var(--std-header) - var(--std-gap) * 2);
		min-height: calc(var(--std-header) - var(--std-gap) * 2);
		display: flex; align-items: center; gap: var(--std-gap);
		overflow: hidden; box-shadow: var(--box-shadow);
		border-radius: var(--border-radius);
		font-size: 2rem;

		&-content {
			width: 100%;
			display: flex; align-items: center;

			input {
				width: 100%;
				height: 100%;
				padding: $padding;
				border: none;
				outline: none;
				background: none;
			}

			&:not(:has(input)) {
				padding-right: $padding;
				cursor: pointer;
			}

			&:not(:has(*)) {
				display: none;
			}
		}

		&-text {
			padding: $padding;
		}

		&:has(.Icon) input {
			padding-left: 0;
		}

		&:has(.Icon) &-text {
			padding-left: 0;
		}

		// Default values
		& .Icon {
			width: 3rem !important;
			height: 3rem !important;
		}

		&:has(.Icon) {
			padding-left: $padding;
		}
	}
}
</style>
