<script>
	import Carousel from "svelte-carousel";

	export let data;

	import { browser } from "$app/environment";

	let carousel; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<svelte:head>
	<title>Nick Reutlinger - Uses</title>
</svelte:head>

<main>
	<h1>Uses</h1>

	{#if browser}
		<article>
			<Carousel>
				{#each data.usesSections as usesSection}
					<section id={usesSection.sectionTitle}>
						<h2>{usesSection.sectionTitle}</h2>
						<ul>
							{#each usesSection.uses as use}
								<li>{@html use.use.html}</li>
							{/each}
						</ul>
					</section>
					<!-- <img src="/uses/{usesSection.sectionTitle}.png" width="100%" alt="" />
                <div /> -->
				{/each}
			</Carousel>
		</article>
	{/if}
</main>

<style>
	:global(p) {
		text-align: left;
	}

	h2 {
		text-align: left;
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}

	li {
		font-size: 1.2rem;
		margin-block: -0.75rem;
		line-height: 1.6rem;
	}

	article {
		width: 450px;
		margin: auto;
	}

	article {
		border: 3px solid var(--accent);
		border-radius: 2rem;
		padding: 1rem;
	}
</style>
