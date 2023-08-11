<script lang="ts">				
    import "../app.css"
    let src = "./images/icon.png"
</script>

<div class=" h-screen bg-bgdark">
    <div class="p-6 ">
        <div class="navbar bg-gradient-to-r from-purple-500 to-blue-800 opacity-75 text-opacity-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-2xl" href="/">
                    <img src={src} alt="icon" height="50" width="50"/>
                    <p>aktamirov.de</p>
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
    <slot/>
</div>