<script lang="ts">
import {formatTime} from "../../Utilities/time";
import LikeSongButton from "../../shared/Components/likeSongButton.svelte";
import {songState} from "../../stores/songsState.svelte";
import RemoveFromPlaylistButton from "../../shared/Components/removeFromPlaylistButton.svelte";
import {page} from "$app/state";
    import AddToPlaylistButton from "../../shared/Components/addToPlaylistButton.svelte";
import {allPlaylists} from "../../stores/playlistState.svelte";

let {Index, Song, onSongClick} = $props()
let isPlaying = $derived(songState.currentSong().id === Song.id);
let isInPlaylist = $derived(allPlaylists.find(x => String(x.id) === page.params.id)?.songs.some(x => x.id === Song.id));
</script>

<div class="songItem">
    <h1 class="p-3" style="color:{isPlaying? '#fff3b9' : 'white'}"> {Index+1}</h1>
    <img class="img" src="../{Song.cover}" alt="song"/>
    <div class="flex justify-between w-11/12">
        <div class="p-3 flex flex-col">
            <h1 class="songTitle" style="color:{isPlaying? '#fff3b9' : 'white'}">{Song.title}</h1>
            <h1 class="text-white">{Song.artist} • {Song.album}</h1>
        </div>
        <div class="flex items-center">
            <LikeSongButton songId = {Song.id}/>
            {#if page.params.id !== '0' && isInPlaylist}
                <RemoveFromPlaylistButton songId = {Song.id} />
            {:else}
                <AddToPlaylistButton songId = {Song.id}/>
            {/if}
            <h1 class="length">{formatTime(Song.duration)}</h1>
        </div>
    </div>
</div>


<style>
    .songItem {
        display: flex;
        align-items: center;
        border: #282828 solid 3px;
        border-radius: 20px;
        width: 100%;
        height: 6rem;
        margin-block: 0.5rem;
    }

    .img {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 10px;
        background: #fff3b9;
        object-fit: cover;
    }

    .songTitle{
        font-size: 24px;
    }

    .length {
        font-size: 1.5rem;
        padding-inline: 1rem;
        color: #fff
    }
</style>