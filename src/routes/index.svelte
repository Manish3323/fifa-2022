<script context="module" lang="ts">
	import Home from './home/index.svelte'
	export const prerender = true;
</script>

<Home />

<style>
:global(.content) {
		width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>