<script module lang="ts">

    interface HelpControl {
        open: () => void;
    }
    export const HelpControl : HelpControl = {
        open: () => {
            throw new Error("HelpControl not initialized");
        }
    }
</script>

<script lang="ts">
    import {fade} from 'svelte/transition';

    let isOpen = $state(false)

    const open = () => {
        isOpen = true;
    }

    HelpControl.open = open;

    const close = () => {
        isOpen = false;
    }

</script>

{#if isOpen}
<div transition:fade class="helpContainer" onclick={close}>
    <div class="library help">
        <span>Playlists</span>
    </div>
    <div class="searchBar help">
        <span>Search Bar</span>
    </div>
    <div class="currentSong help">
        <span>Current Song</span>
    </div>
    <div class="timeline help">
        <span>Timeline</span>
    </div>
    <div class="mainPage help">
        <span>Main Page</span>
    </div>
    <div class="trackControl help">
        <span>Track Controls</span>
    </div>
</div>
{/if}


<style>
    .help{
        border:  double #f7e35c 5px ;
        border-radius: 20px;
    }
    .help span{
        font-weight: bold;
        color: #f7e35c;
        font-size: 2rem;
        -webkit-text-stroke: 2px black ;
    }


    .timeline span{
        position: absolute;
        left: -150px;
        bottom: -5px;
    }

    .library span{
        position: absolute;
        right: 20px;
    }

    .searchBar span{
        position: absolute;
        right: -190px;
        bottom: 10px;
    }

    .currentSong span{
        position: absolute;
        left: 0;
        bottom: -50px;
    }

    .trackControl span{
        position: absolute;
        top: -50px;
    }

    .mainPage span{
        position: absolute;
        left: 20px;
    }

    .helpContainer{
        cursor: pointer;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
    }
    .library {
        position: fixed;
        width: 420px;
        margin: 90px 0 75px 10px;
        height: calc(100vh - 150px);
        left: 0;
    }

    .searchBar{
        width: 1050px;
        padding: 25px;
        height: 75px;
        position: fixed;
        left: 50%;
        transform: translate(-47%, 0);
    }

    .currentSong{
        position: fixed;
        right: 0;
        padding-top: 25px;
        padding-bottom: 25px;
        width: 420px;
        margin: 90px 10px 75px 0;
        height: 600px;
    }

    .timeline{
        height: 40px;
        width: 70vw;
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .mainPage{
        width:calc(100vw - 900px);
        height: calc(100vh - 175px);
        top: 100px;
        left: 50%;
        transform: translate(-50%, 0);
        position: fixed;
    }

    .trackControl {
        position: fixed;
        bottom: 80px;
        right: 50px;
        width: 350px;
        height: 90px;
    }
</style>