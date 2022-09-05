<script>
	import Divider from "$lib/components/Divider.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Skills</title>
</svelte:head>

<main>
	<h1>Skills</h1>
	<Divider />

	{#each data.skillSections as skillSection}
		<section>
			<h2>{skillSection.title}</h2>

			<div class="banner">
				{#each skillSection.skills as skill}
					<img src={skill.url} alt={skill.title} title={skill.title} />
				{/each}
			</div>
		</section>
	{/each}
</main>

<style>
	h1 {
		margin-bottom: 0;
	}

	h2 {
		margin-bottom: 0.4rem;
		border-bottom: none;
	}

	.banner {
		border-radius: 0.5rem;
		border: 4px solid var(--yellow);
		padding: 0.5rem;
		line-height: 0; /* remove padding at bottom */
	}

	img {
		margin: 0.25rem;
		transition: all 0.2s linear;
		border-radius: 0.25rem;
	}

	img:hover {
		transform: scale(1.05);
	}

	@keyframes slidingBanners {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(100%);
		}
	}
</style>
