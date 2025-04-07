<script>
    import {isLiked, like} from "../../stores/playlistState.svelte.js";
    import IconButton from "./iconButton.svelte";
    import icons from "../icons.js";

let {songId} = $props()
</script>

<IconButton icon={isLiked(songId)?icons.HeartFilled:icons.Heart} onClick={() => like(songId)}></IconButton>
