<script>
	import Divider from "$lib/components/Divider.svelte";
</script>

<svelte:head>
	<title>Nick Reutlinger - Contact</title>
</svelte:head>

<main>
	<h1>Contact</h1>
	<Divider />

	<form action="https://formsubmit.co/nickrtrrtr@gmail.com" method="POST">
		<label for="email">email</label>
		<input class="border" type="email" name="email" id="email" placeholder="Your email" required />
		<label for="message">message</label>
		<textarea class="border" name="message" id="message" placeholder="Your message" required />
		<button class="border" type="submit">Submit</button>
		<input type="hidden" name="_subject" value="New submission!" />
		<input type="hidden" name="_next" value="https://nickreutlinger.de/thanks" />
	</form>
</main>

<style>
	form {
		max-width: 400px;
		margin: auto;
	}

	h1 {
		margin-bottom: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
	}

	label {
		padding-block: 0.5rem;
		color: var(--contrast);
	}

	textarea,
	input {
		padding: 0.5rem;
		font-size: 1rem;
		transition: 0.1s ease-in-out;
		width: unset !important;
		margin-bottom: 0.5rem;
	}

	textarea {
		height: 100px !important;
		resize: none;
	}

	@media only screen and (max-width: 900px) {
		input,
		textarea {
			width: 300px;
		}

		textarea {
			height: 150px;
		}
	}
</style>
