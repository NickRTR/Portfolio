<script>
    import { page } from "$app/stores";

    const nav = [
        {title: "Home", path: "/"},
        {title: "Practice", path: "/practice"}
    ];
</script>

<main>
    <nav>
        <h1>Nick Reutlinger</h1>
        <div class="links">
            {#each nav as link}
                <a href={link.path} class:active={$page.url.pathname === link.path} sveltekit:prefetch title={link.title}>{link.title}</a>
            {/each} 
        </div>
    </nav>
</main>

<style>
    main {
        position: sticky;
        top: 0;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--yellow);
        padding: 0 1rem;
    }
    
    nav a {
        text-decoration: none;
        font-size: 1.5rem;
        margin-left: .5rem;
    }

    .active {
        border-top: 3px solid var(--yellow);
    }
</style>