<script lang="ts">
    import {songState} from "../../../stores/songsState.svelte";
    import LikeSongButton from "../likeSongButton.svelte";
    import AddToPlaylistButton from "../addToPlaylistButton.svelte";

    let currentSong = $derived(songState.songs[songState.currentSongIndex])!;

    console.log(currentSong);
</script>
<div class="songInfoContainer">
    <img class="image" src="../{currentSong.cover}" alt="">
    <span class="songInfo">
        <a href="/Song/{currentSong.id}" class="imageTitle">{currentSong.title}</a>
        <span class="flex">
            <LikeSongButton songId = {currentSong.id} />
            <AddToPlaylistButton songId = {currentSong.id}/>
        </span>
    </span>
    <p class="artistTitle">{currentSong.artist}</p>
</div>

<style>
    .image {
        width: 350px;
        height: 350px;
        border-radius: 15px;
        object-fit: cover;
        background-color: #fff3b9;
    }

    .songInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-inline: 5px;
    }

    .songInfoContainer p {
        padding-inline: 5px;
        
        width: 100%;
    }

    .songInfoContainer {
        padding-inline: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .imageTitle {
        font-size: 42px;
        color: white;
    }

    .artistTitle {
        color: #979590;
    }
</style>