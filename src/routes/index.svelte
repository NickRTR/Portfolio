<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<svelte:head>
    <title>Nick Reutlinger</title>
</svelte:head>

<main>
    <section>
        <Heading text={["Hi, I'm Nick", "Reutlinger"]}/> 
        <article>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img class="noUnderline" id="me" src="/me.jpg" alt="A picture of myself" title="A picture of myself">
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
    
    @media only screen and (max-width: 600px) {
        article {
            flex-direction: column;
        }
    }
</style>