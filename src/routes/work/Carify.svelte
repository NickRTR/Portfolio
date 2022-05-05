<main>
    <h1>Carify</h1>

    <article>
        <a class="underline" href="https://carify.vercel.app/" title="https://carify.vercel.app/" target="_blank">Visit Carify</a><br>
        <a href="https://carify.vercel.app/" target="_blank"><img src="/work/Carify.svg" alt="Carify Logo" title="Carify Logo"></a>
        <p>
            Carify is a lexikon for number plates in Germany and Austria. 
            You can enter the location letters and press search or enter to get the spelled location. 
            In order to switch between the 2 countries, just press onto the country indicator at the bottom left of the number plate.
        </p>
        <h2>Features</h2>
        <ul>
            <li>Enter a city code and get the city name and state</li>
            <li>Displaying the city state on a map</li>
            <li>Reverse search: Enter a city name and get the city code</li>
            <li>API</li>
        </ul>
        <h2>Difficulties</h2>
        <p>It was difficult to display the state on an svg map, which I did the Svelte way: <code>class:active={"{condition}"}</code>.</p>
    </article>

    <h1 id="try">Try it!</h1>
    <iframe src="https://carify.vercel.app" title="Carify" frameborder="0">Carify</iframe>
</main>

<style>
    article {
        font-size: 1.2rem;
    }

    h1 {
        margin-top: 0;
    }

    img {
        margin-top: .8rem;
        width: 4rem;
    }

    #try {
        margin-top: 2rem;
    }

    iframe {
        width: 100%;
        height: 600px;
    }
</style>