<script context="module" lang="ts">
	import { userStore } from '../../lib/stores/userStore';
	import Auth from './Auth.svelte';
	import Profile from './Profile.svelte';
	let user = null;

	userStore.subscribe((userData) => (user = userData));
</script>

{#if user}
	<Profile />
{:else}
	<Auth />
{/if}
