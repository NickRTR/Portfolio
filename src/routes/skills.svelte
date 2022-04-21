<script>
    const skills = [
        { title: "Javascript", src: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
        { title: "Svelte", src: "https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" },
        { title: "HTML", src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
        { title: "CSS", src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
    ]
</script>

<main>
    <h1>Skills</h1>

    <div class="banners">
        {#each skills as skill}
            <img src={skill.src} alt={skill.title} title={skill.title}>
        {/each}
    </div>
</main>

<style>
    .banners {
        /* animation: slidingBanners 4s linear infinite; */
    }

    @keyframes slidingBanners {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(100%);
        }
    }
</style>