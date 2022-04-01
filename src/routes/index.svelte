<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<main>
    <article id="about">
        <Heading lines={["Hi, I'm Nick", "Reutlinger"]}/> 
        <p>
            I'm a self thaught software engineer at the age of 16, located in Germany.<br>
            For the most part, I'm developing Web Apps with Sveltekit and Javascript. Additionally I'm interested in anything that has to do with tech.
        </p>
    </article>
    <article id="uses">
        <Heading lines={["uses"]}/> 
        <ul>
            <li>Laptop: <a href="https://www.lenovo.com/us/en/laptops/legion-laptops/legion-5-series/c/legion-5-series" target="_blank">Lenovo Legion 5</a> (Ryzen 5 5600h, RTX 3060)</li>
            <li>Keyboard: <a href="https://www.keychron.com/pages/keychron-k8-wireless-mechanical-keyboard" target="_blank">Keychron K8</a></li>
            <li>Mouse: <a href="https://www.razer.com/gaming-mice/razer-mamba-wireless/RZ01-02710100-R3U1" target="_blank">Razer Mamba Wireless</a></li>
            <li>Table: <a href="https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-s69416817/" target="_blank">Ikea</a></li>
            <li>Chair: <a href="https://www.autonomous.ai/office-chairs/ergochair-core" target="_blank">Autonomous ErgoChair Core</a></li>
            <li>Headset: <a href="https://spcgear.com/en/product/viro-plus/" target="_blank">SPC Gear Viro Plus</a></li>
        </ul>
    </article>
</main>

<style>
    article {
        font-size: 1.2rem;
    }

    ul {
        padding-left: 1.1rem;
    }

    li a {
        border-bottom: 3px solid var(--yellow);
        text-decoration: none;
        color: black;
    }
</style>