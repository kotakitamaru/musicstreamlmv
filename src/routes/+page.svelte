<script>
    import RecommendationSection from "./RecommendationSection.svelte";
    import {initialSongs} from "../stores/songsState.svelte.js";


</script>

<div class="mainPage">
    <RecommendationSection songs={initialSongs}/>
</div>

<style>
    .mainPage {
        padding: 100px;
        width: 100%;
        min-height: 100%;
    }

</style>