<script lang="ts">
    import {type AudioStateSvelte, audioState, seek} from "../../stores/audioState.svelte";
    import {formatTime} from "../../Utilities/time.js";

</script>

<div class="trackContainer">
    <span class="timeLabel">{formatTime(Math.floor(audioState.currentTime))}</span>
    <input class="timeLine" type="range" min="0" max={audioState.duration} step="0.1" bind:value={audioState.currentTime} on:input={(e) => seek(parseFloat(e.currentTarget.value))}/>
    <span class="timeLabel">{formatTime(Math.floor(audioState.duration))}</span>
</div>

<style>
    .timeLine {
        width: 60%;
        cursor: pointer;
    }

    .timeLine::-moz-range-progress, .timeLine::-webkit-progress-value  {
        background-color: white;
        padding: 2px;
        border-radius: 5px;
    }


    .timeLine:hover::-moz-range-progress, .timeLine::-webkit-progress-value  {
        background-color: #fded95;
    }

    .timeLine::-moz-range-track, .timeLine::-webkit-progress-bar {
        background-color: #979590;
        padding: 2px;
        border-radius: 5px;
    }

    .timeLine::-moz-range-thumb , .timeLine::-webkit-slider-thumb {
        opacity: 0;
        border: none;
        border-radius: 50%;
        background-color: white;
    }
    .timeLine:hover::-moz-range-thumb , .timeLine::-webkit-slider-thumb {
        opacity: 1;
    }

    .timeLabel {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 20px;
        color: white;
    }

    .trackContainer {
        display: flex;
        height: 60px;
        justify-content: center;
        width: 100vw;
        position: fixed;
        z-index: 10;
        bottom: 0;
        background-color: #3f3f3f;
    }
</style>
