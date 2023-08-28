<nav>
	<a href="/" title="Home">Home</a>
	<a href="/work" title="Work">Work</a>
	<a href="/skills" title="Skills">Skills</a>
	<a href="/uses" title="Uses">Uses</a>
	<a
		style="grid-column-start: 2"
		href="https://blog.nickreutlinger.de"
		title="Blog -> https://blog.nickreutlinger.de">Blog</a
	>
	<a href="/contact" title="Contact">Contact</a>
</nav>

<style>
	nav {
		position: absolute;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		height: 10vh;
	}

	nav a {
		font-size: 1.2rem;
		text-decoration-color: transparent;
		user-select: none;
		font-weight: bold;
	}

	nav a:hover {
		text-decoration-color: var(--accent);
	}

	@media only screen and (max-width: 600px) {
		nav {
			padding-top: 1rem;
			text-align: center;
			margin: auto;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 0;
		}
	}
</style>
