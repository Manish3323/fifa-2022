<script>
	let vote,
		home,
		away = '';
	let commence_time = '';
  export const prerender = true
</script>

<div>
	{commence_time}
	<kor-text size="header-1" color={vote === home ? 'var(--text-3)' : ''}>{home}</kor-text>
	vs
	<kor-text size="header-1" color={vote === away ? 'var(--text-3)' : ''}>{away}</kor-text>
</div>
