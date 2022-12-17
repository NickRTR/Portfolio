<script>
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { theme } from "$lib/stores";

	export let data;

	$: color = $theme === "dark" ? "#c8c8c8" : "#4d4d4d";
	$: background = $theme === "dark" ? "#04151f" : "white";
	$: contrast = $theme === "dark" ? "white" : "black";
</script>

<svelte:head>
	<title>Nick Reutlinger - Portfolio</title>
</svelte:head>

<body style="--color: {color}; --background: {background}; --contrast: {contrast};">
	<main>
		<Nav />

		<slot />

		<Footer weather={data.weather} />
	</main>
</body>

<style>
	:global(:root) {
		--gradient: linear-gradient(90deg, rgb(255, 15, 123) 0%, rgb(248, 156, 42) 100%);
		--yellow: #ffc600;
	}

	:global(body) {
		background-color: var(--background);
		color: var(--color);
		margin: 0;
		min-height: 100vh;
	}

	main {
		/* remove borders at top and bottom of mobile screens */
		border: 0.1px solid transparent;
		max-width: 700px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		padding-inline: 1rem;
		margin: auto;
	}

	:global(*) {
		scroll-behavior: smooth;
	}

	:global(*:focus) {
		outline: 2px solid var(--yellow);
		border-radius: 0.1rem;
	}

	:global(*::selection) {
		background: var(--yellow);
		color: var(--background);
	}

	:global(a) {
		color: var(--contrast);
	}

	:global(a:hover) {
		color: var(--yellow);
	}
	
	:global(h1, h2, h3) {
		color: var(--contrast);
	}

	:global(h2:hover, h3:hover) {
		color: var(--yellow);
	}

	:global(img, iframe, button) {
		user-select: none;
	}

	:global(textarea, input) {
		background-color: var(--background);
		color: var(--color);
		border: 2px solid var(--color);
		border-radius: 0.5rem;
	}

	:global(textarea:hover, input:hover) {
		border-color: var(--yellow);
	}

	:global(button) {
		background-color: var(--background);
		color: var(--contrast);
		border-radius: 1rem;
		font-size: 1.2rem;
		font-weight: bold;
		margin-block: 1rem;
		cursor: pointer;
		border: none;
	}

	:global(button:hover) {
		text-decoration: underline;
		color: var(--yellow);
	}

	:global(code) {
		background-color: gainsboro;
		color: var(--background);
		padding: 0.2rem;
		border-radius: 0.25rem;
	}

	/* scroll bar */
	::-webkit-scrollbar {
		width: 10px;
		border-radius: 0;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border: 5px solid var(--textLight);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--yellow);
		border-radius: 1rem;
	}

	@media only screen and (min-width: 2000px) {
		:global(*) {
			font-size: 24px;
		}
		body {
			max-width: 1000px;
		}
	}

	@media only screen and (min-width: 2560px) {
		:global(*) {
			font-size: 32px;
		}

		body {
			max-width: 1200px;
		}
	}
</style>
