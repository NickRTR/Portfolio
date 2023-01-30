<body>
	<slot />
</body>

<style>
	:global(*) {
		background-color: #000000;
		color: #ffffff;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
		Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	
	body {
		margin: 0;
	}

	:global(:root) {
		--text: #ffffff;
		--background: #000000;
		--accent: #0091FF;
	}
</style>
