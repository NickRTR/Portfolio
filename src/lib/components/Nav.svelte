<script>
    import { page } from "$app/stores";
    import { slide } from "svelte/transition";

    const nav = [
        {title: "Home", path: "/"},
        {title: "Work", path: "/work"},
        {title: "Uses", path: "/uses"},
        {title: "Contact", path: "/contact"},
        {title: "Blog", path: "/blog"}
    ];

    let innerWidth;
    let showHamburger = false;
</script>

<svelte:window bind:innerWidth />

<main>
    <nav>
        <a id="title" href="/" sveltekit:prefetch>Nick Reutlinger</a>
        {#if innerWidth >= 750}
        <div class="links">
            {#each nav as link}
                <!-- use p to transform on hover -->
                <a href={link.path} sveltekit:prefetch class:active={$page.url.pathname === link.path} title={"-> " + link.title}>{link.title}</a>
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

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--yellow);
        padding: .5rem;
    }
    
    #title {
        font-size: 1.8rem;
    }

    .links {
        display: flex;
    }

    a {
        color: var(--textDark);
        text-decoration: none;
        font-size: 1.5rem;
        padding: .5rem;
        margin: 0 .25rem;
        border-radius: .5rem;
        outline: none;
    }

    .active {
        transition: .5s ease-in-out;
        background-color: var(--textDark);
        color: var(--yellow);
    }

    a:not(.active):hover, a:focus {
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