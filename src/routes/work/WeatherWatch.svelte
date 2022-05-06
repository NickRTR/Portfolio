<main>
    <h1>WeatherWatch</h1>

    <article>
        <a href="https://weatherwatch.vercel.app/" title="https://weatherwatch.vercel.app/" target="_blank">Visit WeatherWatch</a><br>
        <a href="https://weatherwatch.vercel.app/" target="_blank"><img src="/work/WeatherWatch.svg" alt="WeatherWatch Logo" title="WeatherWatch Logo"></a>
        <p>
            Weather Watch is a weather report built in Sveltekit. 
            It shows the current weather and a weather forecast for 3 days. 
            Additionally it offers a small advice for every day at the bottom of the app. 
            The App is available in every Browser at <a href="https://weatherwatch.vercel.app/" target="_blank">https://weatherwatch.vercel.app/</a>. 
            The data is delivered by <a href="https://www.weatherapi.com/" target="_blank">https://www.weatherapi.com/</a> as well as 
            <a href="https://api.adviceslip.com/" target="_blank">https://api.adviceslip.com/</a>.
        </p>
        <h2>Features</h2>
        <ul>
            <li>Switch between Metric and Imperial units</li>
            <li>Light and dark mode stored in localstorage (change with click on title)</li>
            <li>Save your favourite locations</li>
            <li>7 different weather conditions</li>
            <li>Hourly forecast for 3 days</li>
            <li>Click on hourly forecast opens detailed view</li>
            <li>Temperature</li>
            <li>Wind speed</li>
            <li>Felt temperature</li>
            <li>Air Humidity</li>
            <li>Sunrise and Sunset times</li>
            <li>Uv Index and Air quality</li>
            <li>Daily advice, for example: "Don't eat anything your grandparents wouldn't recognise as food."</li>
            <li>Desktop Version developed with Tauri</li>
        </ul>
        <h2>Difficulties</h2>
        <p>This time, it was difficult to secure the API Key from the users.</p>
        <p>Therefore I used SvelteKit API routes and <a href="https://www.npmjs.com/package/dotenv" title="https://www.npmjs.com/package/dotenv" target="_blank">dotenv</a>.</p>
    </article>

    <h1 id="try">Try it!</h1>
    <iframe src="https://weatherwatch.vercel.app" title="WeatherWatch" frameborder="0">WeatherWatch</iframe>
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