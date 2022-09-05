<script>
	import About from "$lib/components/About.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<svelte:head>
	<title>Nick Reutlinger - Portfolio</title>
</svelte:head>

<main>
	<h1>Nick Reutlinger - <span>Portfolio</span></h1>

	<Heading text={["Hi, I'm Nick", "Reutlinger 👋"]} />

	<article>
		<img class="me" src="/me.jpg" alt="A piture of myself" title="A picture of myself" />
		<aside>
			<About />
			<div class="socialLinks">
				<a class="noYellowUnderline socialLink" href="https://twitter.com/nickrtrrtr" target="_blank"><img src="/social/twitter.svg" alt="twitter" title="twitter" /></a>
				<a class="noYellowUnderline socialLink" href="https://www.linkedin.com/in/nick-reutlinger-9a89ab236/" target="_blank"><img src="/social/linkedin.svg" alt="linkedin" title="linkedin" /></a>
				<a class="noYellowUnderline socialLink" href="https://github.com/NickRTR" target="_blank"><img src="/social/github.svg" alt="github" title="github" /></a>
				<a class="noYellowUnderline socialLink" href="https://stackoverflow.com/users/17878912/nickrtr" target="_blank"><img src="/social/stackoverflow.svg" alt="stackoverflow" title="stackoverflow" /></a>
				<!-- <a class="noYellowUnderline socialLink" href="https://www.twitch.tv/nickrtr" target="_blank"><img src="/social/twitch.svg" alt="twitch" title="twitch"></a> -->
			</div>
		</aside>
	</article>
</main>

<style>
	h1 {
		margin-top: 0.5rem;
	}

	span {
		color: var(--yellow);
	}

	article {
		margin-top: 1.5rem;
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
		transition: 1.5s ease;
	}

	.me:hover {
		transform: rotate(360deg);
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
</style>
