<script>
	import Divider from "$lib/components/Divider.svelte";

	export let title;
	export let highlight;
</script>

<header>
	{#if highlight}
		<h1>{title}<span>{highlight}</span></h1>
	{:else}
		<h1>{title}</h1>
	{/if}

	<Divider />
</header>

<style>
	h1 {
		margin-bottom: 0.5rem;
	}

	span {
		color: var(--accent);
	}
</style>
