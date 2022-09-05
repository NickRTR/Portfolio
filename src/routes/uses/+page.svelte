<script>
	import Divider from "$lib/components/Divider.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Uses</title>
</svelte:head>

<main>
	<h1>Uses</h1>
	<Divider />

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

	h1 {
		margin-bottom: 0;
	}

	h2 {
		color: var(--yellow);
	}
</style>
