<script>
    const nav = [
        {title: "Home", path: "/"},
        {title: "Uses", path: "/#uses"},
        {title: "Blog", path: "/blog"}
    ];
</script>

<main>
    <nav>
        <a href="/" sveltekit:prefetch>Nick Reutlinger</a>
        <div class="links">
            {#each nav as link}
                <!-- Have to use p to transform on hover -->
                <p><a href={link.path} sveltekit:prefetch title={"-> " + link.title}>{link.title}</a></p>
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
        margin-left: 1rem;
        color: var(--textDark)
    }

    .links {
        display: flex;
    }

    p {
        margin: 0;
    }

    p:hover {
        transform: scale(1.1);
    }
</style>