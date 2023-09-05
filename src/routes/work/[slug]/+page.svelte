<script>
	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - {data.project.projectName}</title>
</svelte:head>

<main>
	<article class="project">
		{@html data.project.body.html}
	</article>

	<div class="buttons">
		<a href="/work"><button type="button" title="More projects">More projects</button></a>
		<a href={data.project.url}
			><button type="button" title="Visit {data.project.projectName}">Visit Project</button></a
		>
	</div>
</main>

<style>
	main {
		max-width: 700px;
		margin-inline: auto;
	}

	:global(.project *) {
		text-align: left;
	}

	:global(.project h1) {
		margin-top: 0;
		line-height: 3rem;
		border-bottom: 4px solid var(--yellow);
	}

	:global(.project img) {
		display: block;
		margin-top: 0.8rem;
		max-width: 100%;
		height: auto;
	}

	:global(.project #try) {
		margin-top: 2rem;
	}

	:global(.project iframe) {
		width: 100%;
	}

	.buttons {
		text-align: left;
	}

	button {
		text-align: left;
		border-radius: 1rem;
		outline: none;
		transition: 0.1s ease-in-out;
		background-color: var(--text);
		color: var(--background);
		margin-bottom: 1rem;
		font-weight: bold;
		font-size: 1rem;
		padding: 0.4rem;
		cursor: pointer;
		border: 3px solid var(--accent);
		background-color: var(--text);
	}

	button:hover,
	button:focus {
		background-color: var(--accent);
	}
</style>
