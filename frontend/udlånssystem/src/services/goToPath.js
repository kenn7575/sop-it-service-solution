import { navigate } from "svelte-routing";
import { path } from "../stores/pathStore";

export default function goToPath(p) {
  navigate(p);
  path.set(p);
}
