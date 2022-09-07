<script>
	import About from "$lib/components/About.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Header from "../lib/components/Header.svelte";
</script>

<svelte:head>
	<title>Nick Reutlinger - Portfolio</title>
</svelte:head>

<main>
	<Header title="Nick Reutlinger - " highlight="Portfolio" />

	<div class="badges">
		<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=000000" alt="Javascript" />
		<img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=Svelte&logoColor=FFFFFF" alt="Svelte" />
		<img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=Supabase&logoColor=000000" alt="Supabase" />
		<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=FFFFFF" alt="Node.js" />
		<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=FFFFFF" alt="GitHub" />
	</div>

	<Heading text={["Hi, I'm Nick", "Reutlinger 👋"]} />

	<article>
		<img class="me" src="/me.jpg" alt="A piture of myself" title="A picture of myself" />
		<aside>
			<About />
			<div class="socialLinks">
				<a class="noYellowUnderline socialLink" href="https://twitter.com/nick_reutlinger" target="_blank"><img src="/social/twitter.svg" alt="twitter" title="twitter" /></a>
				<a class="noYellowUnderline socialLink" href="https://www.linkedin.com/in/nick-reutlinger-9a89ab236/" target="_blank"><img src="/social/linkedin.svg" alt="linkedin" title="linkedin" /></a>
				<a class="noYellowUnderline socialLink" href="https://github.com/NickRTR" target="_blank"><img src="/social/github.svg" alt="github" title="github" /></a>
				<a class="noYellowUnderline socialLink" href="https://stackoverflow.com/users/17878912/nickrtr" target="_blank"><img src="/social/stackoverflow.svg" alt="stackoverflow" title="stackoverflow" /></a>
				<!-- <a class="noYellowUnderline socialLink" href="https://www.twitch.tv/nickrtr" target="_blank"><img src="/social/twitch.svg" alt="twitch" title="twitch"></a> -->
			</div>
		</aside>
	</article>
</main>

<style>
	.badges {
		margin-bottom: 2rem;
		text-align: center;
	}

	.badges img {
		border-radius: 0.5rem;
	}

	article {
		margin-top: 2rem;
		display: flex;
		align-items: center;
	}

	aside {
		margin-left: 1rem;
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
		background: var(--contrast);
		transition: all 0.2s ease-in;
	}

	.socialLink:hover img,
	.socialLink:focus img {
		background: var(--yellow);
	}

	@media only screen and (max-width: 550px) {
		article {
			flex-direction: column;
		}
	}
</style>
