<script>
	export let data;

	console.log(data);
</script>

<main>
	<h1>Work</h1>

	<div class="grid">
		{#each data.projects as project}
			<a href="/work/{project.slug}" class="item">
				<h3>{project.projectName}</h3>
				<p>{project.shortDescription}</p>
			</a>
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 500px;
		margin-inline: auto;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
	}

	.item {
		border: 3px solid var(--text);
		border-radius: 0.5rem;
		padding-inline: 0.5rem;
		text-decoration: none;
		outline: none;
	}

	.item * {
		text-align: left;
	}

	.item:hover,
	.item:focus {
		border-color: var(--accent);
	}
</style>
