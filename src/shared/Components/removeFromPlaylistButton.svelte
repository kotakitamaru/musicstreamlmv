<script lang="ts">
    import IconButton from "./iconButton.svelte";
    import icons from "../icons.js";
    import { ChosePlaylist } from "./ChosePlaylist/chosePlaylistModal.svelte";
    import {addToPlaylist, getPlaylistsWithSong, removeFromPlaylist} from "../../stores/playlistState.svelte.js";

    let {songId} = $props();

    function onClickHandle() {
        const playlist = getPlaylistsWithSong(songId);
        console.log(playlist);
        ChosePlaylist
            .open(playlist, "Remove from playlist")
            .then((id) => {
                removeFromPlaylist(id, songId);
            });
    }
</script>

<IconButton icon={icons.Remove} onClick={onClickHandle}/>

