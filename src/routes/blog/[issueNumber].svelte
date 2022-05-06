<script>
    import SvelteMarkdown from "svelte-markdown";

    export let post;
    export let comments;

    let created = new Date(post.created_at);
    let edited = new Date(post.updated_at);

    const createDate = (time) => new Date(time);
</script>

<svelte:head>
    <title>Nick Reutlinger - Post</title>
</svelte:head>

<main>       
    {#if post.title}
        <header>
            <h1>{post.title}</h1>
            <div class="info">
                <div class="time">
                    <p>Created on {`${created.getDate()}.${created.getMonth()}.${created.getFullYear()}`}</p>
                    <p>Edited on {`${edited.getDate()}.${edited.getMonth()}.${edited.getFullYear()}`}</p>
                </div>
                <p>{comments.length} comment(s)</p>
            </div>
            <hr>
        </header>

        <SvelteMarkdown source={post.body} />

        <footer>
            <hr>
            <h1>Comments</h1>
            {#each comments as comment}
                <div class="comment">
                    <p>{comment.body}</p>
                    <p class="userData">by {comment.user.login}</p>
                    <p class="userData">on {`${createDate(comment.created_at).getDate()}.${createDate(comment.created_at).getMonth()}.${created.getFullYear()}`}</p>
                </div>
            {/each}
            <div class="links">
                <a href={post.html_url + "#issuecomment-new"} class="noYellowUnderline" target="_blank">Leave a new comment!</a>
                <a href="/blog" rel="canonical" class="noYellowUnderline" sveltekit:prefetch title="back to blog posts">Continue reading...</a>
            </div>
        </footer>
    {:else}
        <p>Post not found.</p>
        <p>Error: {post.message}</p>
    {/if}
</main>

<style>
    hr {
        height: 5px;
        border: none;
        background-color: var(--yellow);
    }
    
    header p {
        margin: 0;
        opacity: .7;
    }

    header hr {
        margin-bottom: 3rem;
    }

    header .info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    footer hr {
        margin-top: 3rem;
    }

    .comment {
        border: 5px solid var(--yellow);
        padding: 0 .5rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    .comment .userData {
        text-align: end;
    }

    .comment p {
        margin: 0;
    }

    .links a {
        text-decoration: none;
        background-color: var(--yellow);
        border: 2px solid var(--yellow);
        padding: .5rem 1rem;
        border-radius: 1rem;
    }

    .links a:focus, .links a:hover {
        border: 2px solid var(--textDark);
    }

    :global(h2) {
        border-bottom: 3px solid lightgray;
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

    @media only screen and (max-width: 450px) {
        .links {
            display: grid;
            gap: 1rem;
        }
    }
</style>