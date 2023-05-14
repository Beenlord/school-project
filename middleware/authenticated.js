export default function({ app, store, redirect }) {
	const token = app.$cookies.get('token');

	// If the user is not authenticated
	if (token === undefined) return redirect('/login');
	return store.dispatch('user/user_token_login', token);
}
