<main>
    <h1>Profile Badge Generator</h1>

    <article>
        <a href="profilebadgegenerator.vercel.app" title="profilebadgegenerator.vercel.app" target="_blank">Visit ProfileBadgeGenerator</a><br>
        <a class="noYellowUnderline" href="https://profilebadgegenerator.vercel.app" target="_blank"><img src="/work/Profile-Badge-Generator.png" alt="Profile Badge Generator Logo" title="Profile Badge Generator Logo"></a>
        <p>
            I created the Profile Badge Generator to simplify the process of creating badge for your profile or social media.
            You can experience the badges on <a href="/skills" target="_blank">my skills page</a> 
            or in the following iframe at the bottom of this page.
            The App is available in every Browser at <a href="https://profilebadgegenerator.vercel.app" target="_blank">profilebadgegenerator.vercel.app</a>.
        </p>
        <h2>Features</h2>
        <ul>
            <li>Enter a brand name to fetch the corresponding icon from <a href="https://simpleicons.org/" title="https://simpleicons.org/" target="_blank">SimpleIcons</a></li>
            <li>Option to either color background or icon in brand color</li>
            <li>Algorythm to preserve contrast (black or white background / icon)</li>
            <li>Copy badge url</li>
        </ul>
        <h2>Difficulties</h2>
        <p>
            It was difficult to fetch the brand color from SimpleIcons. 
            I solved this difficulty by downloading all icon data every time the page loads
            to loop through it and get the brand color.
        </p>
    </article>

    <h1 id="try">Try it!</h1>
    <iframe src="https://profilebadgegenerator.vercel.app" title="Profile Badge Generator" frameborder="0">Profile Badge Generator</iframe>
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