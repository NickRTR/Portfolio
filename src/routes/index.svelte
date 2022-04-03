<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<main>
    <article id="about">
        <Heading text={["Hi, I'm Nick", "Reutlinger"]}/> 
        <div class="content">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img id="me" src="/me.jpg" alt="A picture of myself" title="A picture of myself">
            <section>
                <p>
                    I'm a self-taught software engineer at the age of 16, located in Germany.<br>For the most part, I'm developing Web Apps with Sveltekit and Javascript. Additionally, I'm interested in anything that has to do with tech.
                </p>
                <div class="links">
                    <a href="https://twitter.com/nickrtrrtr" target="_blank"><img class="social" src="/twitter.svg" alt="twitter" title="twitter"></a>
                    <a href="https://www.linkedin.com/in/nick-reutlinger-9a89ab236/" target="_blank"><img class="social" src="/linkedin.svg" alt="linkedin" title="linkedin"></a>
                    <a href="https://github.com/NickRTR" target="_blank"><img class="social" src="/github.svg" alt="github" title="github"></a>
                    <a href="https://stackoverflow.com/users/17878912/nickrtr" target="_blank"><img class="social" src="/stackoverflow.svg" alt="stackoverflow" title="stackoverflow"></a>
                </div>
            </section>
        </div>
    </article>
</main>

<style>
    .content {
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

    .social {
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

    p {
        margin-bottom: .5rem;
    }

    *::selection {
        background-color: var(--yellow);
    }
    
    @media only screen and (max-width: 600px) {
        .content {
            flex-direction: column;
        }
    }
</style>