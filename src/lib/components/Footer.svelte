<script>
    export let weather;
</script>

<main>
    <footer>
        <p>Germany, Stuttgart</p>
        <p>©2022, Nick Reutlinger</p>
    <p>{weather.current.temp_c} °C</p>
    </footer>
</main>

<style>
    footer {
        background-color: var(--yellow);
        padding: 1rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    footer p {
        margin: 0;
    }
</style>