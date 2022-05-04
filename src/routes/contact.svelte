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
        <input type="email" name="email" id="email" required>
        <label for="message">message</label>
        <textarea name="message" id="message" required></textarea>
        <button type="submit">Submit</button>
        <input type="hidden" name="_subject" value="New submission!">
        <input type="hidden" name="_next" value="https://nickreutlinger.vercel.app/thanks">
    </form>
</main>

<style>
    form {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }

    textarea, input {
        border-radius: 5px;
        outline: none;
        border: 2px solid var(--textDark);
        padding: .5rem;
        font-size: 1rem;
    }

    input:focus, textarea:focus, input:hover, textarea:hover {
        transition: .1s ease-in-out;
        border: 2px solid var(--yellow);
    }

    input {
        margin-bottom: .5rem;
        width: 400px;
    }

    textarea {
        margin-bottom: .4rem;
        width: 400px;
        height: 200px;
        resize: none;
    }

    button {
        background-color: var(--yellow);
        color: var(--textDark);
        border: 2px solid var(--yellow);
        border-radius: 1rem;
        padding: .25rem .5rem;
        font-size: 1.2rem;
        font-weight: bold;
        user-select: none;
        margin-top: .5rem;
    }

    button:hover, button:focus {
        transition: .1s ease-in-out;
        border: 2px solid var(--textDark);
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