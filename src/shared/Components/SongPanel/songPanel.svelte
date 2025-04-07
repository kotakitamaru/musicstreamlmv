<script>
    import CurrentSongInfo from "./currentSongInfo.svelte";
    import SongControls from "./songControls.svelte";

</script>
<aside class="songSidebar">
    <CurrentSongInfo/>
    <div class="songControlsContainer">
        <SongControls/>
    </div>
</aside>


<style>
    .songSidebar {
        position: fixed;
        right: 0;
        padding-top: 25px;
        padding-bottom: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /*align-items: center;*/
        z-index: 30;


        border: #282828 solid 3px;
        border-radius: 30px;
        width: 400px;
        margin: 100px 20px 75px 0;
        height: calc(100vh - 175px);
    }
    .songControlsContainer{
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>