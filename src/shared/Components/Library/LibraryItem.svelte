<script>
    export let Image = ""
    export let Href = ""
    export let Label;
    export let Type;
    export let Owner = "";
    export let TypeHref = "";
    export let OwnerHref = "";
</script>

<div class="libraryItem">
    <a href={Href}>
        <img class="image" src="../{Image}" alt="">
    </a>
    <div class="libraryItem-content">
        <a class="libraryItem-label" href={Href}>{Label}</a>
        <span class="libraryItemMeta">
            <a href={OwnerHref}>{Type}</a>
            <a href={TypeHref}>{Owner}</a>
        </span>
    </div>
</div>

<style>
    .libraryItem {
        display: flex;
        margin: 10px;
        width: 100%;
        transition: transform 0.15s;
    }
    .libraryItem:hover {
        transform: scale(1.05);
    }

    .libraryItemMeta {
        display: flex;
        justify-content: space-between;
        color: #979590;
        opacity: 50%;
        width: 100%;
    }

    .image {
        width: 100px;
        height: 100px;
        margin-right: 10px;
        border-radius: 15px;
        background-color: #fff3b9;
        object-fit: cover;
    }

    .libraryItem-label {
        font-size: 32px;
        color: white;
        display: inline-block;
        max-width: 100%;
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .libraryItem-content {
        margin: 5px;
        width: 60%;
    }
</style>
