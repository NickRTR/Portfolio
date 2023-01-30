<body>
	<slot />
</body>

<style>
	:global(*) {
		background-color: #000000;
		color: #ffffff;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
			Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

		cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><circle cx='10' cy='10' r='8' fill='%230091FF'/></svg>"),
			auto;
	}

	body {
		margin: 0;
	}

	:global(:root) {
		--text: #ffffff;
		--background: #000000;
		--accent: #0091ff;
	}
</style>
