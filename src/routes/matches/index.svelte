<script context="module" lang="ts">
	import { userStore } from '$lib/stores/userStore';
	import { saveBet } from '$lib/supabase/Votes';
	import { getMatches, type MatchType } from '$lib/supabase/Matches';
	import type { User } from '$lib/supabase/User';
	import Label from './label.svelte';
	import Auth from '../profile/Auth.svelte';
	import { fix_and_outro_and_destroy_block } from 'svelte/internal';

	const dateFormatter = Intl.DateTimeFormat('en', {
		dateStyle: 'short',
		timeStyle: 'short',
		timeZone: 'IST'
	});

	const format = (dateStr: string) => dateFormatter.format(new Date(dateStr));

	let betOn = '';
	let user: User = null;

	userStore.subscribe((userData) => {
		user = userData;
	});

	const allowBetting = (commence_date_time: string) => {
		const commence_time = new Date(commence_date_time);
		const diff = Math.abs(new Date().valueOf() - commence_time.valueOf());
		const minutes = Math.floor(diff / 1000 / 60);
		return import.meta.env.VITE_ALLOW_BET || minutes > 3;
	};

	const bet = async (match: MatchType) => {
		console.log('betting');
		try {
			const voteSaved = await saveBet(user.id, match.id, betOn);
			if (voteSaved) alert('Vote registered.');
		} catch (e) {
			alert(e.message);
			console.log(e.message);
		}
	};
	const hasVoted = (matchId: number): string | undefined => {
		return user.Votes.find((vote) => vote.matchId === matchId)?.vote;
	};
</script>

{#await getMatches()}
	<p>waiting for the promise to resolve...</p>
{:then matches}
	{#if user}
		{#each matches as fixture}
			<kor-accordion label={`${fixture.commence_time} ${fixture.home} vs ${fixture.away}`}>
				<kor-card flex-direction="column">
					<kor-radio-button
						active={hasVoted(fixture.id) === fixture.home}
						on:click={() => (betOn = fixture.home)}
						label={`${fixture.home} ${fixture.odd_1}`}
					/>
					<kor-radio-button
						active={hasVoted(fixture.id) === fixture.away}
						on:click={() => (betOn = fixture.away)}
						label={`${fixture.away} ${fixture.odd_2}`}
					/>
					<kor-radio-button
						active={hasVoted(fixture.id) === 'Draw'}
						on:click={() => (betOn = 'Draw')}
						label={`Draw ${fixture.odd_draw}`}
					/>
					{#if !allowBetting(fixture.commence_time)}
						<kor-text size="body-2" color="red">
							Voting is allowed only between 1 day & 3 minutes before match starts.</kor-text
						>
					{/if}
					<kor-button
						id="saveButton"
						disabled={fixture.status !== 'Pending'}
						on:click={() => bet(fixture)}
						slot="footer"
						active={betOn !== ''}
						label="Save Bet"
					/>
				</kor-card>
			</kor-accordion>
		{/each}
	{:else}
		<Auth />
	{/if}
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}
