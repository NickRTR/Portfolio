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

	<article id="About">
		<h1 id="about">About me</h1>
	</article>
</main>

<style>
	div {
		height: 80vh;
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
		text-decoration-color: transparent;
		color: var(--background);
		background-color: var(--text);
	}
</style>
