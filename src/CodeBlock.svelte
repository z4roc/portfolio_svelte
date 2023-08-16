<script lang="ts">
  import Prism from "svelte-prism";

  export let language: string;
  export let code: string;
</script>

<Prism {language} source={code} />
