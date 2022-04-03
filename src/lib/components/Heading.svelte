<script>
    export let text;
</script>

<main>
    <div class="container">
        {#each text as title}
            <h1>{title}</h1>
        {/each}
    </div>
</main>

<style>
    main {
        text-align: center;
    }

    .container {
        background-color: var(--textDark);
        color: var(--yellow);
        transform: rotate(-5deg);
        display: inline-block;
        padding: 1rem 1.5rem;
        margin: .5rem;
    }

    h1 {
        transform: rotate(5deg);
        margin: 0;
        font-size: 2rem;
    }

    h1::selection {
        background-color: var(--yellow);
        color: var(--textDark);
    }
</style>