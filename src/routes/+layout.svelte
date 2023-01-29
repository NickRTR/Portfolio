<body>
    <slot></slot>
</body>

<style>
    :global(*) {
        background-color: #000000;
        color: #FFFFFF;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :global(body) {
        margin: 0;
    }

    :global(:root) {
        --text: #FFFFFF;
        --background: #000000;
        --accent: #FFFF00;
    }
</style>