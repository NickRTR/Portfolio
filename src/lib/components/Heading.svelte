<script>
	export let text;
</script>

<main>
	<div class="container">
		<div class="nestedContainer">
			{#each text as title}
				<h1>{title}</h1>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
	}

	.container {
		border-radius: 0.5rem;
		transform: rotate(-5deg);
		display: inline-block;
		margin-block: 0.5rem;
		transition: transform 0.2s linear;
		background: var(--gradient);
	}

	.nestedContainer {
		margin: 8px;
		padding: 1rem 0.75rem;
		background-color: var(--background);
	}

	h1 {
		line-height: 1.7rem;
		transform: rotate(5deg);
		margin: 0;
		font-size: 2rem;
		user-select: none;
		transition: all 0.2s linear;
		padding: 0.25rem;
	}

	.container:hover {
		transform: scale(1.1) rotate(-5deg);
	}
</style>
