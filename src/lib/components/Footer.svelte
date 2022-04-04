<script>
    export let weather;
</script>

<main>
    <footer>
        <p>©2022, Nick Reutlinger</p>
        {#if weather}
            <p>📍Germany, Stuttgart {Math.round(weather.current.temp_c)}°C / {Math.round(weather.current.temp_f)}F</p>
        {:else}
            <p>📍Germany, Stuttgart</p>
        {/if}
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

    @media only screen and (max-width: 450px) {
        footer {
            flex-direction: column;
        }

        footer p {
            margin: .1rem 0;
        }
    }
</style>