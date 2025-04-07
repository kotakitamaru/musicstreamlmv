<script lang="ts">
    import IconButton from "./iconButton.svelte";
    import icons from "../icons.js";
    import { ChosePlaylist } from "./ChosePlaylist/chosePlaylistModal.svelte";
    import {addToPlaylist, getPlaylistsWithOutSong} from "../../stores/playlistState.svelte.js";

    let {songId} = $props();

    function onClickHandle() {
        const playlist = getPlaylistsWithOutSong(songId);
        console.log(playlist);
        ChosePlaylist
            .open(playlist, "Add to playlist")
            .then((id) => {
                addToPlaylist(id, songId);
            });
    }
</script>

<IconButton icon={icons.Add} onClick={onClickHandle}/>

