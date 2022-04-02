<script>
    import { page } from "$app/stores";

    const nav = [
        {title: "Home", path: "/"},
        {title: "Uses", path: "/uses"},
        {title: "Blog", path: "/blog"}
    ];
</script>

<main>
    <nav>
        <a id="title" href="/" sveltekit:prefetch>Nick Reutlinger</a>
        <div class="links">
            {#each nav as link}
                <!-- use p to transform on hover -->
                <p><a href={link.path} sveltekit:prefetch class:active={$page.url.pathname === link.path} title={"-> " + link.title}>{link.title}</a></p>
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

    a {
        text-decoration: none;
        font-size: 1.8rem;
        color: var(--textDark)
    }

    nav {
        display: flex;
        justify-content: space-between;
        background-color: var(--yellow);
        padding: 1rem;
    }

    .links {
        display: flex;
    }
    
    p {
        margin: 0;
        margin-left: .75rem;
    }

    p:hover {
        transform: scale(1.1);
    }

    .active {
        text-decoration: underline;
    }
</style>