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
		background-color: transparent;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
			Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		background-color: var(--background);
		/* background-image: url("background1.jpg");
		background-size: cover; */
	}

	:global(a:hover, a:focus) {
		color: var(--accent);
	}

	:global(main) {
		margin-top: 10vh;
	}

	:global(:root) {
		--text: white;
		--background: black;
		--accent: #ffff00;
		--accent: #00ff15;
	}
</style>
