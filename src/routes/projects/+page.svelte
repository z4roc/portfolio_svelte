<script lang="ts">
  import CardItem from "../../CardItem.svelte";
  import {
    csharpIcon,
    discordJsIcon,
    flutterIcon,
    githubIcon,
    jsIcon,
    reactIcon,
    svelteIcon,
  } from "../../images/icons/svgs";

  let globe = "/images/globe.svg";
  let svelte = "/images/svelte.svg";
  let valstoreImg = "/images/Valstore_Icon.png";
  let statifyImg = "/images/statify_icon.png";

  let projects = [
    {
      name: "ValStore",
      stack: ["Flutter", "Firebase", "Rest-API"],
      description:
        "Eine App erstellt mit flutter, um den Shop vom Spiel 'VALORANT' am Handy anschauen zu können",
      image: valstoreImg,
      link: "https://valostore.zaroc.de/",
      code: "https://github.com/z4roc/valstore-mobile",
    },
    {
      name: "Ausbildungsberichte",
      stack: ["Flutter", "Firebase"],
      description:
        "Eine App erstellt mit flutter, um meine Ausbildungsberichte am Handy und im Web schreiben zu können und sie anschließend als PDF zu exportieren.",
      image: flutterIcon,
      link: "https://berichte.aktamirov.de",
      code: "https://github.com/z4roc/berichtverwaltung_flutter",
    },
    {
      name: "Statify",
      stack: ["NextJS", "React", "Rest-API", "Spotify-API"],
      description:
        "Eine NextJS Anwendung um die eigenen Spotify Statistiken zu sehen, aktuell noch in Beta. Kontaktiere mich für einen Zugang.",
      image: statifyImg,
      link: "https://statify.zaroc.de",
      code: "https://github.com/z4roc/statify_next",
    },
    {
      name: "Prüfungsvorbereitung",
      stack: ["JavaScript", "React", "NextJS", "MDX"],
      description:
        "Eine Website erstellt mit NextJS, um Anwendungsentwickler auf die Abschlussprüfung vorzubereiten.",
      image: reactIcon,
      link: "https://pruefungsvorbereitung.aktamirov.de",
      code: "https://github.com/z4roc/pruefungsvorbereitung",
    },
    {
      name: "MyPass",
      stack: ["C#", ".NET", "Firebase"],
      description:
        "Eine kleine WPF .NET Anwendung, um die eigenen Passwörter zu verwalten",
      image: csharpIcon,
      code: "https://github.com/z4roc/MyPass",
    },
    {
      name: "Portfolio",
      stack: ["TypeScript", "Svelte", "Tailwind"],
      description: "Mein Portfolio.",
      image: svelteIcon,
      code: "https://github.com/z4roc/portfolio_svelte",
      link: "https://aktamirov.de",
    },
    {
      name: "FirePass",
      stack: ["Flutter", "Firebase"],
      description: ["Ein kleiner Passwort Manager erstellt mit Flutter."],
      image: flutterIcon,
      code: "https://github.com/z4roc/firepass",
    },
  ];
</script>

<svelte:head>
  <title>Arthur Aktamirov - Alle Projekte</title>
  <meta
    name="description"
    content="Portfolio von Arthur Aktamirov. Enthält alle aktuell öffentlichen Projekte auf GitHub."
  />

  <link rel="icon" href="images/favicon.png" />
</svelte:head>

<section
  id="projects"
  class="md:h-full h-full md:p-20 flex flex-col items-center justify-center md:gap-10 gap-5"
>
  <h1 class="relative text-3xl md:text-4xl lg:text-5xl font-bold">Projekte</h1>

  <div
    class="relative grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-cols-auto"
  >
    {#each projects as project}
      <div
        class="card glass backdrop-blur-2xl pt-10 from-cyan-300/10 to-purple-500/10 rounded-md border-1 border-opacity-50 bg-gradient-to-bl sm:w-80 md:w-96 w-72 shadow-xl"
      >
        <figure>
          <img
            src={project.image}
            alt={project.name}
            class="md:h-32 md:w-32 h-20 w-20"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{project.name}</h2>
          <p>{project.description}</p>
        </div>

        <div class="pb-4 pl-4 justify-start flex flex-wrap flex-1 gap-2">
          {#each project.stack as item}
            <div class="badge badge-lg badge-outline text-xs">{item}</div>
          {/each}
        </div>
        <div class="pr-4 pb-4 card-actions justify-end flex gap-4">
          {#if project.link != null}
            <a class="btn btn-md bg-gray-950" href={project.link}>
              <img src={globe} height="22" width="22" alt="globe" />
              Website
            </a>
          {/if}

          {#if project.code != null}
            <a
              class="btn bg-gray-200 bg-opacity-85 text-black hover:bg-gray-500"
              href={project.code}
            >
              <img src={githubIcon} height="25" width="25" alt="github" />
              Code
            </a>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
