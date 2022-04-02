<script context="module" lang="ts">
	import Matches from './matches/index.svelte';
	import Header from './header/Header.svelte';
	import { userStore } from '../lib/stores/userStore';
</script>

{#await userStore.init()}
	<p>waiting for the promise to resolve...</p>
{:then}
	<Matches />
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
