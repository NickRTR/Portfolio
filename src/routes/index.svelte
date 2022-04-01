<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<main>
    <article>
        <Heading lines={["Hi, I'm Nick", "Reutlinger"]}/> 
        <p>
            I'm a self thaught software engineer at the age of 16, located in Germany.<br>
            For the most part, I'm developing Web Apps with Sveltekit and Javascript. Additionally I'm interested in anything that has to do with tech.
        </p>
    </article>
</main>

<style>
    article {
        max-width: 400px;
        margin: auto;
        margin-top: 2rem;
    }

    article p {
        font-size: 1.2rem;
    }
</style>