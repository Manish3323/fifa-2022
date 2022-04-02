<script>
	import { browser, dev } from '$app/env';
	import Header from './header/Header.svelte';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<kor-card style="width: 100%">
  <kor-table condensed>
    <kor-table-row slot="header">
      <kor-table-cell grid-cols="6" head sorted sort-direction="desc"
        >Name</kor-table-cell
      >
      <kor-table-cell grid-cols="6" head
        >Points</kor-table-cell
      >
    </kor-table-row>
  </kor-table>
</kor-card>
