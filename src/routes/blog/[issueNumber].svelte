<script>
    import SvelteMarkdown from "svelte-markdown";

    export let post;
    export let comments;

    let created = new Date(post.created_at);
    let edited = new Date(post.updated_at);

    const createDate = (time) => new Date(time);
</script>

<main>       
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
        <a href={post.html_url + "#issuecomment-new"} class="noUnderline" target="_blank">Leave a comment!</a>
    </footer>
</main>

<style>
    hr {
        height: 5px;
        border: none;
        background-color: var(--yellow);
    }
    
    p {
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

    footer a {
        text-decoration: none;
        background-color: var(--yellow);
        padding: .5rem 1rem;
        border-radius: 1rem;
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
</style>