<script lang="ts">
    let {_class = null, icon, onClick = null } = $props();
</script>

<button class="{_class || ''} iconButton" onclick={onClick}>
    <span class="material-icons">{@html icon}</span>
</button>

<style>
    .iconButton {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .material-icons {
        font-size: 50px;
        transition: transform .2s;
    }

    .material-icons:hover{
        transform: scale(1.2);
    }
</style>
