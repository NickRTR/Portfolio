<script>
    import Heading from "$lib/components/Heading.svelte";
</script>

<main>
    <Heading text={["Work"]} />

    <ul>
        <li><a class="linkUnderline" href="/work/Mikki" sveltekit:prefetch title="Mikki">Mikki</a></li>
            <ul><li>An assembler wiki created in SvelteKit</li></ul>
        <li><a class="linkUnderline" href="/work/WeatherWatch" sveltekit:prefetch title="WeatherWatch">WeatherWatch</a></li>
            <ul><li>Weather forecast and daily advice</li></ul>
        <li><a class="linkUnderline" href="/work/Schoppy" sveltekit:prefetch title="Schoppy">Schoppy</a></li>
            <ul><li>A simple yet powerful shopping list with themes, quantity, category icons, multiply languages and much more.</li></ul>
        <li><a class="linkUnderline" href="/work/Carify" sveltekit:prefetch title="Carify">Carify</a></li>
            <ul><li>Identify the origin of any car owner, in Germany and Austria, by its number plate.</li></ul>
    </ul>
</main> 

<style>
    main {
        font-size: 1.2rem;
        text-align: left;
    }

    ul {
        margin: .5rem 0;
    }

    ul *::selection {
        background-color: var(--yellow);
    }
</style>