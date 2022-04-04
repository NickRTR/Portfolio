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

    export let weather;
</script>

<body>
    <Nav />

    <main><slot></slot></main>

    <Footer {weather} />
</body>

<style>
    * {
        margin: 0;
        font-family: 'Work Sans', sans-serif;
        font-weight: bold;
        color: var(--textDark);
        line-height: 1.8rem;
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
    }

    @font-face {
        font-family: 'Work Sans', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap') format('woff2');
        font-display: swap;
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
