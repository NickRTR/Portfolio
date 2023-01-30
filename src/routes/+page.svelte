<script>
	import ScrollIndicator from "$lib/components/ScrollIndicator.svelte";
</script>

<main>
	<hero>
		<div>
			<h1>Nick Reutlinger</h1>
		</div>
		<ScrollIndicator />
	</hero>
</main>

<style>
	div {
		height: 82vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	hero h1 {
		user-select: none;
		font-size: 4rem;
		margin: 0;
		padding: 2rem;
		transition: all 0.5s ease-in-out;
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}

	hero h1:hover {
		font-size: 6rem;
		color: var(--background);
		background-color: var(--text);
	}
</style>
