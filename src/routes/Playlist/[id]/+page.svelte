<script lang="ts">

    import IconButton from "../../../shared/Components/iconButton.svelte";
    import icons from "../../../shared/icons.js";
    import SongItem from "../songItem.svelte";
    import {page} from "$app/state";
    import {allPlaylists} from "../../../stores/playlistState.svelte";
    import {setQueue, type Song} from "../../../stores/songsState.svelte";

    let currentPlaylist = $derived(allPlaylists.find(x => x.id === Number(page.params.id))!)
    let currentPage = $state.snapshot(page.params.id);
    let xd :Song[] = [];
    let songs = $derived.by(() : Song[] =>{
        console.log(currentPage, page.params.id, xd.length);
        if(currentPage === page.params.id && xd.length !== 0) {
            return xd;
        }
        else {
            currentPage = $state.snapshot(page.params.id);
            return allPlaylists.find(x => x.id === Number(page.params.id))!.songs
        }
    })

    $effect(()=> {
        xd = $state.snapshot(songs)
    })

    const onPlaylistClickHandle = () => {
        PlaySong(0);
    }
    const PlaySong = (songIndex : number) => setQueue(currentPlaylist.songs, songIndex);

</script>
    <div class="playlistContainer w-full">
        <div class="playlistPrev flex w-full">

            <button class="song-container relative" onclick={onPlaylistClickHandle}>
                <img class="preview w-80 h-80" alt="prev" src="../{currentPlaylist.cover}"/>
                <span class="play-button">▶</span>
            </button>
            <div class="playlistInfoContainer relative">
                <h1 class="title">{currentPlaylist.name}</h1>
                <h1 class="subtitle">{currentPlaylist.username}</h1>
                <span class="absolute right-3.5 bottom-3.5">
                    {#if songs.length > 0}
                    <IconButton onClick={onPlaylistClickHandle} icon={icons.Play}/>
                    {/if}
                </span>
            </div>
        </div>
        <div>
            <ul>
                {#if songs.length === 0}
                    <h1 class="emptyText">Playlist is empty</h1>
                {:else}
                    {#each songs as song, i}
                        <li>
                            <SongItem
                                    Index={i}
                                    Song={song}
                                    onSongClick={()=> PlaySong(i)}
                            />
                        </li>
                    {/each}
                {/if}
            </ul>
        </div>
    </div>
<style>
    .playlistContainer {
        padding-inline: 15rem;
        padding-top: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .preview {
        border-radius: 15px;
        background: #fff3b9;
        object-fit: cover;
        cursor: pointer;
    }

    .playlistInfoContainer {
        width: calc(100% - 20rem);
        margin-left: 2rem;
        z-index: 0;
    }

    .title {
        font-size: 64px;
        color: white;
    }

    .subtitle {
        font-size: 32px;
        color: #979590;
    }

    .playlistPrev {
        border: #282828 solid 3px;
        border-radius: 30px;
        padding: 2rem;
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

    /* On hover */
    .song-container:hover .preview {
        opacity: 0.5; /* Dims the image */
    }

    .song-container:hover .play-button {
        opacity: 0.5; /* Shows the play button */
        cursor: pointer;
    }

    .emptyText {
        color: white;
        font-size: 72px;
        margin-top: 4rem;
        opacity: 0.3;
        text-align: center;
    }
</style>