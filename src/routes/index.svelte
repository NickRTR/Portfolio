<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<main>
    <article id="About">
        <Heading lines={["Hi, I'm Nick", "Reutlinger"]}/> 
        <p>
            I'm a self thaught software engineer at the age of 16, located in Germany.<br>
            For the most part, I'm developing Web Apps with Sveltekit and Javascript. Additionally I'm interested in anything that has to do with tech.
        </p>
    </article>
    <article id="uses">
        <Heading lines={["/uses"]}/> 
        <ul>
            <li>Laptop: Lenovo Legion 5 (Ryzen 5 5600h, RTX 3060)</li>
            <li>Keyboard: Keychron K8</li>
            <li>Mouse: Razer Mamba Wireless</li>
            <li>Table: Ikea</li>
            <li>Chair: Autonomous ErgoChair Core</li>
            <li>Headset: SPC Gear Viro Plus</li>
        </ul>
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