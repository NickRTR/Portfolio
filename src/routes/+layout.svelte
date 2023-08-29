<script>
	import Nav from "$lib/components/Nav.svelte";
</script>

<svelte:head>
	<title>Nick Reutlinger</title>
</svelte:head>

<body>
	<Nav />
	<div class="slot"><slot /></div>
</body>

<style>
	:global(*) {
		text-align: center;
		color: var(--text);
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
			Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		background-color: var(--background);
	}

	:global(:root) {
		--text: white;
		--background: black;
		--accent: #00ff15;
		/* --accent: #ffff00; */
	}

	:global(a:hover, a:focus) {
		color: var(--accent);
	}

	:global(main) {
		margin-top: 10vh;
	}
</style>
