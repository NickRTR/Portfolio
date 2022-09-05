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
</main>

<style>
	:global(.project article) {
		font-size: 1.2rem;
	}

	:global(.project h1) {
		margin-top: 0;
		line-height: 3rem;
		border-bottom: 4px solid var(--yellow);
	}

	:global(.project img) {
		margin-top: 0.8rem;
		width: 4rem;
		height: 4rem;
	}

	:global(.project #try) {
		margin-top: 2rem;
	}

	:global(.project iframe) {
		width: 100%;
		height: 600px;
	}
</style>
