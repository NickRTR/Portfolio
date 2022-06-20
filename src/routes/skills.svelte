<script>
    import Heading from "$lib/components/Heading.svelte"

    const skills = [
        // languages
        [
            { sectionName: "Languages" },
            { title: "Javascript", src: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
            { title: "HTML", src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
            { title: "CSS", src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
            { title: "Markdown", src: "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" },
            { title: "Java", src: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" },
            { title: "Python", src: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" },
            { title: "C++", src: "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
            { title: "Godot (GDScript)", src: "https://img.shields.io/badge/Godot-478CBF?style=for-the-badge&logo=GodotEngine&logoColor=white" },
        ],
        // framworks
        [
            { sectionName: "Frameworks" },
            { title: "Svelte", src: "https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" },
            { title: "SvelteKit", src: "https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" },
            { title: "Tauri", src: "https://img.shields.io/badge/Tauri-FFC131?style=for-the-badge&logo=Tauri&logoColor=white" },
            { title: "Node.js", src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
            { title: "Tailwind CSS", src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
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
            { title: "Unsplash", src: "https://img.shields.io/badge/Unsplash-000000?style=for-the-badge&logo=Unsplash&logoColor=white" },
            { title: "Dribbble", src: "https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" },
            { title: "Gimp", src: "https://img.shields.io/badge/gimp-5C5543?style=for-the-badge&logo=gimp&logoColor=white" },
            { title: "Inkscape", src: "https://img.shields.io/badge/Inkscape-000000?style=for-the-badge&logo=Inkscape&logoColor=white" },
        ],
        // tooling
        [
            { sectionName: "Tooling" },
            { title: "Vite", src: "https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" },
            { title: "Vercel", src: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" },
            { title: "Netlify", src: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" },
            { title: "npm", src: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" },
        ],
        // OS
        [
            { sectionName: "Operating system" },
            { title: "Windows", src: "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" },
            { title: "Linux", src: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
            { title: "Pop!_OS", src: "https://img.shields.io/badge/Pop!_OS-48B9C7?style=for-the-badge&logo=Pop!_OS&logoColor=white" },
            { title: "Ubuntu", src: "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" },
            { title: "Manjaro", src: "https://img.shields.io/badge/manjaro-35BF5C?style=for-the-badge&logo=manjaro&logoColor=white" },
            { title: "Fedora", src: "https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white" },
            { title: "KDE", src: "https://img.shields.io/badge/kde-1D99F3?style=for-the-badge&logo=kde&logoColor=FFFFFF" },
        ],
        // office
        [
            { sectionName: "Office" },
            { title: "Microsoft Office", src: "https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white" },
            { title: "Libre Office", src: "https://img.shields.io/badge/LibreOffice-18A303?style=for-the-badge&logo=LibreOffice&logoColor=white" },
            { title: "Notion", src: "https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" },
            { title: "Obsidian", src: "https://img.shields.io/badge/Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=white" },
        ],
        // further / other
        [
            { sectionName: "Further" },
            { title: "Git", src: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" },
            { title: "GitHub", src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" },
            { title: "Visual Studio Code", src: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" },
            { title: "Arduino", src: "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white" },
            { title: "WakaTime", src: "https://img.shields.io/badge/WakaTime-000000?style=for-the-badge&logo=WakaTime&logoColor=white" },
        ],
    ]
</script>

<main>
    <Heading text={["Skills"]} />

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
    h2 {
        margin-bottom: .4rem;
        border-bottom: none;
    }

    .banner {
        border-radius: .5rem;
        border: 4px solid var(--yellow);
        padding: .5rem;
        line-height: 0; /* remove padding at bottom */
    }
    
    img {
        margin: .25rem;
        transition: all .2s linear;
        border-radius: .25rem;
    }

    img:hover {
        transform: scale(1.05);
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