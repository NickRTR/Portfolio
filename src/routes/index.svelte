<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<main>
    <article id="about">
        <Heading text={["Hi, I'm Nick", "Reutlinger"]}/> 
        <section>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/me.jpg" alt="A picture of myself" title="A picture of myself">
            <p>
                I'm a self-thaught software engineer at the age of 16, located in Germany.<br>For the most part, I'm developing Web Apps with Sveltekit and Javascript. Additionally, I'm interested in anything that has to do with tech.
            </p>
        </section>
    </article>
</main>

<style>
    section {
        font-size: 1.3rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }
    
    img {
        height: 175px;
        border-radius: 100%;
        margin-right: 1rem;
        border: 5px solid var(--yellow);
        user-select: none;
    }

    p::selection, br::selection {
        background-color: var(--yellow);
    }
    
    @media only screen and (max-width: 600px) {
        section {
            flex-direction: column;
        }
    }
</style>