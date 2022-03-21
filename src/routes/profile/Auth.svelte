<script>
	import { supabase } from '../../lib/supabase/supabaseClient';
	let loading = false;
	let email = '';
	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<kor-pane icon="login" label="Magic signin link">
	<kor-textarea
		type="email"
		label="email"
		on:change={(event) => (email = event.target.value)}
		value={email ? email : ''}
	/>
	<kor-button
		slot="footer"
		on:click={handleLogin}
		icon="email"
		disabled={email === ''}
		label="Send"
	/>
</kor-pane>

<style>
	kor-pane {
		width: 100%	;
	}
</style>
