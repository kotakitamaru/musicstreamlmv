<script lang="ts">
    import IconButton from "../iconButton.svelte";
    import icons from "../../icons.js";
    import {audioState, setAudioRef, setVolume, togglePlay, updateTime} from "../../../stores/audioState.svelte.js";
    import {nextSong, prevSong, type SongStore} from "../../../stores/songsState.svelte.js";
    import {songState} from "../../../stores/songsState.svelte.js";
    import {onMount} from "svelte";

    let currentSongScr = $derived(songState.songs[songState.currentSongIndex]!.src)


    let audioElement: HTMLAudioElement | null = null;
    onMount(() => {
        if (audioElement) {
            setAudioRef(audioElement);
        }
    });

    const handleEnded = () => {
        nextSong();
    };
</script>

<div class="songControlsContainer">
    <IconButton icon={icons.Shuffle}/>
    <IconButton icon={icons.Previous} onClick={prevSong}/>
    <IconButton icon={audioState.isPlaying? icons.Pause : icons.Play} onClick={togglePlay}/>
    <IconButton icon={icons.Next} onClick={nextSong}/>
    <IconButton icon={icons.Volume}/>
    <input class="volume" type="range" min="0" max="1" step="0.1" bind:value={audioState.volume} on:input={(e) => setVolume(parseFloat(e.currentTarget.value))}/>
</div>

<audio bind:this={audioElement} on:timeupdate={updateTime} on:loadedmetadata={updateTime} on:ended={handleEnded}>
    <source src="../{currentSongScr}" type="audio/mpeg" />
    Your browser does not support the audio element.
</audio>



<style>
    .songControlsContainer {
        width: fit-content;
        padding-inline: 15px;
        background-color: #282828;
        border-radius: 25px;
        height: 50px;
        display: flex;
        justify-content: center;
    }

    .volume {
        width: 5rem;
    }
    .volume::-moz-range-progress  {
        background-color: #fded95;
    }
    .volume::-moz-range-track  {
        background-color: #979590;
    }
</style>