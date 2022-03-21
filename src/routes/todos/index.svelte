<script>
	import Header from '../header/Header.svelte';
</script>

<Header />
<kor-nav-bar>
	<kor-tabs>
		<kor-tab-item label="Tab 1" active />
		<kor-tab-item label="Tab 2" />
		<kor-tab-item label="Tab 3" />
	</kor-tabs>
	<kor-icon icon="launch" button slot="functions" />
	<kor-icon icon="more_vert" button slot="functions" />
</kor-nav-bar>
