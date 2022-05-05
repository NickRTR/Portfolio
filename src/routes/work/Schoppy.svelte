<main>
    <h1>Schoppy</h1>

    <article>
        <a class="underline" href="https://schoppy.vercel.app/" title="https://schoppy.vercel.app/" target="_blank">Visit Schoppy</a><br>
        <a href="https://schoppy.vercel.app/" target="_blank"><img src="/work/Schoppy.png" alt="Schoppy Logo" title="Schoppy Logo"></a>
        <p>
            Schoppy is a shopping list, I created for my family and afterwards adapted to access a larger target group.
            The App is created in SvelteKit with Supabase as backend.
            The category icons are really helpful, and you can sort them in the settings to adapt to your grocery store.
        </p>
        <h2>Features</h2>
        <ul>
            <li>Login and Signup with email and password</li>
            <li>Add Products with title, quantity and category (fruits, vegetables, milk, ...)</li>
            <li>Input Suggestions</li>
            <li>Delete, check and edit Products</li>
            <li>Change product category</li>
            <li>Change product category sort order</li>
            <li>Export the list via the navigator.share API</li>
            <li>Support for multiple languages including English, German, Spanish, France, Chinese and Arabic.</li>
            <li>Settings</li>
        </ul>
        <h2>Difficulties</h2>
        <p>Creating a component to sort the categories and make it accessable to touch was very hard to implement.</p>
        <p>However after an intense search, I found a component called <a class="underline" href="https://www.npmjs.com/package/svelte-dragdroplist" title="https://www.npmjs.com/package/svelte-dragdroplist" target="_blank">svelte-dragdroplist</a> which made the job a lot easier.</p>
        <p>
            In general the category system brought me a lot of headache.
            But it was worth the effort, because it is bringing an enourmous time saving to the users in the grocery stores.
        </p>
        <p>
            The translation wasn't easy either.
            The translation code was quickly done. But the translation process with six languages isn't near to quick.
            The most fundamental problem according the translation was that I often added new features to the app, 
            which I then needed to translate again.
        </p>
    </article>
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
</style>