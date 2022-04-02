<script>
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<body>
    <Nav />

    <main><slot></slot></main>

    <Footer />
</body>

<style>
    * {
        margin: 0;
        font-family: 'Work Sans', sans-serif;
        font-weight: bold;
        color: var(--textDark);
    }

    main {
        max-width: 600px;
        margin: auto;
        padding: 0 1rem;
    }

	:global(body) {
        background-color: var(--textLight);
        background-image: radial-gradient(var(--dots) 1px, transparent 1px);
        background-size: 10px 10px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    /* Variables */

    :global(:root) {
        --yellow: #FFC600;
        --textLight: white;
        --textDark: black;
        --dots: #d2d6d9;
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
