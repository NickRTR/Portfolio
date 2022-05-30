<script>
    const skills = [
        // languages
        [
            { sectionName: "Languages" },
            { title: "Javascript", src: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
            { title: "Svelte", src: "https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" },
            { title: "HTML ;)", src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
            { title: "CSS", src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
            { title: "Java", src: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" },
            { title: "Python", src: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" },
            { title: "C++", src: "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
            { title: "Godot (GDScript)", src: "https://img.shields.io/badge/Godot-478CBF?style=for-the-badge&logo=GodotEngine&logoColor=white" },
        ],
        // databases
        [
            { sectionName: "Databases" },
            { title: "Supabase", src: "https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white" },
            { title: "MongoDB", src: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" },
            { title: "Firebase", src: "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" },
        ],
        // design
        [
            { sectionName: "Design" },
            { title: "Figma", src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" },
            { title: "Gimp", src: "https://img.shields.io/badge/gimp-5C5543?style=for-the-badge&logo=gimp&logoColor=white" },
        ],
        // framworks
        [
            { sectionName: "Frameworks" },
            { title: "SvelteKit", src: "https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white" },
            { title: "Tauri", src: "https://img.shields.io/badge/Tauri-FFC131?style=for-the-badge&logo=Tauri&logoColor=white" },
            { title: "Tailwind CSS", src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        ],
    ]
</script>

<main>
    <h1>Skills</h1>

    {#each skills as section}
        <section>
            <h2>{section[0].sectionName}</h2>
            
            <div class="banner">
                {#each section as banner, i}
                    {#if i > 0}
                        <img src={banner.src} alt={banner.title} title={banner.title}>
                    {/if}
                {/each}
            </div>
        </section>
    {/each}
</main>

<style>
    .banner {
        border-radius: .5rem;
        border: 4px solid var(--yellow);
        padding: .5rem;
        margin: 0;
        line-height: 0; /* remove padding at bottom */
    }

    img {
        margin: 0;
        padding: 0;
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