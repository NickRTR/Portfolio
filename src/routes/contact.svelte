<script>
    import Heading from "$lib/components/Heading.svelte";
</script>

<main>
    <Heading text={["Contact", "me"]} />

    <form action="https://formsubmit.co/nickrtrrtr@gmail.com" method="POST">
        <input type="email" name="email" placeholder="Your email" required>
        <textarea name="message" placeholder="Your message" required></textarea>
        <button type="submit">Submit</button>
        <input type="hidden" name="_subject" value="New submission!">
        <input type="hidden" name="_next" value="https://nickreutlinger.vercel.app/thanks">
    </form>
</main>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form * {
        border-radius: 5px;
        outline: none;
        border: 2px solid var(--textDark);
        padding: .2rem;
    }

    form *:focus, form *:hover {
        border: 2px solid var(--yellow);
    }

    input {
        margin-bottom: .5rem;
        width: 300px;
    }

    textarea {
        margin-bottom: .4rem;
        width: 300px;
        height: 100px;
        max-width: 400px;
        max-height: 200px;
    }

    button {
        background-color: var(--yellow);
        color: var(--textDark);
        padding: .25rem .5rem;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 600px) {
        input {
            width: 200px;
        }

        textarea {
            min-width: 200px;
        }
    }
</style>