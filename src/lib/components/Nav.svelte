<script>
    import { page } from "$app/stores";

    const nav = [
        {title: "Home", path: "/"},
        {title: "Uses", path: "#uses"},
        {title: "Blog", path: "/blog"}
    ];
</script>

<main>
    <nav>
        <a href="/" sveltekit:prefetch title="Go Home">Nick Reutlinger</a>
        <div class="links">
            {#each nav as link}
                <a href={link.path} class:active={$page.url.pathname === link.path} sveltekit:prefetch title={"Go" + link.title}>{link.title}</a>
            {/each} 
        </div>
    </nav>
</main>

<style>
    main {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--yellow);
        padding: 1rem;
    }
    
    nav a {
        text-decoration: none;
        font-size: 1.8rem;
        margin-left: .5rem;
        color: var(--textDark)
    }

    .active {
        border-top: 3px solid var(--yellow);
    }
</style>