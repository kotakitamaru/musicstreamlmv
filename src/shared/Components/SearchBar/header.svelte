<script>
    import IconButton from "../iconButton.svelte";
    import icons from "../../icons.ts";
    import Avatar from "../avatar.svelte";
    import SearchBar from "./searchBar.svelte";
    import { DropdownMenuController } from "./dropdownMenu.svelte";


    function onMenuClick() {
        DropdownMenuController.open();
    }


</script>

<header class="searchHeader">
    <IconButton icon="{icons.Menu}" onClick={onMenuClick}/>
    <SearchBar/>
    <Avatar/>
</header>


<style>
    .searchHeader {
        background-color: #3f3f3f;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        height: 75px;
        width: 100vw;
        z-index: 10;
        padding-inline: 20px;
    }
</style>