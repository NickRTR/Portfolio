<script>
	import { page } from "$app/stores";
	import { slide } from "svelte/transition";

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
		<a class="noYellowUnderline" id="title" tabindex="-1" href="/" sveltekit:prefetch>Nick Reutlinger</a>
		{#if innerWidth >= 900}
			<div class="links">
				{#each nav as link}
					<a class="noYellowUnderline" rel="canonical" href={link.path} sveltekit:prefetch class:active={$page.url.pathname === link.path || ($page.url.pathname.includes("/work") && link.path === "/work")} title={"-> " + link.title}>{link.title}</a>
				{/each}
			</div>
		{:else}
			<input type="checkbox" id="toggle" bind:checked={showHamburger} />
			<label for="toggle"><img src="/menu.svg" alt="Menu" /></label>
		{/if}
	</nav>
	{#if showHamburger && innerWidth < 900}
		<div class="hamburger" transition:slide>
			{#each nav as link}
				<a
					class="noYellowUnderline"
					href={link.path}
					class:active={$page.url.pathname === link.path || ($page.url.pathname.includes("/work") && link.path === "/work")}
					sveltekit:prefetch
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
		padding: 1rem;
	}

	#title {
		font-size: 1.8rem;
		margin: 0;
	}

	.links {
		display: flex;
	}

	a {
		text-decoration: none;
		font-size: 1.5rem;
		margin: 0 0.5rem;
		outline: none;
		user-select: none;
		transition: linear 0.125s;
	}

	.links a:hover,
	a:not(#title):focus {
		border-bottom: 4px solid var(--blue);
	}

	.active {
		border-bottom: 4px solid var(--yellow) !important;
	}

	/* Hamburger */

	img {
		width: 3rem;
		margin-bottom: -1rem;
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
		padding-left: 1rem;
		padding-bottom: 0.5rem;
	}

	.hamburger a {
		line-height: 2.5rem;
		margin: 0;
	}
</style>
