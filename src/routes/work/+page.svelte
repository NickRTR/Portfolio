<script>
	import Divider from "$lib/components/Divider.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Work</title>
</svelte:head>

<main>
	<h1>Work</h1>
	<Divider />

	<ul>
		{#each data.projects as project}
			<li>
				<a href="/work/{project.slug}" data-sveltekit-prefetch title="-> {project.projectName}">{project.projectName}</a>
			</li>
			<ul><li>{project.shortDescription}</li></ul>
		{/each}
	</ul>
</main>

<style>
	h1 {
		margin-bottom: 0;
	}

	ul {
		font-size: 1.2rem;
		margin: 0.25rem 0;
	}
</style>
