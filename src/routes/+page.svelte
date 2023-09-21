<script>
	import About from "$lib/components/About.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Badge from "$lib/components/Badge.svelte";
	import Header from "$lib/components/Header.svelte";

	import { theme } from "$lib/stores";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Portfolio</title>
</svelte:head>

<main>
	<Header title="Nick Reutlinger - " highlight="Portfolio" />

	<div class="badges">
		<a href="https://go.dev/" target="_blank"><Badge url="https://img.shields.io/badge/go-00ADD8?style=for-the-badge&logo=go&logoColor=FFFFFF" alt="Go" /></a>
		<a href="https://de.wikipedia.org/wiki/JavaScript" target="_blank"><Badge url="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=000000" alt="Javascript" /></a>
		<a href="https://svelte.dev" target="_blank"><Badge url="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=Svelte&logoColor=FFFFFF" alt="Svelte" /></a>
		<a href="https://supabase.com" target="_blank"><Badge url="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=Supabase&logoColor=000000" alt="Supabase" /></a>
		<a href="https://bun.sh" target="_blank"><Badge url="https://img.shields.io/badge/bun-FFFFFF?style=for-the-badge&logo=bun&logoColor=000000" alt="Bun" /></a>
	</div>

	<Heading text={["Hi, I'm Nick", "Reutlinger 👋"]} />

	<article>
		<img class="me" src="/me.jpg" alt="Myself" title="A picture of myself" />
		<aside>
			<About content={data.aboutPreview.about.text.html} />
			<div class="socialLinks">
				<a class="noYellowUnderline socialLink" href="https://twitter.com/nick_reutlinger" target="_blank"><img src="/social/twitter_{$theme}.svg" alt="twitter" title="twitter" /></a>
				<a class="noYellowUnderline socialLink" href="https://www.linkedin.com/in/nick-reutlinger-9a89ab236/" target="_blank"><img src="/social/linkedin_{$theme}.svg" alt="linkedin" title="linkedin" /></a>
				<a class="noYellowUnderline socialLink" href="https://github.com/NickRTR" target="_blank"><img src="/social/github_{$theme}.svg" alt="github" title="github" /></a>
				<a class="noYellowUnderline socialLink" href="https://stackoverflow.com/users/17878912/nickrtr" target="_blank"><img src="/social/stackoverflow_{$theme}.svg" alt="stackoverflow" title="stackoverflow" /></a>
			</div>
		</aside>
	</article>
</main>

<style>
	.badges {
		margin-top: -0.25rem;
		margin-bottom: 2rem;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	article {
		margin-top: 2rem;
		display: flex;
		align-items: center;
	}

	aside {
		margin-left: 1.5rem;
	}

	.me {
		background: var(--gradient);
		border-radius: 50%;
		padding: 0.5rem;
		height: 225px;
		width: 225px;
		transition: transform 0.75s ease;
	}

	.me:hover {
		transform: rotate(20deg);
	}

	.socialLinks {
		user-select: none;
	}

	.socialLink {
		outline: none;
	}

	.socialLink img {
		width: 2rem;
		height: 2rem;
		padding: 0.5rem;
		border-radius: 1rem;
		background: var(--color);
		transition: all 0.2s ease-in;
	}

	:global(svg) {
		-webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
		filter: invert(100%);
	}

	.socialLink:hover img,
	.socialLink:focus img {
		background: var(--accent);
	}

	@media only screen and (max-width: 700px) {
		article {
			flex-direction: column;
		}

		article img {
			margin-bottom: 0.75rem;
		}

		aside {
			margin: 0;
		}
	}
</style>
