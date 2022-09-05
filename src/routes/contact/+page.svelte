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
		<input class="border" type="email" name="email" id="email" placeholder="Your email" required />
		<textarea class="border" name="message" id="message" placeholder="Your message" required />
		<button class="border" type="submit">Submit</button>
		<input type="hidden" name="_subject" value="New submission!" />
		<input type="hidden" name="_next" value="https://nickreutlinger.vercel.app/thanks" />
	</form>
</main>

<style>
	h1 {
		margin-bottom: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
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
