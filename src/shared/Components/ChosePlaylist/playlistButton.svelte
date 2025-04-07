<script lang="ts">
    let { Cover, Title, SongsCount, onClick } = $props();
</script>

<button class="playlistButton" onclick={onClick}>
    <img  src="../{Cover}" alt="" />
    <div>
        <h1>{Title}</h1>
        <p>{SongsCount} songs</p>
    </div>
</button>

<style>
    .playlistButton {
        border-radius: 15px;
        background: #121212;
        height: 125px;
        display: flex;
        align-items: center;
        padding-inline: 15px;
        cursor: pointer;
        transition: opacity 150ms;
    }
    .playlistButton:hover {
        opacity: 0.75;
    }

    .playlistButton div{
        margin-inline: 25px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .playlistButton img{
        width: 100px;
        height: 100px;
        border-radius: 15px;
        object-fit: cover;
    }

    .playlistButton h1{
        font-size: 52px;
        color: white;
    }

    .playlistButton p{
        font-size: 20px;
        color: #979590;
    }
</style>
