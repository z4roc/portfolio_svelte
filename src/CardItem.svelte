
<script lang="ts">
    export let icon:string;
    export let header:string;
    export let tags:string[];

</script>

<div class="glass transform transition-all card card-side md:card-normal bg-gradient-to-bl h-min md:h-full sm:max-h-72 max-h-60
     hover:bg-right-bottom hover:bg-gradient-to-tl hover:scale-110 ease-in-out duration-300 from-cyan-300/10 to-purple-500/10  
     backdrop-blur-lg rounded-md border-1 border-opacity-50">
      <figure><img src={icon} alt="icon" class="sm:h-20 sm:w-20 sm:p-4 ml-4 object-contain sm:pl-0 p-2 w-16 h-16"/></figure>

      <div class="card-body">
        <h1 class="card-title font-semibold sm:text-2xl text-lg">{header}</h1>
      </div>
  </div>