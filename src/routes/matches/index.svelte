<script context="module" lang="ts">
	import { user } from '$lib/stores/sessionStore';
	export const prerender = true;
	import predictions from '../jsons/predictions.json';
	import Auth from '../profile/Auth.svelte';
	export const list = predictions.response;
</script>

{#if $user}
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
					<kor-radio-button label={fixture.teams.home.name} />
					<kor-radio-button label={fixture.teams.away.name} />
					<kor-radio-button active label="draw" />
					<kor-button slot="footer" active label="Save Bet" />
				</kor-card>
			</kor-card>
		</kor-accordion>
	{/each}
{:else}
	<Auth />
{/if}

