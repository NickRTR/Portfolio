<main>
	<hero>
		<h1>Nick Reutlinger</h1>
	</hero>
</main>

<style>
	hero {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;
	}
	
	hero h1 {
		font-size: 3rem;
		margin: 0;
		padding: 2rem;
		transition: all .5s ease-in-out;
	}

	hero h1:hover {
		font-size: 5rem;
		color: var(--background);
		background-color: var(--text);
	}
</style>
