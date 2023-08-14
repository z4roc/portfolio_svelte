<script lang="ts">
  import "../app.css";
  let src = "./images/logoWhite.png";
</script>

<div class="bg-background">
  <video
    src="./videos/bg.mp4"
    class="object-cover fixed w-full h-full"
    autoplay
    loop
    muted
  >
    <track kind="captions" />
  </video>
  <div class="p-6">
    <div
      class="navbar relative bg-gradient-to-r from-primary to-secondary opacity-50 text-opacity-100"
    >
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-2xl" href="/">
          <img {src} alt="icon" height="200" width="200" />
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a href="/projects" class=" text-white text-xl">Projects</a></li>
          <li>
            <a href="/about" class="text-white text-xl">About</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <slot />
</div>
