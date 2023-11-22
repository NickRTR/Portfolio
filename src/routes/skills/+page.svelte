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

	<article>
		{#each data.skillSections as skillSection, id}
			<section class:left={id % 2 === 0} class:right={id % 2 !== 0}>
				<h2>{skillSection.title}</h2>
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
		width: 100%;
		gap: 1rem;
	}

	section {
		border: 5px solid var(--color);
		border-radius: 1rem;
		padding: 1rem;
		padding-top: 0;
		z-index: 1;
	}

	section:hover {
		border-color: var(--accent);
	}

	h2 {
		text-align: center;
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}

	@media only screen and (min-width: 600px) {
		.left {
			margin-right: -5rem;
		}

		.right {
			margin-bottom: -1rem;
			margin-left: -5rem;
		}
	}

	@media only screen and (max-width: 600px) {
		article {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}
</style>
