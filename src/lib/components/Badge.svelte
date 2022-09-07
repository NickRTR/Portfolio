<script>
	export let url;
	export let alt;
</script>

<img src={url} {alt} title={alt} />

<style>
	img {
		margin: 0.25rem;
		border-radius: 0.4rem;
		transition: all 0.2s linear;
	}

	img:hover {
		transform: scale(1.05);
	}
</style>
