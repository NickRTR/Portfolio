<script>
    import Nav from "$lib/components/nav.svelte";
</script>

<body>
    <Nav />

    <main><slot></slot></main>
</body>

<style>
    * {
        margin: 0;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: var(--textDark);
    }

    main {
        max-width: 900px;
        margin: auto;
    }

	:global(body) {
        background-color: var(--textLight);
        background-image: radial-gradient(var(--dots) 1px, transparent 1px);
        background-size: 10px 10px;
    }

    /* Variables */

    :global(:root) {
        --yellow: #FFC600;
        --textLight: white;
        --textDark: black;
        --dots: #d2d6d9;
    }
</style>