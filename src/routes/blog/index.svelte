<script>
    import Heading from "$lib/components/Heading.svelte";

    export let posts;
</script>

<svelte:head>
    <title>Nick Reutlinger - Blog</title>
</svelte:head>

<main>
    <Heading text={["Blog"]} />

    {#if posts instanceof Array}
        {#each posts as post}
            <h1><a href={"/blog/" + post.number} rel="canonical" sveltekit:prefetch>{post.title}</a></h1>
        {/each}
    {:else}
        {posts.message}
    {/if}
</main>