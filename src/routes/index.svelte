<script>
    import Heading from "$lib/components/Heading.svelte";    
    import Uses from "$lib/components/Uses.svelte";
</script>

<main>
    <article id="about">
        <Heading lines={["Hi, I'm Nick", "Reutlinger"]}/> 
        <p>
            I'm a self thaught software engineer at the age of 16, located in Germany.<br>
            For the most part, I'm developing Web Apps with Sveltekit and Javascript. Additionally I'm interested in anything that has to do with tech.
        </p>
    </article>
    <Uses />
    <Uses />
</main>

<style>
    article {
        font-size: 1.2rem;
    }
</style>