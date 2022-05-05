<main>
    <h1>Mikki</h1>

    <article>
        <a class="underline" href="https://mikki.gq" title="https://mikki.gq" target="_blank">Visit Mikki</a><br>
        <a href="https://mikki.gq" target="_blank"><img src="/work/Mikki.svg" alt="Mikki Logo" title="Mikki Logo"></a>
        <p>Mikki is an assembler wiki created in SvelteKit, to provide a nice and easy way for my class mates to write down all the things we are learning in our Assembler class. Special features are the Tauri Desktop App and the auto caching system.</p>
        <h2>Features</h2>
        <ul>
            <li>Interpret and create Markdown files</li>
            <li>Create, edit and delete wiki entries</li>
            <li>Creating chache of entries when there is no internet access</li>
            <li>Autocaching</li>
            <li>Cache indicator in header (under title)</li>
            <li>Log about all changes to the wiki</li>
            <li>Login system with different permissions via a bot</li>
            <li>extremely fast and small desktop app with Tauri</li>
        </ul>
        <h2>Difficulties</h2>
        <p>Interpreting markdown files was difficult to setup at first, but now it's working like a charm.</p>
        <p>We used <a class="underline" href="https://www.npmjs.com/package/svelte-markdown" title="https://www.npmjs.com/package/svelte-markdown" target="_blank">svelte-markdown</a> as a solution and got it to work with our database.</p>
    </article>

    <h1 id="try">Try it!</h1>
    <iframe src="https://mikki.gq" title="Mikki" frameborder="0">Mikki</iframe>
</main>

<style>
    article {
        font-size: 1.2rem;
    }

    h1 {
        margin-top: 0;
    }

    img {
        margin-top: .8rem;
        width: 4rem;
    }

    #try {
        margin-top: 2rem;
    }

    iframe {
        width: 100%;
        height: 600px;
    }
</style>