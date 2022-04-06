<script>
    export let weather;
</script>

<main>
    <footer>
        <p>©2022, Nick Reutlinger</p>
        <p>📍Germany, Stuttgart
            {#if weather}
                 {Math.round(weather.current.temp_c)}°C / {Math.round(weather.current.temp_f)}F
            {/if}
        </p>
    </footer>
</main>

<style>
    footer {
        border-top: 5px solid var(--yellow);
        padding: .6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    footer p {
        margin: 0;
    }

    @media only screen and (max-width: 450px) {
        footer {
            flex-direction: column;
        }

        footer p {
            margin: .1rem 0;
        }
    }
</style>