<script>
    import Heading from "$lib/components/Heading.svelte";  
</script>

<main>
    <Heading text={["#FFC600"]} />

    <article>
        <p>#FFC600 is my favourite color. Even if that sounds odd, it represends my mood and makes me feel good.</p>
        <div class="color">
            <p>#FFC600</p>
            <p>I mean look at it... Doesn't it look gorgeous?</p>
            <p>If not, it's definitely due to your screen color range.</p>
        </div>
    </article>
</main>

<style>
    .color {
        background-color: #FFC600;
        width: 100%;
        height: 200px;
        display: inline-block;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
    }
    
    .color p {
        margin: 0;
    }
</style>
