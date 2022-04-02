<script context="module" lang="ts">
	import { userStore } from '$lib/stores/userStore';
	import { saveBet } from '$lib/supabase/Votes';
	import type { User } from '../../lib/supabase/user';
	export const prerender = true;
	import predictions from '../jsons/predictions.json';
	import Auth from '../profile/Auth.svelte';
	export const list = predictions.response;
	let betOn = '';
	let user: User = null;
	userStore.subscribe((userData) => {
		user = userData;
	});
	const bet = async (matchId: number) => {
		const voteSaved = await saveBet(user.id, matchId, betOn);
		if (voteSaved) alert('Vote registered.');
	};
</script>

{#if user}
	{#each list as fixture}
		<kor-accordion label={`${fixture.teams.home.name} vs ${fixture.teams.away.name}`}>
			<kor-card flex-direction="column" flat>
				<kor-progress-bar
					value={fixture.predictions.percent.home.split('%')[0]}
					show-progress
					info={fixture.teams.home.league.form}
					label={fixture.teams.home.name}
					size="s"
				/>
				<kor-progress-bar
					value={fixture.predictions.percent.away.split('%')[0]}
					show-progress
					info={fixture.teams.away.league.form}
					label={fixture.teams.away.name}
					size="s"
				/>
				<kor-progress-bar
					value={fixture.predictions.percent.draw.split('%')[0]}
					show-progress
					label="Draw odds"
					size="s"
				/>
				<kor-card slot="footer">
					<kor-radio-button
						active={betOn === fixture.teams.home.name}
						label={fixture.teams.home.name}
					/>
					<kor-radio-button
						active={betOn === fixture.teams.away.name}
						label={fixture.teams.away.name}
					/>
					<kor-radio-button active={betOn === 'draw'} label="draw" />
					<kor-button
						on:click={() => bet(1)}
						slot="footer"
						active={betOn !== ''}
						label="Save Bet"
					/>
				</kor-card>
			</kor-card>
		</kor-accordion>
	{/each}
{:else}
	<Auth />
{/if}
