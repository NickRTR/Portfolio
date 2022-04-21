<script>
    import Heading from "$lib/components/Heading.svelte";    
    import { browser } from "$app/env";
    import { fade } from "svelte/transition";

    let showLoader = true;

    // min loading time
    setTimeout(() => {
        // Remove loader if page is loaded AND minimum loading time is over 
        if (browser) showLoader = false;
    }, 500)
</script>

<svelte:head>
    <title>Nick Reutlinger</title>
</svelte:head>

<main>
    {#if showLoader}
        <div class="loader" transition:fade></div>
    {/if}

    <section>
        <Heading text={["Hi, I'm Nick", "Reutlinger"]}/> 
        <article>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img class="noUnderline" id="me" src="/me.jpg" alt="A piture of myself" title="A picture of myself">
            <aside>
                <p>
                    I'm a self-taught software engineer at the age of 16, located in <mark>Germany</mark>.<br>For the most part, I'm developing Web Apps with <mark>Sveltekit</mark> and <mark>Javascript</mark>. Additionally, I'm interested in anything that has to do with <mark>tech</mark>.
                </p>
                <div class="links">
                    <a class="noUnderline" href="https://twitter.com/nickrtrrtr" target="_blank"><img class="socialLink" src="/social/twitter.svg" alt="twitter" title="twitter"></a>
                    <a class="noUnderline" href="https://www.linkedin.com/in/nick-reutlinger-9a89ab236/" target="_blank"><img class="socialLink" src="/social/linkedin.svg" alt="linkedin" title="linkedin"></a>
                    <a class="noUnderline" href="https://github.com/NickRTR" target="_blank"><img class="socialLink" src="/social/github.svg" alt="github" title="github"></a>
                    <a class="noUnderline" href="https://stackoverflow.com/users/17878912/nickrtr" target="_blank"><img class="socialLink" src="/social/stackoverflow.svg" alt="stackoverflow" title="stackoverflow"></a>
                </div>
            </aside>
        </article>
    </section>
    <div class="pageLinks">
        <h2>More about me...</h2>
        <ul>
            <li><a href="/uses" sveltekit:prefetch>What am I using?</a></li>
            <li><a href="/work" sveltekit:prefetch>What is my work?</a></li>
            <li><a href="/blog" sveltekit:prefetch>What am I interested in?</a></li>
            <li><a href="/contact" sveltekit:prefetch>Contact me!</a></li>
        </ul>
    </div>
</main>

<style>
    article {
        font-size: 1.2rem;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
    }

    img {
        user-select: none;
    }
    
    #me {
        height: 200px;
        border-radius: 100%;
        margin-right: 1rem;
        border: 5px solid var(--yellow);
    }
    
    p {
        margin-bottom: .5rem;
    }

    .socialLink {
        width: 2rem;
        background-color: var(--yellow);
        padding: .5rem;
        border-radius: 1rem;
    }

    .links {
        user-select: none;
    }

    .links a:hover, a:focus {
        outline: none;
        opacity: .75;
    }

    h2 {
        border: none !important;
        margin-bottom: -.5rem;
    }
    
    /* loader */

    .loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--textDark);
        z-index: 10;
	}

	.loader::after, .loader img::after {
		content: "";
        background-image: url("/me.jpg");
        background-size: contain;
		width: 15rem;
		height: 15rem;
        border: 1rem solid var(--yellow);
		border-radius: 50%;
		animation: loading 2s ease infinite;
	}

	@keyframes loading {
		from {
			transform: rotate(0turn);
		}
		to {
			transform: rotate(1turn);
		}
	}

    @media only screen and (max-width: 600px) {
        article {
            flex-direction: column;
        }
    }
</style>