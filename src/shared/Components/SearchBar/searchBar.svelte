
<script lang="ts">
    import IconButton from "../iconButton.svelte";
    import icons from "../../icons.js";
    import IconLink from "../iconLink.svelte";

</script>
<div class="searchBarContainer">
    <IconLink icon={icons.Home} href="/"/>
    <input type="search" placeholder="Search..." class='search-bar'/>
    <IconButton icon={icons.Search}/>
</div>

<style>

    input.search-bar::placeholder {
        color: #8b8b8b;
    }
    .search-bar {
        background: #282828;
        border: none;
        border-radius: 10px;
        width: 950px;
        padding: 25px;
        height: 50px;
    }

    .searchBarContainer {
        display: flex;
        gap: 15px;
    }
</style>
