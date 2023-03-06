<script>
	import Nav from "$lib/components/Nav.svelte";
</script>

<svelte:head>
	<title>Nick Reutlinger</title>
</svelte:head>

<body>
	<Nav />
	<slot />
</body>

<style>
	:global(*) {
		text-align: center;
		color: var(--text);
		background-color: transparent;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
			Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

		/* cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><circle cx='10' cy='10' r='8' fill='%230091FF'/></svg>"),
			auto; */
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		background-color: var(--background);
		background-image: url("background1.jpg");
		background-size: cover;
	}

	:global(:root) {
		--text: white;
		--background: black;
		--accent: #0091ff;
	}
</style>
