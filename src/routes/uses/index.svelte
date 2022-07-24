<script>
	import Heading from "$lib/components/Heading.svelte";

	export let usesSections;

	console.log(usesSections);
</script>

<svelte:head>
	<title>Nick Reutlinger - Uses</title>
</svelte:head>

<main>
	<article id="uses">
		<Heading text={["uses"]} />

		{#each usesSections as usesSection}
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
	ul {
		font-size: 1.2rem;
		line-height: 0.8rem;
	}

	h1 {
		margin-top: 2rem;
	}
</style>
