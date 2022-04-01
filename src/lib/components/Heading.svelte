<script>
    export let lines;
</script>

<main>
    <div class="container">
        {#each lines as title}
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
    }
</style>