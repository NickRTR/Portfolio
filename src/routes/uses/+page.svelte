<script>
	import Header from "$lib/components/Header.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Uses</title>
</svelte:head>

<main>
	<Header title="Uses" />

	<article id="uses">
		{#each data.usesSections as usesSection}
			<div id={usesSection.sectionTitle}>
				<h2>{usesSection.sectionTitle}</h2>
				<ul>
					{#each usesSection.uses as use}
						<li>{@html use.use.html}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</article>
</main>

<style>
	li {
		font-size: 1.2rem;
		margin-block: -0.75rem;
		line-height: 1.6rem;
	}

	h2 {
		text-decoration: underline;
		text-decoration-color: var(--accent);
		margin-block: 2rem;
	}
</style>
