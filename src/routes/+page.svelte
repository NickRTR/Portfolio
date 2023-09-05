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

	<article id="about">
		<h1>About me</h1>
		<img id="me" src="me.jpg" alt="myself" />
		<section>{@html data.aboutPreview.about.text.html}</section>
		<img src="Spine.gif" style="width:100%; max-width: 600px;" alt="" />
	</article>
</main>

<style>
	main {
		margin-top: 0;
	}

	.hero {
		background-image: url("backgrounds/background1.jpg");
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
		text-align: center;
	}

	article h1 {
		font-size: 2rem;
	}

	article #me {
		width: 300px;
		border-radius: 50%;
	}

	section {
		max-width: 500px;
		margin: auto;
	}

	section :global(p) {
		text-align: left;
	}
</style>
