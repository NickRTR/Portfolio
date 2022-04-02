<script>
    export let weather;
</script>

<main>
    <footer>
        <p>©2022, Nick Reutlinger</p>
        <p>📍Germany, Stuttgart {weather.current.temp_c} °C</p>
    </footer>
</main>

<style>
    footer {
        background-color: var(--yellow);
        padding: .9rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    footer p {
        margin: 0;
    }
</style>