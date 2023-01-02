<script>
	export let weather;
</script>

<footer>
	<hr />
	<nav>
		<a href="/" title="Home" data-sveltekit-prefetch>Home</a>
		<a href="/work" title="Work" data-sveltekit-prefetch>Work</a>
		<a href="/uses" title="Uses" data-sveltekit-prefetch>Uses</a>
		<a href="/skills" title="Skills" data-sveltekit-prefetch>Skills</a>
		<a href="/contact" title="Contact" data-sveltekit-prefetch>Contact</a>
		<a href="https://blog.nickreutlinger.de" title="Blog">Blog</a>
	</nav>
	<section>
		<p>©2023 Nick Reutlinger 🚀</p>
		<p>
			Germany, Stuttgart
			{#if weather}
				{Math.round(weather.current.temp_c)}°C / {Math.round(weather.current.temp_f)}°F
			{/if}
		</p>
	</section>
</footer>

<style>
	hr {
		margin-top: 2rem;
		height: 1px;
		background-color: var(--color);
		border: none;
	}

	nav {
		display: flex;
		flex-direction: column;
		line-height: 2rem;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	section {
		display: flex;
		justify-content: space-between;
	}

	p {
		margin-top: 1rem;
	}

	@media only screen and (max-width: 500px) {
		section {
			flex-direction: column-reverse;
			flex-wrap: nowrap;
		}

		section p {
			margin: 0.3rem 0;
		}
	}
</style>
