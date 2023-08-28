<script>
	import ScrollIndicator from "$lib/components/ScrollIndicator.svelte";

	export let data;
</script>

<main>
	<div class="hero">
		<div class="container">
			<h1>Nick Reutlinger</h1>
		</div>
		<ScrollIndicator />
	</div>

	<article id="about">
		<h1>About me</h1>
		<img src="me.jpg" alt="myself" />
		<section>{@html data.aboutPreview.about.text.html}</section>
	</article>
</main>

<style>
	.hero {
		background-image: url("background1.jpg");
		background-size: cover;
	}

	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		user-select: none;
		font-size: 4rem;
		margin: 0;
		padding: 2rem;
		transition: all 0.5s ease-in-out;
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}

	h1:hover {
		font-size: 6rem;
		text-decoration-color: transparent;
		color: var(--background);
		background-color: var(--text);
	}

	#about {
		min-height: 100vh;
	}

	#about h1 {
		font-size: 2rem;
	}

	#about img {
		width: 300px;
		border-radius: 50%;
	}

	section {
		max-width: 500px;
		margin: auto;
	}
</style>
