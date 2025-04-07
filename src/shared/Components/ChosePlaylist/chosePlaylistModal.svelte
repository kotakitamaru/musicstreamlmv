
<script module lang="ts">
    import type {Playlist} from "../../../stores/playlistState.svelte";
    import {fade} from "svelte/transition"
    type ChosePlaylist = {
        open: (playlists: Playlist[], modalTitle :string | null) => Promise<number>;
    }

    export const ChosePlaylist : ChosePlaylist = {
        open: () => {
            throw new Error("ChosePlaylist not initialized");
        }
    }
</script>


<script lang="ts">
    import IconButton from "../iconButton.svelte";
    import PlaylistButton from "./playlistButton.svelte";
    import icons from "../../icons";

    let playlistsList = $state<Playlist[]>([]);
    let isOpen = $state(false)
    let modalTitle = $state("Playlists")

    let promiseResolve : (value: number) => void;
    let promiseReject : (reason?: any) => void;


    const open = (playlists: Playlist[], title : string | null = null): Promise<number> => {
        playlistsList = playlists;
        if(title)
            modalTitle = title;
        isOpen = true;
        return new Promise((resolve, reject) => {
            promiseResolve = resolve;
            promiseReject = reject;
        });
    }

    ChosePlaylist.open = open

    const close =() =>{
        isOpen = false;
        promiseReject;
    };

    const chose = (id : number) => {
        isOpen = false;
        return promiseResolve(id);
    }

</script>


{#if isOpen}
    <button transition:fade={{duration: 150}} class="dim" onclick={close}>
        <div class="modal" onclick={e => {e.stopPropagation()}}>
            <IconButton _class="closeButton" icon={icons.Close} onClick={close}/>
            <h1 class="title">{modalTitle}</h1>
            <div class="playlistsContainer">
                {#if playlistsList.length === 0}
                    <h1 class="title">No Playlists</h1>
                {:else }
                    {#each playlistsList as playlist}
                        <PlaylistButton
                                Cover={playlist.cover}
                                Title={playlist.name}
                                SongsCount={playlist.songs.length}
                                onClick={() => chose(playlist.id)}
                        />
                    {/each}
                {/if}
            </div>
        </div>
    </button>
{/if}



<style>
    .title{
        color: white;
        margin: 25px 0 0 50px;
        font-size: 72px;
        text-align: left;
    }

    .modal :global(.closeButton){
        position: absolute;
        right: 25px;
        top: 25px;
    }

    .dim{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal{
        background-color: #282828;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 35vw;
        height: 75vh;
        border-radius: 25px;
        box-shadow: #3f3f3f 0 0 20px 0;
    }

    .playlistsContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-inline: 25px;
        margin-top: 25px;
        gap: 15px;
        overflow: scroll;
        max-height: calc(100% - 200px);
    }
</style>