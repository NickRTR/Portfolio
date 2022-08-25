<script>
	import Heading from "$lib/components/Heading.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Uses</title>
</svelte:head>

<main>
	<article id="uses">
		<Heading text={["uses"]} />

		{#each data.usesSections as usesSection}
			<div id={usesSection.sectionTitle}>
				<h1>{usesSection.sectionTitle}</h1>
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
		margin-top: 2rem;
	}
</style>
