<script>
	import { page } from "$app/stores";
	import { slide } from "svelte/transition";
	import { theme, toggleTheme } from "$lib/stores";

	const nav = [
		{ title: "Home", path: "/" },
		{ title: "Work", path: "/work" },
		{ title: "Uses", path: "/uses" },
		{ title: "Skills", path: "/skills" },
		{ title: "Blog", path: "https://blog.nickreutlinger.de" },
		{ title: "Contact", path: "/contact" }
	];

	let innerWidth;
	let showHamburger = false;
</script>

<svelte:window bind:innerWidth />

<main>
	<nav>
		<a id="title" tabindex="-1" href="/" data-sveltekit-prefetch>Nick Reutlinger</a>
		{#if innerWidth >= 900}
			<div class="links">
				{#each nav as link}
					<a class="noYellowUnderline" rel="canonical" href={link.path} data-sveltekit-prefetch class:active={$page.url.pathname === link.path || ($page.url.pathname.includes("/work") && link.path === "/work")} title={"-> " + link.title}
						>{link.title}</a
					>
				{/each}
				<div class="toggleAppeareance button" title="light/dark mode">
					<input type="checkbox" name="toggleAppeareance" id="toggleAppeareance" on:change={toggleTheme} />
					<label for="toggleAppeareance">
						{#if $theme === "light"}
							<p>🌞</p>
						{:else if $theme === "dark"}
							<p>🌙</p>
						{/if}
					</label>
				</div>
			</div>
		{:else}
			<aside>
				<div class="toggleAppeareance button" title="light/dark mode">
					<input type="checkbox" name="toggleAppeareance" id="toggleAppeareance" on:change={toggleTheme} />
					<label for="toggleAppeareance">
						{#if $theme === "light"}
							<p>🌞</p>
						{:else if $theme === "dark"}
							<p>🌙</p>
						{/if}
					</label>
				</div>
				<input type="checkbox" id="toggle" bind:checked={showHamburger} />
				<label for="toggle"><img src="/menu_{$theme}.svg" alt="Menu" /></label>
			</aside>
		{/if}
	</nav>

	{#if showHamburger && innerWidth < 900}
		<div class="hamburger" transition:slide>
			{#each nav as link}
				<a
					class="noYellowUnderline"
					href={link.path}
					class:active={$page.url.pathname === link.path || ($page.url.pathname.includes("/work") && link.path === "/work")}
					data-sveltekit-prefetch
					rel="canonical"
					title={link.title}
					on:click={() => {
						showHamburger = false;
					}}>{link.title}</a
				><br />
			{/each}
		</div>
	{/if}
</main>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 1rem;
	}

	#title {
		margin: 0;
	}

	.links {
		display: flex;
		align-items: center;
	}

	a {
		font-weight: bold;
		font-size: 1.2rem;
		user-select: none;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.links a {
		margin-right: 0.5rem;
	}

	.active {
		text-decoration: underline;
	}

	aside {
		display: flex;
		align-items: center;
	}

	/* Hamburger */

	img {
		width: 2.75rem;
		height: 2.75rem;
		margin-bottom: -1rem;
		padding-bottom: 0.2rem;
		margin-top: -0.5rem;
	}

	#toggle {
		display: none;
	}

	#toggle + label {
		transition: 500ms ease all;
	}

	#toggle:checked + label {
		transform: rotate(-90deg);
		transition: 500ms ease all;
	}

	.hamburger {
		padding-left: 0.5rem;
		border-left: 4px solid var(--yellow);
	}

	.hamburger a {
		line-height: 2.5rem;
	}

	/* Theme button */

	.button input {
		display: none;
	}

	.button p {
		padding-bottom: 0.1rem;
		margin: 0;
		border-radius: 100%;
		font-size: 1.6rem;
		user-select: none;
		cursor: pointer;
	}
</style>
