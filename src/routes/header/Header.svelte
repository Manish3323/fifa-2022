<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import logo from './fifalogo.jpeg';
	import { userStore } from '$lib/stores/userStore';
	import { supabase } from '$lib/supabase/supabaseClient';
	let loading = false;
	let user = null;

	userStore.subscribe((userData) => (user = userData));

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			userStore.reset();
			if (error) throw error;
			alert('Logged out.');
			goto('/');
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
	{#if user}
		<kor-text
			on:click={() => goto('/leaderboard')}
			slot="functions"
			size="header-1"
			color="rgb(var(--functional-blue))">{user.current_score}</kor-text
		>
		<kor-icon
			icon="logout"
			on:click={signOut}
			color={'rgb(var(--accent-1))'}
			button
			slot="functions"
		/>
	{/if}
</kor-app-bar>
<kor-nav-bar>
	<kor-tabs>
		<kor-tab-item on:click={() => goto('/')} label="Matches" active={$page.url.pathname === '/'} />
		<kor-tab-item
			on:click={() => goto('/leaderboard')}
			label="Leaderboard"
			active={$page.url.pathname === '/leaderboard'}
		/>
		<!-- <kor-tab-item
			on:click={() => goto('/group')}
			label="My Group"
			active={$page.url.pathname === '/group'}
		/> -->
	</kor-tabs>
</kor-nav-bar>
