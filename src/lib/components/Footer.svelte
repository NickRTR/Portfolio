<script>
    export let weather;
</script>

<main>
    <footer>
        <p>©2022, Nick Reutlinger</p>
        <p>📍Germany, Stuttgart
            {#if weather}
                 {Math.round(weather.current.temp_c)}°C / {Math.round(weather.current.temp_f)}°F
            {/if}
        </p>
    </footer>
</main>

<style>
    footer {
        background-color: var(--yellow);
        padding: .6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;
    }

    footer p {
        margin: 0;
        line-height: 1.3rem;
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