<script lang="ts">
  import "../app.css";
  let src = "./images/logoWhite.png";
  `
  <video
    src="./videos/bg.mp4"
    class="object-cover fixed w-full h-full"
    autoplay
    loop
    muted
  >
  `;
</script>

<div
  class="bg-gradient-to-r from-background via-black to-background flex flex-col gap-20"
>
  <div class="sm:p-6 p-2 sticky">
    <div
      class="navbar z-50 rounded-lg glass bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-opacity-100"
    >
      <div class="flex-1 navbar-start sm:navbar-start">
        <a class="btn btn-ghost normal-case text-2xl" href="/">
          <img {src} alt="icon" height="200" width="200" />
        </a>
      </div>
      <div class="flex-none hidden sm:block">
        <ul class="menu sm:menu-horizontal z-[1] menu-sm dropdown-content px-1">
          <li><a href="/projects" class=" text-white text-xl">Projekte</a></li>
          <li>
            <a href="/Lebenslauf_DE.pdf" class="text-white text-xl">CV</a>
          </li>
          <li>
            <a href="mailto:arthur@aktamirov.de" class="text-white text-xl"
              >Kontakt</a
            >
          </li>
        </ul>
      </div>
      <div class="dropdown z-50 dropdown-end block sm:hidden">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow glass bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-box w-52"
        >
          <li class="z-[100]"><a href="/projects">Projekte</a></li>
          <li class="z-[100]"><a href="/Lebenslauf_DE.pdf">CV</a></li>
          <li class="z-[100]">
            <a href="mailto:arthur@aktamirov.de">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<slot />
