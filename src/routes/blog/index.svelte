<script>
    import Heading from "$lib/components/Heading.svelte";

    export let posts;
</script>

<main>
    <Heading text={["Blog"]} />

    {#each posts as post}
        <h1><a href={"/blog/" + post.number} sveltekit:prefetch>{post.title}</a></h1>
    {/each}
</main>