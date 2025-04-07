<script lang="ts">
	import '../app.css';
    import Library from "../shared/Components/Library/library.svelte";
    import SongPanel from "../shared/Components/SongPanel/songPanel.svelte";
    import Header from "../shared/Components/SearchBar/header.svelte";
    import TrackControll from "../shared/Components/trackControll.svelte";
    import ChosePlaylistModal from "../shared/Components/ChosePlaylist/chosePlaylistModal.svelte";
    import DropdownMenu from "../shared/Components/SearchBar/dropdownMenu.svelte";
    import Help from '../shared/Components/SearchBar/help.svelte';

	let { children } = $props();
</script>


<Help/>
<Header/>
<Library/>
<SongPanel/>
<TrackControll/>
<div class="mainPage">
    {@render children()}
</div>
<ChosePlaylistModal/>
<DropdownMenu/>

<style>
    .mainPage {
        background-color: #121212;
        padding: 75px 400px 60px 400px;
        width: 100vw;
        min-height: 100vh;
    }
</style>