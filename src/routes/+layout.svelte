<script>
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { browser } from "$app/environment";
	import { fade } from "svelte/transition";
	import { showLoader } from "$lib/stores";

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
	* {
		margin: 0;
		font-family: "Work Sans", sans-serif;
		font-weight: bold;
		color: var(--textDark);
		line-height: 1.9rem;
	}

	:global(body) {
		background-color: var(--textLight);
		background-image: radial-gradient(var(--dots) 1px, transparent 1px);
		background-size: 10px 10px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		max-width: 37.5rem;
		margin: auto;
		padding: 1rem;
	}

	/* Variables */

	:global(:root) {
		--yellow: #ffc600;
		--blue: cornflowerblue;
		--textLight: white;
		--textDark: black;
		--dots: #d2d6d9;
	}

	:global(mark) {
		background-color: var(--yellow);
	}

	:global(code) {
		background-color: gainsboro;
		padding: 0.2rem;
		border-radius: 0.25rem;
	}

	:global(*::selection) {
		background-color: var(--yellow);
	}

	:global(.border) {
		border-radius: 5px;
		outline: none;
		border: 3px solid var(--yellow);
		transition: 0.1s ease-in-out;
	}

	:global(.border:hover, .border:focus) {
		border-color: var(--blue);
	}

	:global(a) {
		color: var(--textDark);
	}

	:global(img) {
		user-select: none;
	}

	:global(a:not(.noYellowUnderline)) {
		text-decoration: none;
		border-bottom: 3px solid var(--yellow);
		padding-bottom: 0.1rem;
		position: relative;
		transition: ease-in-out 0.2s;
	}

	:global(a:not(.noYellowUnderline):hover) {
		border-bottom-color: var(--blue);
	}

	@font-face {
		font-family: "Work Sans", sans-serif;
		src: url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap") format("woff2");
		font-display: swap;
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
