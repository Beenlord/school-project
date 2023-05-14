<template>
	<div class="LoginPage">
		<div class="form">
			<div class="form__field-group">
				<Input
					icon="face"
					input-name="login"
					input-type="email"
					label="Логин"
					@change="setValue('login', $event)"
				/>
				<Input
					name="password"
					type="password"
					label="Пароль"
					@change="setValue('password', $event)"
				/>
			</div>
			<div class="form__control">
				<Input
					icon="login"
					cursor="pointer"
					@click.native="sendValues()"
				>Войти</Input>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import commonMixin from '@/mixins/common.js';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
	mixins: [
		commonMixin({
			layout: 'autharisation',
		}),
	],
	components: {
		Input,
		Button,
	},
	data() {
		return {
			auth: {
				login: null,
				password: null,
			},
		};
	},
	watch: {
	},
	sockets: {
		connect() {
			if (!this.getSocketStatus) {
				this.$cookies.set('test-cookies', 'test value');
				this.setSocketStatus(true);
			}
		},
	},
	computed: {

		...mapGetters({
			getSocketStatus: 'socket/get_status',
		}),
	},
	methods: {
		setValue(fieldType, value) {
			this.auth[fieldType] = value;
		},
		sendValues() {
			if (this.getSocketStatus) {
				if (this.auth.login && this.auth.password) {
					this.$socket.client.emit('user_auth_request', this.auth);
				}
			}
		},

		...mapMutations({
			setSocketStatus: 'socket/SET_STATUS',
		}),
	},
}
</script>

<style lang="scss">
.LoginPage {
	padding-top: 4rem;
	display: flex;
	flex-direction: column;
	justify-content : center;
	align-items: center;

	.form {
		display: flex;
		flex-direction: column;
		grid-gap: calc(var(--std-gap) * 3);

		&__field-group {
			display: grid;
			grid-template-rows: 1fr 1fr;
			grid-gap: calc(var(--std-gap) * 2);
		}

		&__control {
			display: flex;
			justify-content: flex-end;
		}
	}
}
</style>
