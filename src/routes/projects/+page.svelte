<script lang="ts">
  import CardItem from "../../CardItem.svelte";
  import { csharpIcon, discordJsIcon, flutterIcon, reactIcon } from "../../images/icons/svgs";

    let valstoreImg = "/images/valstore.png"
    

    let projects = [
        {
            name: "ValStore",
            stack: ["flutter", "Firebase"],
            description: "A flutter app to view the Shop of the Game Valorant on your Phone",
            image: valstoreImg,
            link: "https://github.com/z4roc/valstore-mobile"
        },
        {
            name: "Apprentice reports app",
            stack: ["flutter", "Firebase"],
            description: "A flutter app for writing apprentice reports on my mobile device with ability to export them as PDF",
            image: flutterIcon,
            link: "https://berichte.aktamirov.de"
        },
        {
            name: "Discord Bot",
            stack: ["JavaScript", "nodeJs"],
            description: "A small nodeJS discord bot made with Discord.js",
            image: discordJsIcon,
        },
        {
            name: "exam preparation docs",
            stack: ["JavaScript", "React", "NextJS"],
            description: "A NextJS Website built with Nextra to collect all necessary exam topics",
            image: reactIcon,
            link: "https://pruefungsvorbereitung.aktamirov.de"
        },
        {
            name: "MyPass",
            stack: ["C#", ".NET", "Firebase"],
            description: "A C# WPF Application to manage passwords",
            image: csharpIcon,
            link: "https://github.com/z4roc/MyPass"
        },
    ];
</script>

<section id="projects" class="md:h-full h-full md:p-20 flex flex-col items-center justify-center md:gap-10 gap-5">
    
    <h1 class="relative text-xl lg:text-5xl font-bold">Projects</h1>
    
    <div class="relative grid gap-10 grid-cols-1 xl:grid-cols-4">
        {#each projects as project }
            <a href={project.link} class="card glass backdrop-blur-2xl pt-10 from-cyan-300/10 to-purple-500/10 rounded-md border-1 border-opacity-50 bg-gradient-to-bl md:w-96 w-60 shadow-xl">
                <figure><img src={project.image} alt={project.name} class="md:h-40 md:w-40 h-20 w-20"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{project.name}</h2>
                    <p>{project.description}</p>
                </div>
                <div class="card-actions pb-4 pl-4 justify-start">
                    {#each project.stack as item}
                        <div class="badge badge-outline h-7">{item}</div>
                    {/each}
                </div>
            </a>
        {/each}
    </div>

</section>