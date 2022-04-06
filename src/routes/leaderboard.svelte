<script context="module" lang="ts">
	import { browser, dev } from '$app/env';
	import { leaderboardUsers, type User } from '$lib/supabase/User';
	// import type { User } from '$lib/supabase/user';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	let users: User[] = []
	export async function load() {
		users = await leaderboardUsers();
		return users
	}
</script>

<svelte:head>
	<title>Leader board</title>
</svelte:head>

<kor-card>
	<kor-table>
		<kor-table-row slot="header">
			<kor-table-cell grid-cols="6" head>Name</kor-table-cell>
			<kor-table-cell grid-cols="6">Points</kor-table-cell>
		</kor-table-row>
		{#each users as user}
			<kor-table-row>
				<kor-table-cell grid-cols="6">{user.name}</kor-table-cell>
				<kor-table-cell grid-cols="6">{user.current_score}</kor-table-cell>
			</kor-table-row>
		{/each}
	</kor-table>
</kor-card>
