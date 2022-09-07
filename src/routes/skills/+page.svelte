<script>
	import Header from "$lib/components/Header.svelte";
	import Badge from "$lib/components/Badge.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Skills</title>
</svelte:head>

<main>
	<Header title="Skills" />

	{#each data.skillSections as skillSection}
		<section>
			<h2>{skillSection.title}</h2>

			<div class="badges">
				{#each skillSection.skills as skill}
					<Badge url={skill.url} alt={skill.title} />
				{/each}
			</div>
		</section>
	{/each}
</main>

<style>
	h2 {
		margin-bottom: 0.4rem;
		border-bottom: none;
	}

	.badges {
		border-radius: 0.5rem;
		border: 4px solid var(--yellow);
		padding: 0.5rem;
		line-height: 0; /* remove padding at bottom */
	}
</style>
