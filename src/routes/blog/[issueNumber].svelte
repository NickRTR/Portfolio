<script>
    import SvelteMarkdown from "svelte-markdown";

    export let post;

    let created = new Date(post.created_at);
    let edited = new Date(post.updated_at);
</script>

<main>   
    <h1>{post.title}</h1>
    <p>Created on {`${created.getDate()}.${created.getMonth()}.${created.getFullYear()}`}</p>
    <p>Edited on {`${edited.getDate()}.${edited.getMonth()}.${edited.getFullYear()}`}</p>

    <hr>

    <SvelteMarkdown source={post.body} />
</main>

<style>
    hr {
        height: 3px;
        border: none;
        background-color: var(--yellow);
    }

    h1 {
        margin-bottom: .75rem;
    }
    
    p {
        margin: 0;
        opacity: .7;
    }

    :global(h2) {
        border-bottom: 3px solid var(--yellow);
    }

    :global(a) {
        word-break: break-all;
    }

    :global(blockquote) {
        border-left: 3px solid var(--yellow);
        margin-left: 0;
        padding-left: .6rem;
    }

    :global(ul) {
        padding-left: 1.3rem;
    }
</style>