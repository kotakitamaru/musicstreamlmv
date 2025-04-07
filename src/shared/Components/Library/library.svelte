<script>

    import LibraryItem from "./LibraryItem.svelte";
    import {allPlaylists} from "../../../stores/playlistState.svelte.js";

    const items = $derived(allPlaylists.map(playlist => ({
        Image: playlist.cover,
        Href: `/Playlist/${playlist.id}`,
        Label: playlist.name,
        Type: "Playlist",
        Owner: playlist.username,
    })));

</script>


<aside class="librarySidebar">
    <h2 class="libraryTitle">Library</h2>
    <ul class="librarySidebar-list">
        {#each items as item}
            <li>
                <LibraryItem {...item}/>
            </li>
        {/each}
    </ul>
</aside>

<style>
    .librarySidebar {
        display: flex;
        flex-direction: column;
        position: fixed;
        border: #282828 solid 3px;
        border-radius: 30px;
        width: 400px;
        margin: 100px 0 75px 20px;
        height: calc(100vh - 175px);
        left: 0;
    }

    .libraryTitle {
        color: #fff3b9;
        font-size: 52px;
        margin: 10px;
    }
</style>