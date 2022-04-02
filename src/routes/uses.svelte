<script>
    import Heading from "$lib/components/Heading.svelte";    
</script>

<main>
    <article id="uses">
        <Heading text={["uses"]}/> 
        <ul>
            <li>Laptop: <a href="https://www.lenovo.com/us/en/laptops/legion-laptops/legion-5-series/c/legion-5-series" target="_blank">Lenovo Legion 5</a> (Ryzen 5 5600h, RTX 3060)</li>
            <li>Monitor: <a href="https://deals.dell.com/en-us/productdetail/doqt" target="_blank">Dell S2421HS</a> (Full HD, 75hz)</li>
            <li>Mounting: <a href="https://www.amazon.com/HUANUO-Halterung-Volleinstellbar-Bildschirm-Montageoptionen-Schwarz/dp/B07DWM9WNM/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=THAM7W58KBPC&keywords=huanuo+laptop+stand&qid=1648897804&sprefix=huano+laptop+stan%2Caps%2C131&sr=8-5" target="_blank">Huanuo Monitor + Laptop Arm</a></li>
            <li>Keyboard: <a href="https://www.keychron.com/pages/keychron-k8-wireless-mechanical-keyboard" target="_blank">Keychron K8</a></li>
            <li>Palm Rest: <a href="https://www.keychron.com/products/keychron-keyboard-wooden-palm-rest?variant=32345077186649" target="_blank">Keychron Palm Rest</a></li>
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

    li {
        margin: .2rem 0;
    }

    li a {
        border-bottom: 3px solid var(--yellow);
        text-decoration: none;
        color: black;
    }
</style>