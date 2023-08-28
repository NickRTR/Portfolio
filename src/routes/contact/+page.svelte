<svelte:head>
	<title>Nick Reutlinger - Contact</title>
</svelte:head>

<main>
	<h1>Contact</h1>

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
		display: flex;
		flex-direction: column;
	}

	label {
		text-align: left;
		font-weight: bold;
		font-size: 1.1rem;
		padding-block: 0.5rem;
	}

	textarea,
	input,
	button {
		border-radius: 1rem;
		outline: none;
		transition: 0.1s ease-in-out;
		background-color: var(--text);
		color: var(--background);
	}

	textarea,
	input {
		text-align: left;
		padding: 0.5rem;
		font-size: 1rem;
		width: unset !important;
		margin-bottom: 0.5rem;
		border: 2px solid var(--text);
	}

	textarea {
		height: 100px !important;
		resize: none;
	}

	textarea:hover,
	input:hover,
	textarea:focus,
	input:focus {
		border-color: var(--accent);
	}

	button {
		margin-top: 1rem;
		font-weight: bold;
		font-size: 1rem;
		border: none;
		padding: 0.5rem;
		cursor: pointer;
	}

	button:hover,
	button:focus {
		background-color: var(--accent);
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
