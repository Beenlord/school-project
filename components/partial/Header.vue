<template>
	<div class="Header">
		<div class="Header__left-side"></div>
		<div class="Header__right-side"></div>
	</div>
</template>

<style lang="scss">
.Header {
	height: 8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.Header__left-side,
	.Header__rigth-side {
		height: 100%;
		background: hotpink;
	}
	.Header__left-side {
		flex-grow: 1;
	}
	.Header__rigth-side {
	}
}
</style>
