<script>
    export let post;

    let created = new Date(post.createdAt);
    let edited = new Date(post.updatedAt);

    const createDate = (time) => new Date(time);
</script>

<svelte:head>
    <title>Nick Reutlinger - Post</title>
</svelte:head>

<main class="post">       
    {#if post.title}
        <header>
            <h1>{post.title}</h1>
            <div class="info">
                <div class="time">
                    <p>Created on {`${created.getDate()}.${created.getMonth() + 1}.${created.getFullYear()}`}</p>
                    <p>Edited on {`${edited.getDate()}.${edited.getMonth() + 1}.${edited.getFullYear()}`}</p>
                </div>
                <p>{post.comments.length} comment(s)</p>
            </div>
            <hr>
        </header>

        <article>{@html post.body.html}</article>

        <footer>
            <hr>
            <h1>Comments</h1>
            {#each post.comments as comment}
                <div class="comment">
                    <p>{comment.body}</p>
                    <p class="userData">by {comment.author}</p>
                    <p class="userData">on {`${createDate(comment.created).getDate()}.${createDate(comment.created).getMonth() + 1}.${createDate(comment.created).getFullYear()}`}</p>
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
    :global(*) {
        scroll-behavior: smooth;
        max-width: 100%;
        object-fit: cover;
    }

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

    :global(.post article h1) {
        border-bottom: 5px solid var(--blue);
    }

    :global(.post article h2) {
        border-bottom: 4px solid var(--blue);
    }

    :global(.post article h3) {
        border-bottom: 3px solid var(--blue);
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

    :global(strong) {
        font-weight: 800;
    }

    @media only screen and (max-width: 450px) {
        .links {
            display: grid;
            gap: 1rem;
        }
    }
</style>