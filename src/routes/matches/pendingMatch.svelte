<script lang="ts">
	import type { User } from '$lib/supabase/User';
	import { updateMatchResult, type MatchType } from '$lib/supabase/Matches';
	import { saveBet } from '$lib/supabase/Votes';
	import { userStore } from '$lib/stores/userStore';
	export let fixture: MatchType;
	export let user: User;
	export let disableBetting: boolean = false;
	export let allowUpdateResult = false;
	let result = '';
	const hasVoted = (matchId: number): string | undefined => {
		return user.Votes.find((vote) => vote.matchId === matchId)?.vote;
	};
	let betOn = '';
	const bet = async (match: MatchType) => {
		if (betOn === '') {
			alert('select a result');
			return false;
		}
		try {
			const voteSaved = await saveBet(user.id, match.id, betOn);
			if (voteSaved) alert('Vote registered.');
			await userStore.update();
		} catch (e) {
			alert(e.message);
			console.log(e.message);
		}
	};
	const updateResult = async () => {
		if (allowUpdateResult) {
			alert('Not allowed!!!');
		}
		try {
			const updatedResult = await updateMatchResult(fixture.id, result, 'Finished');
			if (updatedResult) alert('Result updated.');
		} catch (e) {
			alert(e.message);
			console.log(e.message);
		}
	};
</script>

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
	{#if disableBetting}
		<kor-text size="body-2" color="red">
			Voting is allowed only between 1 day & 3 minutes before match starts.
		</kor-text>
	{/if}
	<kor-button
		id="saveButton"
		disabled={disableBetting}
		on:click={() => bet(fixture)}
		slot="footer"
		label="Save Bet"
	/>
	{#if allowUpdateResult}
		<kor-input label="Result" type="select">
			<kor-menu-item label={fixture.home} on:click={() => (result = fixture.home)}>
				{fixture.home}
			</kor-menu-item>
			<kor-menu-item label={fixture.away} on:click={() => (result = fixture.away)}>
				{fixture.away}
			</kor-menu-item>
			<kor-menu-item label={'Draw'} on:click={() => (result = 'Draw')}>Draw</kor-menu-item>
		</kor-input>
		<kor-button slot="footer" on:click={updateResult}>Update Result</kor-button>
	{/if}
</kor-card>
