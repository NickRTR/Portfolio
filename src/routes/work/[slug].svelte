<script>
	export let project;
</script>

<svelte:head>
	<title>Nick Reutlinger - {project.projectName}</title>
</svelte:head>

<main>
	<article class="project">
		{@html project.body.html}
	</article>
</main>

<style>
	:global(.project article) {
		font-size: 1.2rem;
	}

	:global(.project h1) {
		margin-top: 0;
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
