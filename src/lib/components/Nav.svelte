<script>
    import { page } from "$app/stores";
    import { slide } from "svelte/transition";

    const nav = [
        {title: "Home", path: "/"},
        {title: "Uses", path: "/uses"},
        {title: "Blog", path: "/blog"}
    ];

    let innerWidth;
    let showHamburger = false;
</script>

<svelte:window bind:innerWidth />

<main>
    <nav>
        <a id="title" href="/" sveltekit:prefetch>Nick Reutlinger</a>
        {#if innerWidth >= 600}
        <div class="links">
            {#each nav as link}
                <!-- use p to transform on hover -->
                <p><a href={link.path} sveltekit:prefetch class:active={$page.url.pathname === link.path} title={"-> " + link.title}>{link.title}</a></p>
            {/each} 
        </div>
        {:else}
            <input type="checkbox" id="toggle" bind:checked={showHamburger}>
            <label for="toggle"><img src="/menu.svg" alt="Menu"></label>
        {/if}
    </nav>
    {#if showHamburger && innerWidth < 600}
        <div class="hamburger" transition:slide>
            {#each nav as link}
                <a href={link.path} class:active={$page.url.pathname === link.path} sveltekit:prefetch title={link.title} on:click={() => {showHamburger = false}}>{link.title}</a><br>
            {/each}
        </div>
    {/if}
</main>

<style>
    main {
        position: sticky;
        top: 0;
        z-index: 1;
        margin-bottom: 1rem;
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

    /* Hamburger */

    img {
        width: 3rem;
        margin-bottom: -1rem;
        margin-top: -.5rem;
    }

    #toggle {
        display: none;
    }

    #toggle + label {
        transition: 500ms ease all;
    }

    #toggle:checked + label {
        transform: rotate(-90deg);
        transition: 500ms ease all;
    }

    .hamburger {
        background-color: var(--yellow);
        padding-left: 1rem;
        padding-bottom: .5rem;
    }

    .hamburger a {
        margin: 0;
        line-height: 2rem;
    }
</style>