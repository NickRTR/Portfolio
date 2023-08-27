<script>
	import Badge from "$lib/components/Badge.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Skills</title>
</svelte:head>

<main>
	<h1>Skills</h1>

	<article>
		{#each data.skillSections as skillSection}
			<section>
				<h3>{skillSection.title}</h3>
				{#each skillSection.skills as skill}
					<Badge url={skill.url} alt={skill.title} />
				{/each}
			</section>
			<!-- placeholder -->
			<div />
			<div />
		{/each}
	</article>
</main>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 50%;
		margin-inline: auto;
		gap: 1rem;
	}

	section {
		border: 5px solid var(--text);
		border-radius: 1rem;
		padding: 1rem;
		padding-top: 0;
	}

	h3 {
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}
</style>
