<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import logo from './fifalogo.jpeg';
	import { user } from '$lib/stores/sessionStore';
	import { supabase } from '$lib/supabase/supabaseClient';
	let loading = false;
	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			$user = null;
			if (error) throw error;
			alert('Logged out.');
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}
</script>

<kor-app-bar label="Fifa World Cup 2022" {logo}>
	<kor-icon
		icon="person"
		color={$page.url.pathname === '/profile' ? 'rgb(var(--accent-1))' : 'var(--text-1)'}
		on:click={() => goto('/profile')}
		button
		slot="functions"
	/>
	{#if $user}
		<kor-icon
			icon="logout"
			on:click={signOut}
			color={'rgb(var(--accent-1))'}
			button
			slot="functions"
		/>
	{/if}</kor-app-bar
>
<kor-nav-bar style="width: '-webkit-fill-available';">
	<kor-tabs>
		<kor-tab-item on:click={() => goto('/')} label="Macthes" active={$page.url.pathname === '/'} />
		<kor-tab-item
			on:click={() => goto('/about')}
			label="Leaderboard"
			active={$page.url.pathname === '/about'}
		/>
		<kor-tab-item
			on:click={() => goto('/todos')}
			label="My Group"
			active={$page.url.pathname === '/todos'}
		/>
	</kor-tabs>
</kor-nav-bar>

<style>
	kor-icon:hover {
		cursor: pointer;
	}
</style>
