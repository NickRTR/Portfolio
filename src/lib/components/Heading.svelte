<script>
	export let text;
</script>

<main>
	<div class="container">
		{#each text as title}
			<h1>{title}</h1>
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
	}

	.container {
		color: var(--textDark);
		border: 8px solid var(--yellow);
		border-radius: 0.5rem;
		transform: rotate(-5deg);
		display: inline-block;
		padding: 1rem 1.5rem;
		margin: 0.5rem;
		transition: all 0.2s linear;
	}

	h1 {
		transform: rotate(5deg);
		margin: 0;
		font-size: 2rem;
		user-select: none;
		transition: all 0.2s linear;
	}

	.container:hover {
		transform: scale(1.1) rotate(-5deg);
	}
</style>
