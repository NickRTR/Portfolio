<script>
	export let weather;

	console.log(weather);

	const weatherConditions = {
		sun: ["☀️", 1000],
		"partly cloudy": ["⛅", 1003, 1249],
		cloudy: ["☁️", 1006, 1009],
		fog: ["🌫", 1030, 1135, 1147],
		"rain possible": ["🌦", 1063, 1066, 1069, 1072],
		rain: ["🌧", 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246],
		thunder: ["⛈️", 1087, 1117, 1273, 1276, 1279, 1282],
		snow: ["🌨", 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1252, 1255, 1258, 1261, 1264]
	};

	function getWeatherIcon(condition) {
		if (weather.current.is_day === 0) return "🌙";

		for (const key in weatherConditions) {
			if (weatherConditions[key].includes(condition)) {
				return weatherConditions[key][0];
			}
		}

		return "";
	}
</script>

<footer>
	<hr />
	<nav>
		<a href="/" title="Home" data-sveltekit-prefetch>Home</a>
		<a href="/work" title="Work" data-sveltekit-prefetch>Work</a>
		<a href="/uses" title="Uses" data-sveltekit-prefetch>Uses</a>
		<a href="/skills" title="Skills" data-sveltekit-prefetch>Skills</a>
		<a href="/contact" title="Contact" data-sveltekit-prefetch>Contact</a>
		<a href="https://blog.nickreutlinger.de" title="Blog">Blog</a>
	</nav>
	<section>
		<p>©2023 Nick Reutlinger 🚀</p>
		<p>
			📌 Stuttgart
			{#if weather}
				{Math.round(weather.current.temp_c)}°C / {Math.round(weather.current.temp_f)}°F <span>{getWeatherIcon(weather.current.condition.code)}</span>
			{/if}
		</p>
	</section>
</footer>

<style>
	hr {
		margin-top: 2rem;
		height: 1px;
		background-color: var(--color);
		border: none;
	}

	nav {
		display: flex;
		flex-direction: column;
		line-height: 2rem;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	p {
		margin-top: 1rem;
	}

	span {
		font-size: 1.3rem;
		font-family: "Twemoji Mozilla", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", sans-serif;
	}

	@media only screen and (max-width: 550px) {
		section {
			flex-direction: column-reverse;
			flex-wrap: nowrap;
		}

		section p {
			margin: 0.3rem 0;
		}
	}
</style>
