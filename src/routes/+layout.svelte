<script lang="ts">
  import "../app.css";
  let src = "./images/logoWhite.png";
</script>

<div class="bg-background bg-opacity-50 flex flex-col gap-20 sm:gap-0">
  <video
    src="./videos/bg.mp4"
    class="object-cover fixed w-full h-full"
    autoplay
    loop
    muted
  >
    <track kind="captions" />
  </video>
  <div class="sm:p-6 p-2 sticky">
    <div
      class="navbar glass bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-opacity-100"
    >
      <div class="dropdown block sm:hidden">
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
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/projects">Projects</a></li>
          <li><a href="mailto:arthur@aktamirov.de">Contact</a></li>
        </ul>
      </div>
      <div class="flex-1 navbar-end sm:navbar-start">
        <a class="btn btn-ghost normal-case text-2xl" href="/">
          <img {src} alt="icon" height="200" width="200" />
        </a>
      </div>
      <div class="flex-none hidden sm:block">
        <ul class="menu sm:menu-horizontal menu-sm dropdown-content px-1">
          <li><a href="/projects" class=" text-white text-xl">Projects</a></li>
          <li>
            <a href="mailto:arthur@aktamirov.de" class="text-white text-xl"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <slot />
</div>
