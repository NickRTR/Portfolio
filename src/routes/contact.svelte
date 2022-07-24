<script>
	import Heading from "$lib/components/Heading.svelte";
</script>

<svelte:head>
	<title>Nick Reutlinger - Contact</title>
</svelte:head>

<main>
	<Heading text={["Contact"]} />

	<form action="https://formsubmit.co/nickrtrrtr@gmail.com" method="POST">
		<label for="email">email</label>
		<input class="border" type="email" name="email" id="email" required />
		<label for="message">message</label>
		<textarea class="border" name="message" id="message" required />
		<button class="border" type="submit">Submit</button>
		<input type="hidden" name="_subject" value="New submission!" />
		<input type="hidden" name="_next" value="https://nickreutlinger.vercel.app/thanks" />
	</form>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}

	textarea,
	input {
		padding: 0.5rem;
		font-size: 1rem;
		width: 400px;
		margin-bottom: 0.5rem;
	}

	textarea {
		height: 200px;
		resize: none;
	}

	button {
		background-color: var(--yellow);
		color: var(--textDark);
		border-radius: 1rem;
		padding: 0.25rem 0.5rem;
		font-size: 1.2rem;
		font-weight: bold;
		user-select: none;
		margin-top: 0.5rem;
		cursor: pointer;
	}

	@media only screen and (max-width: 900px) {
		input {
			width: 300px;
		}

		textarea {
			width: 300px;
			height: 150px;
		}
	}

	@media only screen and (max-width: 400px) {
		input {
			width: 200px;
		}

		textarea {
			width: 200px;
			height: 100px;
		}
	}
</style>
