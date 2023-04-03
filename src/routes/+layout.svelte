<script>
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";

	export let data;

	import { theme } from "$lib/stores";

	$: color = $theme === "dark" ? "#e6e6e6" : "#2b2b2b";
	$: background = $theme === "dark" ? "#04151f" : "white";
	$: contrast = $theme === "dark" ? "white" : "black";
</script>

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
		padding-inline: 0.5rem;
		margin: auto;
	}

	:global(*) {
		scroll-behavior: smooth;
	}

	:global(*::selection) {
		background: var(--yellow);
		color: black;
	}

	:global(a) {
		outline: none !important;
		color: var(--contrast);
	}

	:global(a:hover, a:focus) {
		text-decoration: underline;
		color: var(--yellow);
	}

	:global(h1, h2, h3) {
		color: var(--contrast);
	}

	:global(img, iframe, button) {
		user-select: none;
	}

	:global(textarea, input) {
		outline: none !important;
		background-color: var(--background);
		color: var(--color);
		border: 2px solid var(--color);
		border-radius: 0.5rem;
	}

	:global(textarea:hover, input:hover, textarea:focus, input:focus) {
		border-color: var(--yellow);
		border-radius: 0.5rem;
	}

	:global(button) {
		border: none;
		background-color: var(--background);
		color: var(--contrast);
		border-radius: 1rem;
		font-size: 1.2rem;
		font-weight: bold;
		margin-block: 1rem;
		cursor: pointer;
	}

	:global(button:hover) {
		text-decoration: underline;
		color: var(--yellow);
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
</style>
