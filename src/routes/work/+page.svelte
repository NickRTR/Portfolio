<script>
	import Header from "$lib/components/Header.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Work</title>
</svelte:head>

<main>
	<Header title="Work" />

	{#each data.projects as project}
		<h3><a href="/work/{project.slug}" data-sveltekit-prefetch title="-> {project.projectName}">{project.projectName}</a></h3>
		<ul><li>{project.shortDescription}</li></ul>
	{/each}
</main>

<style>
	h3 {
		margin-block: 0.75rem;
	}

	ul {
		font-size: 1.2rem;
		margin-block: 0.25rem;
	}
</style>
