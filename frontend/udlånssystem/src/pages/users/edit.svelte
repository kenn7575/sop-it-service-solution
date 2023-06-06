<script>
  import { getLastPath } from "../../services/pathFormatter";
  import { path } from "../../stores/pathStore";
  $: id = getLastPath($path);
</script>

<h1>edit</h1>
<h2>{id}</h2>
