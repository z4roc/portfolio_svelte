<script>
  import CardItem from "../CardItem.svelte";
  import { fade } from "svelte/transition";
  import hljs from "highlight.js";
  onMount(() => {
    const rotate = () => {
      if (currentIndex >= codeBlocks.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      currentCodeHtml = hljs.highlight(codeBlocks[currentIndex].code, {
        language: codeBlocks[currentIndex].lang,
      }).value;
    };

    const interval = setInterval(rotate, 2000);
    rotate();

    return () => clearInterval(interval);
  });

  // @ts-ignore
  import {
    dartIcon,
    javaIcon,
    csharpIcon,
    jsIcon,
    flutterIcon,
    dotNetIcon,
    nodeJsIcon,
    reactIcon,
    firebaseIcon,
    mySqlIcon,
    svelteIcon,
    tailwindIcon,
  } from "../images/icons/svgs";
  import { onMount } from "svelte";

  let codeBlocks = [
    {
      lang: "csharp",
      code: `class Program {\n\tstatic void Main(string[] args) {\n\t\tConsole.WriteLine("Welcome!");\n\t}\n  }`,
    },
    {
      lang: "javascript",
      code: `console.log('Welcome!');`,
    },
    {
      lang: "java",
      code: `class Program {\n\tstatic void Main(String[] args) {\n\t\tSystem.out.println("Welcome!");\n\t}\n  }`,
    },
    {
      lang: "dart",
      code: `void main(String[] args) {\n\tprint("Welcome");\n  }`,
    },
    {
      lang: "jsx",
      code: `import React from 'react';
  export default const App = () => {
    return (
      <h1>Welcome!</h1>
    );
  };`,
    },
    {
      lang: "sql",
      code: `SELECT GREETING FROM PAGE;`,
    },
  ];
  let currentIndex = 0;
  let code = codeBlocks[currentIndex];
  let currentCodeHtml = hljs.highlight(code.code, {
    language: code.lang,
  }).value;
</script>

<svelte:head>
  <link href="./hljs-theme.css" rel="stylesheet" />
  <title>Arthur Aktamirov - Fullstack Developer</title>
  <meta
    name="description"
    content="Arthur 'ZAROC' Aktamirov, ein Fullstack developer speyialisiert in .NET, NodeJS / React und Flutter. GitHub: https://github.com/z4roc, LinkedIn: https://linkedin.com/arthur-aktamirov"
  />
</svelte:head>

<section
  id="landing"
  class="h-screen -z-10 sm:relative sm:overflow-hidden flex items-center justify-center"
>
  <div
    class="-top-10 md:top-0 lg:-top-10 relative grid grid-cols-1 w-full gap-5 md:grid-cols-2 p-10"
  >
    <div>
      <h3
        class="sm:text-3xl p-2 lg:text-4xl text-2xl md:p-2 pl-5 md:pb-4 font-semibold"
      >
        Hallo! Ich bin
      </h3>
      <span
        class="xl:text-8xl sm:text-6xl text-5xl md:p-4 pl-10 font-bold bg-gradient-to-tl from-gray-600 to-white text-transparent bg-clip-text"
        >Arthur</span
      >
      <span
        class="lg:text-8xl sm:text-6xl text-5xl md:p-4 pl-10 font-bold bg-gradient-to-r shine text-transparent bg-clip-text"
        >'ZAROC'</span
      >
      <span
        class="xl:text-8xl sm:text-6xl text-5xl md:p-4 pl-10 font-bold bg-gradient-to-br from-gray-600 to-white text-transparent bg-clip-text"
        >Aktamirov</span
      >
      <h3 class="xl:text-2xl sm:text-xl text-lg md:p-2 pl-5 pt-4">
        Fullstack Developer
      </h3>
      <div class="flex p-5 gap-4">
        <a href="https://github.com/z4roc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 hover:fill-gray-500"
            fill="currentColor"
            style="color: #FFFFFF"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/arthur-aktamirov">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 hover:fill-gray-500"
            fill="currentColor"
            style="color: #FFFFFF"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div
        class="mockup-code glass
       bg-gradient-to-bl from-cyan-400/10 via-accent/10 to-purple-500/10
      xl:m-20 h-60 min-w-0 w-full"
      >
        {#key currentCodeHtml}
          <pre><code
              in:fade={{ duration: 400, delay: 500 }}
              out:fade={{ duration: 100, delay: 400 }}
              class="text-md lg:text-lg xl:text-xl"
              >{@html currentCodeHtml}</code
            ></pre>
        {/key}
      </div>
    </div>
  </div>
</section>
<section
  id="skills"
  class="h-min p-4 lg:relative sm:gap-10 items-center justify-center flex flex-col"
>
  <h1 class="xl:text-6xl sm:text-4xl text-2xl font-bold relative xl:p-5 p-3">
    Programmiersprachen
  </h1>
  <div class="flex flex-wrap gap-5 flex-1 justify-center">
    <CardItem
      header={"C#"}
      icon={csharpIcon}
      tags={["Server", "Desktop", "Web"]}
    />
    <CardItem header={"Dart"} icon={dartIcon} tags={["Mobile"]} />
    <CardItem header={"Java"} icon={javaIcon} tags={["Server", "Desktop"]} />
    <CardItem header={"JavaScript"} icon={jsIcon} tags={["Server", "Web"]} />
  </div>
  <h1 class="xl:text-6xl text-2xl sm:text-4xl font-bold relative xl:p-5 p-3">
    Frameworks
  </h1>
  <div class="flex flex-wrap gap-5 flex-1 justify-center">
    <CardItem
      header={"flutter"}
      icon={flutterIcon}
      tags={["Server", "Desktop", "Web", "UI"]}
    />
    <CardItem header={".NET"} icon={dotNetIcon} tags={["Mobile"]} />
    <CardItem
      header={"nodeJS"}
      icon={nodeJsIcon}
      tags={["Server", "Desktop"]}
    />
    <CardItem header={"React"} icon={reactIcon} tags={["Server", "Web"]} />
    <CardItem header={"Svelte"} icon={svelteIcon} tags={["Server", "Web"]} />
    <CardItem header={"Tailwind"} icon={tailwindIcon} tags={["UI", "Web"]} />
  </div>
  <h1 class="xl:text-6xl text-2xl sm:text-4xl font-bold relative xl:p-5 p-3">
    Datenbanken
  </h1>
  <div class="flex flex-wrap gap-5 flex-1 justify-center">
    <CardItem
      header={"Firebase"}
      icon={firebaseIcon}
      tags={["Server", "Desktop", "Web"]}
    />
    <CardItem header={"MySQL"} icon={mySqlIcon} tags={["Mobile"]} />
  </div>
</section>
