<script>
	import Heading from "$lib/components/Heading.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Work</title>
</svelte:head>

<main>
	<Heading text={["Work"]} />

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
	main {
		font-size: 1.2rem;
	}

	ul {
		margin: 0.25rem 0;
	}
</style>
