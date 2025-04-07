<script lang="ts">
    import { page } from "$app/state";
    import {initialSongs, setQueue, songState} from "../../../stores/songsState.svelte.js";
    import {audioState, togglePlay} from "../../../stores/audioState.svelte";
    import LikeSongButton from "../../../shared/Components/likeSongButton.svelte";
    import AddToPlaylistButton from "../../../shared/Components/addToPlaylistButton.svelte";

    let currentSong = $derived(initialSongs.find(x => x.id === Number(page.params.id))!);
    let playingSong = $derived(songState.songs[songState.currentSongIndex]);

    const onSongClickHandle = () => {
        console.log('current', currentSong)
        console.log('playing', playingSong)
        if(currentSong.id === playingSong.id)
            togglePlay()
        else
            setQueue([currentSong], 0);
    }
</script>
<div class="flex flex-col justify-center items-center pt-10">
    <div>
        <button class="song-container" onclick={onSongClickHandle}>
            <img class="songPreview" src="../{currentSong.cover}" alt="song cover">
            <span class="play-button">{audioState.isPlaying && currentSong.id === playingSong.id? "⏸︎" : "▶"}</span>
        </button>
    <div class="w-full">
        <h1 class="songTitle">{currentSong.title}</h1>
        <div class="flex justify-between">
            <div>
                <h2 class="subTitle" style="font-size: 24px">{currentSong.artist}</h2>
                <h3 class="subTitle">{currentSong.album}</h3>
            </div>
            <div class="flex">
                <LikeSongButton songId = {currentSong.id} />
                <AddToPlaylistButton songId = {currentSong.id} />
            </div>
        </div>
    </div>
    </div>
</div>


<style>
    .songPreview {
        border-radius: 15px;
        background: #fff3b9;
        object-fit: cover;
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.3s ease;

        width: 40rem;
        height: 40rem;
    }


    .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: white;
        opacity: 0; /* Hidden by default */
        transition: opacity 0.3s ease;

    }

    .song-container{
        position: relative;
    }

    /* On hover */
    .song-container:hover .songPreview {
        opacity: 0.5; /* Dims the image */
    }

    .song-container:hover .play-button {
        opacity: 0.5; /* Shows the play button */
        cursor: pointer;
    }
    .songTitle {
        font-size: 42px;
        color: white;
    }

    .subTitle {
        color: #979590;
    }
</style>

