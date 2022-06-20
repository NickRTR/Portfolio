<script>
    import Heading from "$lib/components/Heading.svelte";
</script>

<svelte:head>
    <title>Nick Reutlinger - Work</title>
</svelte:head>

<main>
    <Heading text={["Work"]} />

    <ul>
        <li><a href="/work/Profile-Badge-Generator" sveltekit:prefetch title="-> Profile Badge Generator">Profile Badge Generator</a></li>
            <ul><li>A website to generate brand badges for your profile.</li></ul>
        <li><a href="/work/Mikki" sveltekit:prefetch title="-> Mikki">Mikki</a></li>
            <ul><li>An assembler wiki created in SvelteKit</li></ul>
        <li><a href="/work/WeatherWatch" sveltekit:prefetch title="-> WeatherWatch">WeatherWatch</a></li>
            <ul><li>Weather forecast and daily advice</li></ul>
        <li><a href="/work/Schoppy" sveltekit:prefetch title="-> Schoppy">Schoppy</a></li>
            <ul><li>A simple yet powerful shopping list with themes, quantity, category icons, multiply languages and much more.</li></ul>
        <li><a href="/work/Carify" sveltekit:prefetch title="-> Carify">Carify</a></li>
            <ul><li>Identify the origin of any car owner, in Germany and Austria, by the car's number plate.</li></ul>
    </ul>
</main> 

<style>
    main {
        font-size: 1.2rem;
    }

    ul {
        margin: .25rem 0;
    }
</style>