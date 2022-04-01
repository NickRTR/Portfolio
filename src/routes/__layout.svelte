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
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: var(--textDark);
    }

    main {
        max-width: 500px;
        margin: auto;
        padding: 0 1rem;
    }

	:global(body) {
        background-color: var(--textLight);
        background-image: radial-gradient(var(--dots) 1px, transparent 1px);
        background-size: 10px 10px;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Variables */

    :global(:root) {
        --yellow: #FFC600;
        --textLight: white;
        --textDark: black;
        --dots: #d2d6d9;
    }
</style>
