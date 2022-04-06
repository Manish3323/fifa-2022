<script>
	import { userStore } from '$lib/stores/userStore';
	import Header from './header/Header.svelte';
	import '@kor-ui/kor/kor-styles.css';
</script>

{#await userStore.init()}
	<kor-spinner size="l"/>
{:then}
	<main>
		<Header />
		<slot />
	</main>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}

<footer>
	<p>
		Built using <a href="https://kit.svelte.dev">svelte-kit</a>
		<a href="https://kor-ui.com/">kor-ui</a>
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}
</style>
