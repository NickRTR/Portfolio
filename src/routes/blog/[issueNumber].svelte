<script>
    import SvelteMarkdown from "svelte-markdown";

    export let post;
</script>

<main>   
    <h1>{post.title}</h1>

    <hr>

    <SvelteMarkdown source={post.body} />
</main>