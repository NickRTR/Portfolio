<script>
	import ScrollIndicator from "$lib/components/ScrollIndicator.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger</title>
</svelte:head>

<main>
	<div class="hero">
		<div class="container">
			<h1>Nick Reutlinger</h1>
		</div>
		<ScrollIndicator />
	</div>

	<article>
		<h1>About me</h1>
		<img src="me.jpg" alt="myself" />
		<section>{@html data.aboutPreview.about.text.html}</section>
	</article>
</main>

<style>
	main {
		margin-top: 0;
	}

	.hero {
		background-image: url("background2.jpg");
		background-size: cover;
	}

	.container {
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container h1 {
		user-select: none;
		font-size: 4rem;
		margin: 0;
		padding: 2rem;
		margin-top: 5vh;
		transition: all 0.5s ease-in-out;
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}

	.container h1:hover {
		font-size: 6rem;
		color: var(--background);
		background-color: var(--text);
	}

	article {
		min-height: 100vh;
		padding-top: 1rem;
	}

	article h1 {
		font-size: 2rem;
	}

	article img {
		width: 300px;
		border-radius: 50%;
	}

	section {
		max-width: 500px;
		margin: auto;
	}
</style>
