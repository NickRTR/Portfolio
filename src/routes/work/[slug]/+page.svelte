<script>
	import Divider from "$lib/components/Divider.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - {data.project.projectName}</title>
</svelte:head>

<main>
	<article class="project">
		{@html data.project.body.html}
	</article>

	<div class="divider"><Divider /></div>

	<a href="/work"><button type="button" title="More projects">More projects</button></a>
	<a href={data.project.url}><button type="button" title="Visit {data.project.projectName}">Visit {data.project.projectName}</button></a>
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

	.divider {
		margin-top: 2rem;
	}

	button {
		margin-block: -2rem;
		margin-left: 0;
		padding-left: 0;
	}
</style>
