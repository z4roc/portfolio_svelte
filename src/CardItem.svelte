
<script lang="ts">
    export let icon:string;
    export let header:string;
    export let tags:string[];
</script>

<div class="glass transform transition-all card card-side md:card-normal pt-4 bg-gradient-to-bl h-min md:h-full max-h-72
     hover:bg-right-bottom hover:bg-gradient-to-tl hover:scale-110 ease-in-out delay-150 duration-500 from-cyan-300/10 to-purple-500/10  
     backdrop-blur-lg rounded-md border-1 border-opacity-50">
      <figure class="max-h-32"><img src={icon} alt="icon" class="p-5 min-h-16 max-h-32"/></figure>
      <div class="card-body">
        <h2 class="card-title font-semibold">{header}</h2>
      <br/>
      <div class="card-actions p-0 m-0 justify-start">
        {#each tags as tag}
        <div class="badge badge-outline">
            {tag}
          </div>
        {/each}
      </div>
      </div>
  </div>