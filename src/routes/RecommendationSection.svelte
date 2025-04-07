<script lang="ts">
import RecommendationsElement from "./RecommendationsElement.svelte";

let {songs} = $props();

</script>

<h2>Trending</h2>
<section class="section">
    {#each songs as song}
        <RecommendationsElement image={song.cover} label={song.title} href="Song/{song.id}" />
    {/each}
</section>

<style>
    h2{
        padding-inline: 3rem;
        font-size: 6rem;
        margin: 0;
        padding: 0;
        color: #fff;
    }

    .section {
        display: flex;
        padding: 20px;
        gap: 4rem;
        width: 100%;
        overflow: scroll;
        position: relative;
    }

</style>

