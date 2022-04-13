<script context="module" lang="ts">
	import { userStore } from '$lib/stores/userStore';
	import { getMatches, type MatchType } from '$lib/supabase/Matches';
	import type { User } from '$lib/supabase/User';
	import Auth from '../profile/Auth.svelte';
	import PendingMatch from './pendingMatch.svelte';
	let user: User = null;
	userStore.subscribe((userData) => {
		user = userData;
	});
</script>

{#await getMatches()}
	<p>waiting for the promise to resolve...</p>
{:then matches}
	{#if user}
		{#each matches as fixture}
			<kor-accordion label={`${fixture.commence_time} ${fixture.home} vs ${fixture.away}`}>
				{#if fixture.status === 'Pending'}
					<PendingMatch {user} {fixture} />
				{/if}
				{#if fixture.status === 'Started'}
					<PendingMatch {user} {fixture} disableBetting allowUpdateResult={user.admin}/>
				{/if}
				{#if fixture.status === 'Completed'} <!-- admin has updated event & now this event is actually over-->
					<PendingMatch {user} {fixture} disableBetting/>
				{/if}
			</kor-accordion>
		{/each}
	{:else}
		<Auth />
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
