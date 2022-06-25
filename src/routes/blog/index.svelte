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

<main>
    <header>
        <Heading text={["Blog"]} />
        <input type="text" placeholder="filter" bind:value={filter} on:input={filterPosts}>
    </header>

    <div class="divider"></div>

    {#if posts instanceof Array}
        <div class="cardGrid">
            {#each filteredPosts as post}
                <div class="card">
                    <p>{`${new Date(post.created_at).getDate()}.${new Date(post.created_at).getMonth()}.${new Date(post.created_at).getFullYear()}`}</p>
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

    .divider {
        height: 10px;
        border-radius: 2rem;
        width: 100%;
        background: linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);
    }

    input {
        margin-block: 1rem;
        border-radius: 5px;
        outline: none;
        border: 2px solid var(--textDark);
        padding: .25rem .5rem;
        font-size: 1rem;
        transition: .1s ease-in-out;
    }

    input:focus, input:hover {
        border: 2px solid var(--yellow);
    }

    .cardGrid {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    @media only screen and (max-width: 550px) {
        .cardGrid {
            grid-template-columns: 1fr;
        }
    }

    .card {
        border: 5px solid var(--yellow);
        border-radius: 1rem;
        text-align: center;
    }
    
    .card p {
        padding-inline: .5rem;
        background-color: var(--yellow);
        margin: 0;
    }

    .card h2 {
        word-break: keep-all;
        border-bottom: none;
        font-size: 1.25rem;
        margin-inline: .5rem;
    }
</style>