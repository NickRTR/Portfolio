<script>
	import { browser } from "$app/environment";
	import { fade } from "svelte/transition";
	import { showLoader } from "$lib/stores";
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";

	export let data;

	// min loading time
	setTimeout(() => {
		// Remove loader if page is loaded AND minimum loading time is over
		if (browser) $showLoader = false;
	}, 750);
</script>

<svelte:head>
	<title>Nick Reutlinger - Portfolio</title>
</svelte:head>

<body>
	{#if $showLoader}
		<div class="loader" transition:fade />
	{:else}
		<Nav />

		<main><slot /></main>

		<Footer weather={data.weather} />
	{/if}
</body>

<style>
	body {
		border: 0.1px solid transparent;
		max-width: 700px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		padding-inline: 0.5rem;
		background-color: var(--background);
		color: var(--color);
		margin: auto;
	}

	:global(*) {
		scroll-behavior: smooth;
	}

	:global(:root) {
		--background: #04151f;
		--color: #c8c8c8;
		--contrast: white;
		--grey: grey;
		--yellow: #ffc600;
		--gradient: linear-gradient(90deg, rgb(255, 15, 123) 0%, rgb(248, 156, 42) 100%);
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
		text-decoration: none;
	}

	:global(a:hover) {
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
	}

	:global(button:hover) {
		text-decoration: underline;
		color: var(--yellow);
	}

	:global(mark) {
		background-color: var(--yellow);
	}

	:global(code) {
		background-color: gainsboro;
		padding: 0.2rem;
		border-radius: 0.25rem;
	}

	:global(img) {
		user-select: none;
	}

	/* loader */

	.loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--textLight);
		z-index: 10;
	}

	.loader::after {
		content: "";
		background-image: url("/me.jpg");
		background-size: contain;
		width: 15rem;
		height: 15rem;
		border: 1rem solid var(--yellow);
		border-radius: 50%;
		animation: loading 2.25s ease infinite;
	}

	@keyframes loading {
		from {
			transform: rotate(0turn);
		}
		to {
			transform: rotate(1turn);
		}
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
