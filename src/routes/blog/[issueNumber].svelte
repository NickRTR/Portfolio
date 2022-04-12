<script>
    import SvelteMarkdown from "svelte-markdown";

    export let post;
</script>

<main>   
    <h1>{post.title}</h1>

    <hr>

    <SvelteMarkdown source={post.body} />
</main>

<style>
    hr {
        height: 3px;
        border: none;
        background-color: var(--yellow);
    }

    :global(h2) {
        border-bottom: 3px solid var(--yellow);
    }
</style>