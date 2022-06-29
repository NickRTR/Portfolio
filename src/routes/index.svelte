<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<svelte:head>
    <title>Nick Reutlinger - Portfolio</title>
</svelte:head>

<main>
    <section>
        <Heading text={["Hi, I'm Nick", "Reutlinger"]}/> 
        <article>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img class="me" src="/me.jpg" alt="A piture of myself" title="A picture of myself">
            <aside>
                <p>
                    I'm a self-taught software engineer at the age of 16, located in <mark>Germany</mark>.<br>For the most part, I'm developing Web Apps with <mark>Sveltekit</mark> and <mark>Javascript</mark>. Additionally, I'm interested in anything that has to do with <mark>tech</mark>.
                </p>
                <div class="socialLinks">
                    <a class="noYellowUnderline socialLink" href="https://twitter.com/nickrtrrtr" target="_blank"><img src="/social/twitter.svg" alt="twitter" title="twitter"></a>
                    <a class="noYellowUnderline socialLink" href="https://www.linkedin.com/in/nick-reutlinger-9a89ab236/" target="_blank"><img src="/social/linkedin.svg" alt="linkedin" title="linkedin"></a>
                    <a class="noYellowUnderline socialLink" href="https://github.com/NickRTR" target="_blank"><img src="/social/github.svg" alt="github" title="github"></a>
                    <a class="noYellowUnderline socialLink" href="https://stackoverflow.com/users/17878912/nickrtr" target="_blank"><img src="/social/stackoverflow.svg" alt="stackoverflow" title="stackoverflow"></a>
                    <a class="noYellowUnderline socialLink" href="https://www.twitch.tv/nickrtr" target="_blank"><img src="/social/twitch.svg" alt="twitch" title="twitch"></a>
                </div>
            </aside>
        </article>
    </section>
    <section class="bottom">
        <div class="pageLinks">
            <h2>More about me...</h2>
            <ul>
                <li><a href="/work" rel="canonical" sveltekit:prefetch>What am I working on?</a></li>
                <li><a href="/uses" rel="canonical" sveltekit:prefetch>What am I using?</a></li>
                <li><a href="/skills" rel="canonical" sveltekit:prefetch>What are my skills?</a></li>
                <li><a href="/blog" rel="canonical" sveltekit:prefetch>What am I interested in?</a></li>
                <li><a href="/contact" rel="canonical" sveltekit:prefetch>Contact me!</a></li>
            </ul>
        </div>
        
        <!-- <aside>
            <img class="me" src="/me2.jpg" alt="A piture of myself" title="A picture of myself">
        </aside> -->
    </section>
</main>

<style>
    article {
        font-size: 1.2rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }

    img {
        user-select: none;
    }
    
    .me {
        height: 200px;
        width: 200px;
        border-radius: 100%;
        margin-right: 1.5rem;
        border: 5px solid var(--yellow);
        transition: 1.5s ease;
    }

    .me:hover {
        transform: rotate(360deg);
    }
    
    p {
        margin-bottom: .5rem;
    }

    .socialLinks {
        user-select: none;
    }
    
    .socialLink {
        outline: none;
    }

    .socialLink img  {
        width: 2rem;
        background-color: var(--yellow);
        padding: .5rem;
        border-radius: 1rem;
        transition: .25s;
        outline: none;
    }
    
    .socialLink:hover img, .socialLink:focus img {
        background-color: var(--blue);
    }

    .bottom {
        margin-top: 2rem;
    }

    .bottom h2 {
        margin: 0;
    }
    
    .pageLinks a {
        transition: all .2s linear;
        user-select: none;
    }

    .pageLinks a:hover, .pageLinks a:focus {
        outline: none;
        border-color: var(--blue);
    }

    @media only screen and (max-width: 600px) {
        article {
            flex-direction: column;
        }

        /* .bottom img {
            display: none;
        } */
    }
</style>