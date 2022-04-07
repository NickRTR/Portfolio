<script>
    import Heading from "$lib/components/Heading.svelte";
    import SvelteMarkdown from "svelte-markdown";

    export let post;
</script>

<main>
    <Heading text={["Blog"]} />
    
    <h1>{post.title}</h1>

    <hr>

    <SvelteMarkdown source={post.body} />
</main>