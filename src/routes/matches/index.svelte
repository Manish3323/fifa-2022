<script context="module" lang="ts">
  import { user } from "$lib/stores/sessionStore";
  export const prerender = true;
  import predictions from "../jsons/predictions.json";
  import Auth from "../profile/Auth.svelte";
  export const list = predictions.response;
</script>

<svelte:head>
  <title>Upcoming Match</title>
</svelte:head>
{#if $user}
  <section>
    {#each list as fixture}
      <h2>{fixture.teams.home.name} v/s {fixture.teams.away.name}</h2>
      <div class="flex-space-row">
        <img alt={"home team"} src={fixture.teams.home.logo} />
        <img alt={"away team"} src={fixture.teams.away.logo} />
      </div>
    {/each}
  </section>
  <br />
  <section>
    Odds
    <ul>
      {#each list as fixture}
        <li>
          {fixture.teams.home.name}
          {fixture.predictions.percent.home}
          {fixture.teams.home.league.form}
        </li>
        <li>
          {fixture.teams.away.name}
          {fixture.predictions.percent.away}
          {fixture.teams.away.league.form}
        </li>
        <li>Draw {fixture.predictions.percent.draw}</li>
      {/each}
    </ul>
  </section>

  <section class="flex-center-row">
    Bet on :
    {#each list as fixture}
      <button>
        <img alt={"home team"} src={fixture.teams.home.logo} />
      </button>
      /
      <button>
        <img alt={"home team"} src={fixture.teams.away.logo} />
      </button>
    {/each}
  </section>
{:else}
  <Auth />
{/if}

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .flex-center-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .flex-space-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 3em;
    height: 3em;
  }
  button {
    margin: 1em;
  }
</style>
