<script>   
    export let post;
    
    const created = new Date(post.createdAt);
    const edited = new Date(post.updatedAt);
    
    let commentAuthor = "";
    let commentBody = "";

    let commentSubmitMessage = "";
    
    async function postComment() {
        const res = await fetch("/api/blog/postComment", {
			method: 'POST',
			body: JSON.stringify({
				commentAuthor,
                commentBody,
                id: post.id
			})
		})

		const data = await res.json();

        if (data.error) {
            alert(data.error);
        } else {
            commentSubmitMessage = data.message;
        }

        commentAuthor = "";
        commentBody = "";
    }

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
                <p>{post.documentInStages[0].blogComments.length} comment(s)</p>
            </div>
            <hr>
        </header>

        <article>{@html post.body.html}</article>

        <footer>
            <hr>
            <h1>Comments</h1>
            {#each post.documentInStages[0].blogComments as comment}
                <div class="comment">
                    <p>{comment.body}</p>
                    <p class="userData">by {comment.author}</p>
                    <p class="userData">on {`${createDate(comment.createdAt).getDate()}.${createDate(comment.createdAt).getMonth() + 1}.${createDate(comment.createdAt).getFullYear()}`}</p>
                </div>
            {/each}
            <div class="links">
                <form>
                    {#if commentSubmitMessage !== ""}
                        <p>{commentSubmitMessage}</p>
                    {/if}
                    <input class="border" type="text" placeholder="Your Name" bind:value={commentAuthor}>
                    <textarea class="border" placeholder="Your Comment" bind:value={commentBody} maxlength={500} />
                </form>
                <button class="border" type="submit" on:click|preventDefault={postComment}>Comment</button>
                <button class="border" type="button"><a href="/blog" rel="canonical" class="noYellowUnderline" sveltekit:prefetch title="back to blog posts">Continue reading...</a></button>
            </div>
        </footer>
    {:else}
        <p>Post not found.</p>
        <p>Error: {post.message}</p>
    {/if}
</main>

<style>
    :global(.post *) {
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
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }

    textarea, input {
        padding: .5rem;
        font-size: 1rem;
        transition: .1s ease-in-out;
        width: unset !important;
        margin-bottom: .5rem;
    }

    textarea {
        height: 100px !important;
        resize: none;
    }

    button {
        background-color: var(--yellow);
        color: var(--textDark);
        border-radius: 1rem;
        padding: .25rem .5rem;
        font-size: 1.2rem;
        font-weight: bold;
        user-select: none;
        margin-top: .5rem;
        cursor: pointer;
    }

    @media only screen and (max-width: 900px) {
        input, textarea {
            width: 300px;
        }

        textarea {
            height: 150px;
        }
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

    :global(.post a) {
        word-break: break-all;
    }

    :global(.post blockquote) {
        border-left: 3px solid var(--yellow);
        margin-left: 0;
        padding-left: .6rem;
    }

    :global(.post ul) {
        padding-left: 1.3rem;
    }

    :global(.post strong) {
        font-weight: 800;
    }

    :global(.post img) {
        width: unset;
        height: unset;
    }

    @media only screen and (max-width: 450px) {
        .links {
            display: grid;
            gap: 1rem;
        }
    }
</style>