<script context="module">
    export async function load({ fetch }) {
        let res = await fetch("/api/weather.json");
		if (res.ok) {
            const data = await res.json();
            return {
                props: {
                    weather: data
                }
            }
        } else {
            return {
                status: 301
            };
        }
	}
</script>

<script>
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { browser } from "$app/env";
    import { fade } from "svelte/transition";
    import { showLoader } from "$lib/stores";

    export let weather;

    // min loading time
    setTimeout(() => {
        // Remove loader if page is loaded AND minimum loading time is over 
        if (browser) $showLoader = false;
    }, 750)
</script>

<svelte:head>
    <title>Nick Reutlinger - Portfolio</title>
</svelte:head>

<body>
    {#if $showLoader}
        <div class="loader" transition:fade></div>
    {:else}
        <Nav />

        <main><slot></slot></main>

        <Footer {weather} />
    {/if}
</body>

<style>
    * {
        margin: 0;
        font-family: 'Work Sans', sans-serif;
        font-weight: bold;
        color: var(--textDark);
        line-height: 1.9rem;
    }

	:global(body) {
        background-color: var(--textLight);
        background-image: radial-gradient(var(--dots) 1px, transparent 1px);
        background-size: 10px 10px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        max-width: 37.5rem;
        margin: auto;
        padding: 1rem;
    }

    /* Variables */

    :global(:root) {
        --yellow: #FFC600;
        --textLight: white;
        --textDark: black;
        --dots: #d2d6d9;
    }

    :global(mark) {
        background-color: var(--yellow);
    }

    :global(*::selection ) {
        background-color: var(--yellow);
    }

    :global(a) {
        color: var(--textDark);
    }

    :global(a:not(.noUnderline)) {
        text-decoration: none;
        border-bottom: 3px solid var(--yellow);
        padding-bottom: .1rem;
        position: relative;
        user-select: none;
    }

    :global(a:not(.noUnderline)::before) {
        content: "";
        width: 100%;
        height: 3px;
        background-color: var(--textDark);
        position: absolute;
        bottom: -3px; /* this is to match where the border is */
        transform-origin: left; 
        transform: scale(0);
        transition: 0.25s linear;
    }

    :global(a:not(.noUnderline):hover::before) {
        transform: scale(1);
    }

    @font-face {
        font-family: 'Work Sans', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap') format('woff2');
        font-display: swap;
    }

    /* loader */

    .loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--textDark);
        z-index: 10;
	}

	.loader::after {
		content: "";
        background-image: url("/me.jpg");
        background-size: contain;
		width: 15rem;
		height: 15rem;
        border: 1rem solid var(--yellow);
		border-radius: 50%;
		animation: loading 2.25s ease infinite;
	}

	@keyframes loading {
		from {
			transform: rotate(0turn);
		}
		to {
			transform: rotate(1turn);
		}
	}

    /* scroll bar */
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 0;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        border: 5px solid var(--textDark)
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--yellow);
    }
</style>
