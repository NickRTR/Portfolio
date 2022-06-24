<script>
    import Heading from "$lib/components/Heading.svelte";

    export let posts;

    let filter = "";
    let filteredPosts = posts;

    function filterPosts() {
        filteredPosts = [];
        for (let i in posts) {
            let post = posts[i];
            if (post.title.toLowerCase().startsWith(filter.toLowerCase())) {
                filteredPosts = [...filteredPosts, post];
            }
        }

        // more wider search if no fitting post was found
        if (filteredPosts.length === 0) {
            for (let i in posts) {
                let post = posts[i];
                if (post.title.toLowerCase().includes(filter.toLocaleLowerCase())) {
                    filteredPosts = [...filteredPosts, post];
                }
            }
        }
    }
</script>

<svelte:head>
    <title>Nick Reutlinger - Blog</title>
</svelte:head>

<!-- TODO: Revise Blog Post overview -->

<main>
    <header>
        <Heading text={["Blog"]} />
        <input type="text" placeholder="filter" bind:value={filter} on:input={filterPosts}>
    </header>

    {#if posts instanceof Array}
        <div class="cardGrid">
            {#each filteredPosts as post}
                <div class="card">
                    <h2><a href={"/blog/" + post.number} rel="canonical" sveltekit:prefetch>{post.title}</a></h2>
                </div>
            {/each}
        </div>
    {:else}
        {posts.message}
    {/if}
</main>

<style>
    header {
        text-align: center;
    }

    input {
        margin-top: 1rem;
    }
    
    h2 {
        margin-block: 1rem;
        line-height: 2.5rem;
    }

    .cardGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .card {
        margin: 1rem;
        height: 20%;
        background-color: red;
    }
</style>